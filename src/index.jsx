import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from "./components/Header.jsx";
import {ExpensesList} from './components/ExpensesList.jsx';
import {Chart} from './components/Chart.jsx';
import styled from 'styled-components';

const Container = styled.div`
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
`;

document.addEventListener('DOMContentLoaded', () => {
    class App extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                expenses: [
                    {
                        name: '',
                        value: '',
                        frequency: 1,
                        period: 'Week',
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

        //Dodawanie kolejnycych wydatków
        handleAddNewExpense = event => {
            const expensesCopy = this.state.expenses.slice();
            const newExpense = {
                name: '',
                value: '',
                frequency: 1,
                period: 'Week',
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


        handleIncreaseYears = event => {
            this.setState({
                userYears: this.state.userYears + 1,
            });
        };



        getChartData() {
            const expensesPerYear = 0;
            const userYears = this.state.userYears;

            const expensesCopy = this.state.expenses.slice();
            const expensesNames = expensesCopy.map((expense, i) => {
                return expense.name
            });
            const expensesValues = expensesCopy.map((expense, i) => {

                if (expense.period === "Week") {
                    // 365.2422 / 7 = 52.2
                    return (52.2 * expense.frequency * expense.value * userYears).toFixed(2)
                } else if (expense.period === "Month" ) {
                    // 365.2422 / 30.43685 = 12
                    return (12 * expense.frequency * expense.value * userYears).toFixed(2)
                } else if (expense.period === "Year") {
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
            return (
                <div>
                    <Header/>
                    <Container>
                        <ExpensesList onNameChange={this.handleNameValChange}
                                      onValueChange={this.handleValueValChange}
                                      onFrequencyChange={this.handleFrequencyValChange}
                                      onPeriodChange={this.handlePeriodValChange}
                                      addNewExpense={this.handleAddNewExpense}
                                      expensesCount={this.handleExpensesCount}
                                      expenses={this.state.expenses}
                        />
                        <Chart chartData={this.state.chartData}
                               expenses={this.state.expenses}
                               onUserYearsIncrease={this.handleIncreaseYears}
                               userYears={this.state.userYears}
                               showChart={this.state.showChart}/>
                    </Container>
                </div>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    );
});
