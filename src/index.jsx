import React from 'react';
import ReactDOM from 'react-dom';
import {Contact} from "./components/Contact.jsx";
import {Menu} from "./components/Menu.jsx";
import {Header} from "./components/Header.jsx";
import {ExpensesList} from './components/ExpensesList.jsx';
import {Chart} from './components/Chart.jsx';
import styled from 'styled-components';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

const Wrapper = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    padding: 0;
    background: linear-gradient(rgba(255, 255, 255, .3),rgba(255, 255, 255, 0.7)), url(./src/img/bg-calc.jpg) no-repeat center center;
    background-attachment: fixed;
`;

const Container = styled.div`
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      min-height: 100vh;
      display: flex;
      align-items: center;
      flex-direction: column;
`;

export default Container;

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
                        validation: null,
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
            });

            const expensesColors = expensesCopy.map(() => {
                return '#'+Math.random().toString(16).substr(-6);
            });

            this.setState({
                showChart: true,
                chartData: {
                    labels: expensesNames,
                    datasets: [
                        {
                            label: 'Expenes',
                            data: expensesValues,
                            backgroundColor: expensesColors,
                        }
                    ]
                }
            });
        }

        // Sumowanie wszystkich wydatków
        handleExpensesCount = () => {
            const expensesCopy = this.state.expenses.slice();
            const expensesValues = expensesCopy.map((expense) => {
                return expense.value;
            });

            let noValue = expensesValues.some((expense) => {
                return expense === '' || expense === '0';
            });


            if (noValue) {
                console.log("Dodaj wydatki!");
            } else {
                this.getChartData();
            }

        };

        handleDecreaseYears = () => {
            const newYears = this.state.userYears - 1;
            this.setState({
                userYears: newYears,
            });
            // Wymuszynie aktualizacji state
            this.forceUpdate( () => {
                this.getChartData();
            });

        };

        handleIncreaseYears = () => {
            const newYears = this.state.userYears + 1;
            this.setState({
                userYears: newYears,
            });
            this.forceUpdate( () => {
                this.getChartData();
            });

        };

        componentWillUpdate() {

        };

        render() {
            return <Wrapper>
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
                           userYears={this.state.userYears}
                           showChart={this.state.showChart}
                           onUserYearsIncrease={this.handleIncreaseYears}
                           onUserYearsDecrease={this.handleDecreaseYears}
                    />
                </Container>
            </Wrapper>
        }
    }
    class App extends React.Component {

        render() {
            return (
                <Router history={hashHistory}>
                    <Route path="/" component={Menu}>
                        <IndexRoute component={Header}/>
                        <Route path="/calc" component={Main}/>
                        <Route path="/contact" component={Contact}/>
                    </Route>
                </Router>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    );
});
