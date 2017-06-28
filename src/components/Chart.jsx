import React from 'react';
import {Pie} from 'react-chartjs-2';
import styled from 'styled-components';

const ChartContainer = styled.div`
    text-align: center;
`;

export class Chart extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            chartData: this.props.chartData
        }
    }


    render() {
        if (this.props.showChart === false) {
            return null;
        }
        console.log(this.props.chartData.datasets);
        const expensesCopy = this.props.chartData.datasets[0].data.slice();
        let totalSum = 0;
        expensesCopy.forEach((expense) => {
            totalSum += parseInt(expense);
        });


        return (
            <ChartContainer>
                <h2>In {this.props.userYears}
                    <button onClick={this.props.decreaseYears}>-</button>
                    <button onClick={this.props.onUserYearsIncrease}>+</button>
                    years you will spend: {totalSum} zł
                </h2>
                <p>Ilość wydatków:{this.props.expenses.length}</p>
                <Pie data={this.props.chartData}/>
            </ChartContainer>
        )
    }
}


