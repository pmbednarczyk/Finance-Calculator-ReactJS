import React from 'react';
import {ExpensesListItem} from './ExpensesListItem.jsx';
import styled from 'styled-components';

const AddHeading = styled.h2`
    font-size: 34px;
    font-weight: 700;
    letter-spacing: -1.4px;
    margin: 0px auto 50px auto;
`;

const AddExpensesContainer = styled.div`
    text-align: center;
    padding: 70px 2% 10px;
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
`


export class ExpensesList extends React.Component {
    getExpenses = () => {
        const expense = this.props.expenses.map((expense, i) => {
            return <ExpensesListItem
                key={i}
                name={expense.name}
                value={expense.value}
                frequency={expense.frequency}
                period={expense.period}
                onNameChange={event => this.props.onNameChange(event, expense, i)}
                onValueChange={event => this.props.onValueChange(event, expense, i)}
                onFrequencyChange={event => this.props.onFrequencyChange(event, expense, i)}
                onPeriodChange={event => this.props.onPeriodChange(event, expense, i)}
                onRemoveClick={event => this.props.onRemoveClick(expense, i)}
            />;
        });
        return expense;
    };
    render() {


        return (
        <AddExpensesContainer id="calcStart">
            <AddHeading>Add your expenses:</AddHeading>
            {this.getExpenses()}
            <Button onClick={this.props.addNewExpense}>Add another expense</Button>
            <Button primary onClick={this.props.expensesCount}>Count your expenses</Button>
        </AddExpensesContainer>
        )
    }
}


