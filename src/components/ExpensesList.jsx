import React from 'react';
import {ExpensesListItem} from './ExpensesListItem.jsx';

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
                onRemoveClick={event => this.props.onPeriodChange(event, expense, i)}
            />;
        });
        return expense;
    };
    render() {


        return (
        <div>
            <h2>Add your expenses:</h2>
            {this.getExpenses()}
            <button onClick={this.props.addNewExpense}>Add another expense</button>
            <button onClick={this.props.expensesCount}>Count your expenses</button>
        </div>
        )
    }
}


