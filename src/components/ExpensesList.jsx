import React from 'react';
import {ExpensesListItem} from './ExpensesListItem.jsx';
import styled from 'styled-components';

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
`

const Error = styled.div`
    color: red;
    font-size: 14px;
    padding: 20px 0;
    `

const P = styled.p`
    color: rgba(71, 78, 85, 0.84);
    font-size: 13px;
    `

const Input = styled.input`
    height: 35px;
    text-align: center;
    &[type=checkbox]{
        width: 35px;
        margin: 12px 6px 0 15px;
        cursor: pointer;
    }
    &[type=number]{
        margin: 0 4px;
        width: 50px;
    }
`
const Span = styled.span`
    font-size: 13px;
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
                validation={this.props.validation}
                validationClass={expense.validationClass}
            />;
        });
        return expense;
    };
    render() {


        return (
        <AddExpensesContainer>
            <AddHeading>Add your expenses:</AddHeading>
            <P>At this moment the result will be formatted in polish currency.</P>
            {this.getExpenses()}
            <Button onClick={this.props.addNewExpense}>Add another expense</Button>
            <Button primary onClick={this.props.expensesCount}>Count your expenses</Button>

            {/*Next feature*/}
            {/*<Input type="checkbox"*/}
                   {/*value={this.props.inflation}*/}
                   {/*onChange={this.props.inflationChange}*/}
            {/*/>*/}
            {/*<Span>Include*/}
                {/*<Input type="number"*/}
                       {/*placeholder="2"*/}
                       {/*value={this.props.inflationValue}*/}
                       {/*onChange={this.props.inflationChange}*/}
                {/*/>% annual inflation rate.*/}
            {/*</Span>*/}

            <Error style={{ display : this.props.validation === false ? 'block' : 'none',}}>
                {this.props.validationText}
            </Error>
        </AddExpensesContainer>
        )
    }
}


