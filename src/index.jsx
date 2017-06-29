import React from 'react';
import ReactDOM from 'react-dom';
import {Contact} from "./components/Contact.jsx";
import {Menu} from "./components/Menu.jsx";
import {Header} from "./components/Header.jsx";
import {ExpensesList} from './components/ExpensesList.jsx';
import {Chart} from './components/Chart.jsx';
import styled from 'styled-components';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

const Container = styled.div`
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      min-height: 100vh;
`;

document.addEventListener('DOMContentLoaded', () => {
    class Main extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                expenses: [
                    {
                        name: '',
                        value: '',
                        frequency: 1,
                        period: 'per week',
                        validationText: '',
                        validation: '',
                    },
                ],
                chartData: null,
                userYears: 10,
                showChart: false,
            }
        }

        handleNameValChange = (event, expense, i) => {
            const expensesCopy = this.state.expenses.slice();
            expensesCopy[i].name = event.target.value;
            this.setState({
                expenses: expensesCopy
            });
        };

        handleValueValChange = (event, expense, i) => {
            const expensesCopy = this.state.expenses.slice();
            expensesCopy[i].value = event.target.value;
            this.setState({
                expenses: expensesCopy
            });
        };

        handleFrequencyValChange = (event, expense, i) => {
            const expensesCopy = this.state.expenses.slice();
            expensesCopy[i].frequency = event.target.value;
            this.setState({
                expenses: expensesCopy
            });
        };

        handlePeriodValChange = (event, expense, i) => {
            const expensesCopy = this.state.expenses.slice();
            expensesCopy[i].period = event.target.value;
            this.setState({
                expenses: expensesCopy
            });
        };

        handleExpenseRemove = (expense, i) => {
            if (this.state.expenses.length > 1) {
                const expensesCopy = this.state.expenses.slice();
                expensesCopy.splice(i, 1);
                this.setState({
                    expenses: expensesCopy
                });
            }

        };


        //Dodawanie kolejnycych wydatków
        handleAddNewExpense = event => {
            const expensesCopy = this.state.expenses.slice();
            const newExpense = {
                name: '',
                value: '',
                frequency: 1,
                period: 'per week',
                validationText: '',
                validation: '',
            };
            expensesCopy.push(newExpense);
            this.setState({
                expenses: expensesCopy,
                chartData: {},
            });
        };

        // Sumowanie wszystkich wydatków
        handleExpensesCount = () => {
            this.getChartData();
        };

        handleDecreaseYears = () => {
            this.setState({
                userYears: this.state.userYears - 1,
            });
            this.getChartData();
        };

        handleIncreaseYears = () => {
            this.setState({
                userYears: this.state.userYears + 1,
            });
            this.getChartData();
        };


        getChartData() {
            const userYears = this.state.userYears;

            const expensesCopy = this.state.expenses.slice();
            const expensesNames = expensesCopy.map((expense, i) => {
                return expense.name
            });
            const expensesValues = expensesCopy.map((expense, i) => {

                if (expense.period === "per week") {
                    // 365.2422 / 7 = 52.2
                    return (52.2 * expense.frequency * expense.value * userYears).toFixed(2)
                } else if (expense.period === "per month") {
                    // 365.2422 / 30.43685 = 12
                    return (12 * expense.frequency * expense.value * userYears).toFixed(2)
                } else if (expense.period === "per year") {
                    return (expense.frequency * expense.value * userYears).toFixed(2)
                }
                // return (expense.value * expense.frequency)
            });


            this.setState({
                showChart: true,
                chartData: {
                    labels: expensesNames,
                    datasets: [
                        {
                            label: 'Expenes',
                            data: expensesValues,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(255, 159, 64, 0.6)',
                                'rgba(255, 99, 132, 0.6)'
                            ]
                        }
                    ]
                }
            });
        }

        render() {
            return <div>
                {/*<Menu/>*/}
                {/*<Header/>*/}
                <Container>
                    <ExpensesList onNameChange={this.handleNameValChange}
                                  onValueChange={this.handleValueValChange}
                                  onFrequencyChange={this.handleFrequencyValChange}
                                  onPeriodChange={this.handlePeriodValChange}
                                  addNewExpense={this.handleAddNewExpense}
                                  expensesCount={this.handleExpensesCount}
                                  onRemoveClick={this.handleExpenseRemove}
                                  expenses={this.state.expenses}

                    />
                    <Chart chartData={this.state.chartData}
                           expenses={this.state.expenses}
                           onUserYearsIncrease={this.handleIncreaseYears}
                           onUserYearsDecrease={this.handleDecreaseYears}
                           userYears={this.state.userYears}
                           showChart={this.state.showChart}
                    />
                </Container>
            </div>
        }
    }
    class App extends React.Component {

        render() {
            return (
                <Router history={hashHistory}>

                    {/*<IndexRoute component={Main}/>*/}
                    <Route path="/" component={Menu}>
                        <IndexRoute component={Header}/>
                        <Route path="/calc" component={Main}/>
                        <Route path="/contact" component={Contact} />
                    </Route>

                    {/*<Route path="*" component={NotFound}/>*/}



                </Router>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    );
});
