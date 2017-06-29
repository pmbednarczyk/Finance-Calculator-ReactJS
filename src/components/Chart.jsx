import React from 'react';
import {Pie} from 'react-chartjs-2';
import styled from 'styled-components';

const ChartContainer = styled.div`
    text-align: center;
     margin: 80px 0;
     h2 {
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

    render() {
        if (this.props.showChart === false || typeof this.props.chartData.datasets === 'undefined') {
            return null;
        }
        console.log(this.props.chartData.datasets, 'render');
        const expensesCopy = this.props.chartData.datasets[0].data.slice();
        let totalSum = 0;
        expensesCopy.forEach((expense) => {
            totalSum += parseInt(expense);
        });

        const currencyFormatter = require('currency-formatter');
        console.log(currencyFormatter.format(1000000, {locale: 'pl-PL'}));

        return (
            <ChartContainer>
                <h2>In {this.props.userYears}
                    <button onClick={this.props.onUserYearsDecrease}> - </button>
                    <button onClick={this.props.onUserYearsIncrease}> + </button>
                    years you will spend: <em>{currencyFormatter.format(totalSum, {locale: 'pl-PL'}) }</em>
                </h2>
                {/*<p>Number of expenses:{this.props.expenses.length}</p>*/}
                <Pie
                    data={this.props.chartData}
                    options={{
                        title: {
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                        },
                        tooltips: {
                            callbacks: {
                                label: function(tooltipItem, data) {
                                    let indice = tooltipItem.index;
                                    return  data.labels[indice] +': '+ currencyFormatter.format(data.datasets[0].data[indice], {locale: 'pl-PL'})  + '';
                                }
                            }
                        }
                    }}
                />
            </ChartContainer>
        )
    }
}


