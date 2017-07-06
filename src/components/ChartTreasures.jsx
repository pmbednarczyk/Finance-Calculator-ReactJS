import React from 'react';
import styled from 'styled-components';

const TreasuresContainer = styled.div`
     text-align: center;
     margin: 80px 0;
     width: 100%;

`;
const H2 = styled.h2`
    font-size: 34px;
    font-weight: 700;
    letter-spacing: -1.4px;
    margin: 20px auto;
    color: rgba(39, 44, 50, 0.95);
    @media (max-width: 600px) {
        font-size: 24px;
    }
`

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    min-height: 400px;
`

const Li = styled.li`
    width: 320px;
    color: rgb(39, 44, 50);
    &:last-of-type {
        width: 100%;
        font-size: 22px;
        font-weight: 700;
        margin-top: 40px;
    }
`
const Em = styled.em`
    display: block;
    font-size: 50px;
    color: rgba(39, 44, 50, 0.95);
    text-shadow: 0px 1px 9px rgba(255, 255, 255, 0.99);
    font-weight: 700;
    @media (max-width: 600px) {
        font-size: 34px;
    }
`


export class ChartTreasures extends React.Component {

    render() {
        const expensesCopy = this.props.expensesData.datasets[0].data.slice();
        let totalSum = 0;
        expensesCopy.forEach((expense) => {
            totalSum += parseInt(expense);
        });

        const treasures = (price) => {
            const value = (totalSum / price);
            if (value > 10) {
                return value.toFixed();
            } else if (value > 1) {
                return value.toFixed(1);
            } else {
                return value.toFixed(2);
            }
        };


        const billGates = () => {
            let seconds = parseInt((totalSum / 1666.66).toFixed(2));
            const timeFormatter = require('time-formatter');
            const time = timeFormatter.seconds(seconds, true);
            return `Bill Gates would had to work ${time} to cover your spendings!`
        };


        return (
            <TreasuresContainer>
                <H2>For money you spend on unnecessary things you could buy:</H2>
                <Ul>
                    <Li><Em>{treasures(3)}x</Em> fresh breads</Li>
                    <Li><Em>{treasures(40)}x</Em> books</Li>
                    <Li><Em>{treasures(6000)}x</Em> egzotic trips</Li>
                    <Li><Em>{treasures(120000)}x</Em> luxury cars</Li>
                    <Li><Em>{treasures(240000)}x</Em> medium size flats in Cracow</Li>
                    <Li><Em>{treasures(740000)}x</Em> space trips</Li>
                    <Li>{billGates()}</Li>
                </Ul>
            </TreasuresContainer>
        )
    }
}


