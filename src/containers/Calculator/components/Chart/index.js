import React from 'react';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ChartTreasures from './components/ChartTreasures';

const ChartContainer = styled.div`
     text-align: center;
     margin: 80px 0;
     width: 100%;
     h2 {
        color: rgba(39, 44, 50, 0.95);
        font-size: 34px;
        font-weight: 700;
        letter-spacing: -1.4px;
        margin: 0px auto 50px auto;
        @media (max-width: 600px) {
            font-size: 24px;
        }
     }
     em {
        display: block;
        margin-top: 30px;
        font-size: 50px;
        font-weight: 700;
        @media (max-width: 600px) {
            font-size: 34px;
        }
     }
     button {
        font-size: 14px;
        width: 31px;
        margin: 0 3px;
        line-height: 20px;
        vertical-align: middle;
        &:nth-of-type(1) {
            margin-left: 10px;
        }
        &:nth-of-type(2) {
            margin-right: 10px;
        }
     }
`;

export class Chart extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      chartData: {},
    };
  }

  componentWillReceiveProps() {
    this.getChartData();
  }

  componentDidUpdate(prevProps) {
    const { calculator: { userYears } } = this.props;
    const { calculator: { userYears: prevUserYears } } = prevProps;
    if (userYears !== prevUserYears) {
      this.forceUpdate(() => {
        this.getChartData();
      });
    }
  }

  getChartData() {
    const { calculator: { userYears, expenses } } = this.props;
    const expensesCopy = expenses.slice();
    const expensesNames = expensesCopy.map(expense => (
      expense.name
    ));
    const expensesValues = expensesCopy.map((expense) => {
      if (expense.period === 'per week') {
        // 365.2422 / 7 = 52.2
        return (52.2 * expense.frequency * expense.price * userYears).toFixed(2);
      } else if (expense.period === 'per month') {
        // 365.2422 / 30.43685 = 12
        return (12 * expense.frequency * expense.price * userYears).toFixed(2);
      }
      return (expense.frequency * expense.price * userYears).toFixed(2);
    });

    const expensesColors = expensesCopy.map(() => (
      `#${Math.random().toString(16).substr(-6)}`
    ));

    this.setState({
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

  render() {
    const {
      calculator: { userYears, showChart },
      decrementYears,
      incrementYears,
    } = this.props;
    const { chartData } = this.state;
    if (!showChart || typeof chartData.datasets === 'undefined') {
      return null;
    }
    const expensesCopy = chartData.datasets[0].data.slice();
    let totalSum = 0;
    expensesCopy.forEach((expense) => {
      totalSum += parseInt(expense);
    });
    const currencyFormatter = require('currency-formatter');

    return (
      <div>
        <ChartContainer>
          <h2>In {userYears}
            <button onClick={decrementYears}> -</button>
            <button onClick={incrementYears}> +</button>
            years you will spend: <em>{currencyFormatter.format(totalSum, { locale: 'pl-PL' }) }</em>
          </h2>
          <Pie
            data={chartData}
            options={{
              title: {
                fontSize: 25,
              },
              legend: {
                display: true,
              },
              tooltips: {
                callbacks: {
                  label: (tooltipItem, data) => {
                    const indice = tooltipItem.index;
                    return `${data.labels[indice]}: ${currencyFormatter.format(data.datasets[0].data[indice], { locale: 'pl-PL' })}`;
                  },
                },
              },
            }}
          />
        </ChartContainer>
        <ChartTreasures expensesData={chartData} />
      </div>
    );
  }
}

Chart.defaultProps = {
  calculator: {},
  decrementYears: () => {},
  incrementYears: () => {},
};

Chart.propTypes = {
  calculator: PropTypes.shape({}),
  decrementYears: PropTypes.func,
  incrementYears: PropTypes.func,
};
