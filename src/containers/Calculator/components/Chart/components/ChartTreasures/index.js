import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
`;

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    min-height: 400px;
`;

const Li = styled.li`
    width: 320px;
    color: rgb(39, 44, 50);
    &:last-of-type {
        width: 100%;
        font-size: 22px;
        font-weight: 700;
        margin-top: 40px;
    }
`;
const Em = styled.em`
    display: block;
    font-size: 50px;
    color: rgba(39, 44, 50, 0.95);
    text-shadow: 0px 1px 9px rgba(255, 255, 255, 0.99);
    font-weight: 700;
    @media (max-width: 600px) {
        font-size: 34px;
    }
`;


const ChartTreasures = ({ expensesData }) => {
  const expensesCopy = expensesData.datasets[0].data.slice();
  let totalSum = 0;
  expensesCopy.forEach((expense) => {
    totalSum += parseInt(expense);
  });

  const countTreasures = (price) => {
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
    const seconds = parseInt((totalSum / 1666.66).toFixed(2));
    const timeFormatter = require('time-formatter');
    const time = timeFormatter.seconds(seconds, true);
    return `Bill Gates would have to work ${time} to cover your spendings!`;
  };

  const treasures = [
    {
      name: 'fresh bread',
      price: 3,
    },
    {
      name: 'books',
      price: 40,
    },
    {
      name: 'exotic trips',
      price: 6000,
    },
    {
      name: 'luxury cars',
      price: 120000,
    },
    {
      name: 'medium sized flats in Cracow',
      price: 280000,
    },
    {
      name: 'space trips',
      price: 740000,
    },
  ];


  return (
    <TreasuresContainer>
      <H2>With money you spend on unnecessary things you could buy:</H2>
      <Ul>{treasures.map(treasure => (
        <Li key={treasure.name}><Em>{countTreasures(treasure.price)}</Em> treasure.name</Li>
      ))}
        <Li>{billGates()}</Li>
      </Ul>
    </TreasuresContainer>
  );
};

ChartTreasures.defaultProps = {
  expensesData: [],
};

ChartTreasures.propTypes = {
  expensesData: PropTypes.array,
};

export default ChartTreasures;
