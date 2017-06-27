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
                        name: 'Pierwszy wydatek...',
                        value: 0,
                        frequency: 0,
                        periodVal: 0,
                        validationText: '',
                        validation: null,
                    },
                ],
                chartData:{},
            }
        }


        handleNameValChange = (expense, i) => {
            const expensesCopy = this.state.expenses.slice();
            expensesCopy[i].name = "dupa";
            this.setState({
                expenses: expensesCopy
            });
            console.log(event.target.value);
        };


        handleValueValChange = (expense, i) => {
            const expensesCopy = this.state.expenses.slice();
            expensesCopy[i].value = 50; //Tu powinien byc event.target.value!!! Ale nie dziala
            this.setState({
                expenses: expensesCopy
            });
        };


        handleFrequencyValChange = event => {
            this.setState({
                expenses: [
                    {
                        frequency: event.target.value
                    },
                ]
            });
        };
        handlePeriodValChange = event => {
            this.setState({
                expenses: [
                    {
                        period: event.target.value,
                    },
                ]

            });
        };


        handleAddNewExpense = event => {
            const expensesCopy = this.state.expenses.slice();

            const newExpense = {
                name: 'Kolejny wydatek...',
                value: 5,
                frequency: 2,
                period: 0,
                validationText: '',
                validation: null,
            };

            expensesCopy.push(newExpense);

            this.setState({
                expenses: expensesCopy,
                chartData:{},
            });
        };

        handleExpensesCount = event => {

        };




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
                        <Chart chartData={this.state.chartData} expenses={this.state.expenses} />
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
