import React from 'react';
import styled from 'styled-components';
import { Spendings } from './components/Spendings';
import { Chart } from './components/Chart';

const Wrapper = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    padding: 0;
    background: linear-gradient(rgba(255, 255, 255, .1),rgba(255, 255, 255, 0.2)), url(./src/img/bg-calc-optimized.jpg) no-repeat center center;
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
class Calculator extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      expenses: [
        {
          name: '',
          value: '',
          frequency: 1,
          period: 'per week',
          validationClass: '',
        },
      ],
      validationText: 'Check if every expense has its price!',
      validation: null,
      showChart: false,
      inflation: null,
      inflationValue: 2,
    };
  }

  handleValueValChange = (event, expense, i) => {
    const expensesCopy = this.state.expenses.slice();
    expensesCopy[i].value = event.target.value;
    if (event.target.value > 0 && event.target.value !== '') {
      expensesCopy[i].validationClass = 'valid';
      this.setState({
        expenses: expensesCopy,
        validation: true,
      });
    } else {
      expensesCopy[i].validationClass = 'invalid';
      this.setState({
        expenses: expensesCopy,
        validation: false,
      });
    }
  };

  handleFrequencyValChange = (event, expense, i) => {
    const expensesCopy = this.state.expenses.slice();
    if (event.target.value < 1) {
      expensesCopy[i].frequency = 1;
    } else {
      expensesCopy[i].frequency = event.target.value;
    }
    this.setState({
      expenses: expensesCopy,
    });
  };

  handlePeriodValChange = (event, expense, i) => {
    const expensesCopy = this.state.expenses.slice();
    expensesCopy[i].period = event.target.value;
    this.setState({
      expenses: expensesCopy,
    });
  };

  handleExpenseRemove = (expense, i) => {
    if (this.state.expenses.length > 1) {
      const expensesCopy = this.state.expenses.slice();
      expensesCopy.splice(i, 1);
      this.setState({
        expenses: expensesCopy,
        showChart: false,
      });
    }
  };

  // Dodawanie kolejnycych wydatków
  handleAddNewExpense = () => {
    const expensesCopy = this.state.expenses.slice();
    const newExpense = {
      name: '',
      value: '',
      frequency: 1,
      period: 'per week',
      validationClass: '',
    };
    expensesCopy.push(newExpense);
    this.setState({
      expenses: expensesCopy,
      showChart: false,
    });
  };

  handleNameValChange = (event, expense, i) => {
    const expensesCopy = this.state.expenses.slice();
    expensesCopy[i].name = event.target.value;
    this.setState({
      expenses: expensesCopy,
    });
  };

  // Sumowanie wszystkich wydatków
  handleExpensesCount = () => {
    const expensesCopy = this.state.expenses.slice();

    expensesCopy.forEach((expense, i) => {
      if (expense.validationClass === 'invalid' ||
        expense.validationClass === '') {
        expensesCopy[i].validationClass = 'invalid';
        this.setState({
          expenses: expensesCopy,
        });
      }
    });

    const noValue = expensesCopy.some(expense => (
      expense.validationClass !== 'valid'
    ));

    if (!noValue) {
      this.setState({
        validation: true,
        showChart: true,
      });
    } else {
      this.setState({
        validation: false,
      });
    }
  };

  handleInflationChange = (event, i) => {
    const expensesCopy = this.state.expenses.slice();
    expensesCopy[i].name = event.target.value;
    this.setState({
      expenses: expensesCopy,
    });
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <Spendings
            {...this.props}
            onNameChange={this.handleNameValChange}
            onValueChange={this.handleValueValChange}
            onFrequencyChange={this.handleFrequencyValChange}
            onPeriodChange={this.handlePeriodValChange}
            addNewExpense={this.handleAddNewExpense}
            expensesCount={this.handleExpensesCount}
            onRemoveClick={this.handleExpenseRemove}
            expenses={this.state.expenses}
            validation={this.state.validation}
            validationText={this.state.validationText}
            inflation={this.state.inflation}
            inflationValue={this.state.inflationValue}
            inflationChange={this.handleInflationChange}
          />

          <Chart
            {...this.props}
            expenses={this.state.expenses}
            showChart={this.state.showChart}
          />
        </Container>
      </Wrapper>
    );
  }
}

export default Calculator;
