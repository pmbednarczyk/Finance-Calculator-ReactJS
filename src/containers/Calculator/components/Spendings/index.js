import React from 'react';
import styled from 'styled-components';
import { SingleSpending } from './components/SingleSpending';

const AddHeading = styled.h2`
    font-size: 34px;
    font-weight: 700;
    letter-spacing: -1.4px;
    margin: 0px auto 50px auto;
    color: rgba(39, 44, 50, 0.95);
`;

const AddExpensesContainer = styled.div`
    text-align: center;
    padding: 110px 2% 10px;
`;

const Button = styled.button`
    border-radius: 3px;
  padding: 7px 20px;
	margin: 0 1em;
	background: transparent;
	color: #5d5d78;
	border: 2px solid #5d5d78;
	transition: all 0.3s ease-in-out;
	&:hover {
	    border: 2px solid #6464c2;
	    color: #6464c2;
	}
	${props => props.primary && `
		background: #5d5d78;
		color: white;
		&:hover {
	        background: #6464c2;
	        color: white;
	    }
	`}
	  @media (max-width: 600px) {
	    width: 80%;
	    display: block;
        margin: 10px auto;
        padding: 10px;
      }
`;

const Error = styled.div`
    color: red;
    font-size: 14px;
    padding: 20px 0;
    `;

const P = styled.p`
    color: rgba(71, 78, 85, 0.84);
    font-size: 13px;
    `;

export class Spendings extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      validationText: 'Check if every expense has its price!',
    };
  }

  getExpenses = () => {
    const expense = this.props.calculator.expenses.map((expense, i) => {
      return <SingleSpending
        {...this.props}
        key={i}
        index={i}
        name={expense.name}
        price={expense.price}
        frequency={expense.frequency}
        period={expense.period}
        valid={expense.valid}
      />;
    });

    return expense;
  };
  render() {
    return (
      <AddExpensesContainer>
        <AddHeading>Add your expenses:</AddHeading>
        <P>At this moment the result will be formatted in Polish currency.</P>
        {this.getExpenses()}
        <Button onClick={this.props.addExpense}>Add another expense</Button>
        <Button primary onClick={this.props.countExpenses}>Count your expenses</Button>
        <Error style={{ display: this.props.calculator.validation === false ? 'block' : 'none' }}>
          {this.state.validationText}
        </Error>
      </AddExpensesContainer>
    );
  }
}

