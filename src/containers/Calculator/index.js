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
export class Calculator extends React.Component {
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
      chartData: null,
      userYears: 10,
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
      chartData: {},
    });
  };

  getChartData() {
    const userYears = this.state.userYears;
    const expensesCopy = this.state.expenses.slice();
    const expensesNames = expensesCopy.map(expense => (
      expense.name
    ));
    const expensesValues = expensesCopy.map((expense) => {
      if (expense.period === 'per week') {
        // 365.2422 / 7 = 52.2
        return (52.2 * expense.frequency * expense.value * userYears).toFixed(2);
      } else if (expense.period === 'per month') {
        // 365.2422 / 30.43685 = 12
        return (12 * expense.frequency * expense.value * userYears).toFixed(2);
      }
      return (expense.frequency * expense.value * userYears).toFixed(2);
    });

    const expensesColors = expensesCopy.map(() => (
      `#${Math.random().toString(16).substr(-6)}`
    ));

    this.setState({
      showChart: true,
      chartData: {
        labels: expensesNames,
        datasets: [
          {
            label: 'Expenes',
            data: expensesValues,
            backgroundColor: expensesColors,
          },
        ],
      },
    });
  }

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
      });
      this.forceUpdate(() => {
        this.getChartData();
      });
    } else {
      this.setState({
        validation: false,
      });
    }
  };

  handleDecreaseYears = () => {
    if (this.state.userYears > 1) {
      const newYears = this.state.userYears - 1;
      this.setState({
        userYears: newYears,
      });
      // Wymuszynie aktualizacji state
      this.forceUpdate(() => {
        this.getChartData();
      });
    }
  };

  handleIncreaseYears = () => {
    const newYears = this.state.userYears + 1;
    this.setState({
      userYears: newYears,
    });
    this.forceUpdate(() => {
      this.getChartData();
    });
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
            chartData={this.state.chartData}
            expenses={this.state.expenses}
            userYears={this.state.userYears}
            showChart={this.state.showChart}
            onUserYearsIncrease={this.handleIncreaseYears}
            onUserYearsDecrease={this.handleDecreaseYears}
          />
        </Container>
      </Wrapper>
    );
  }
}