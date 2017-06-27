import React from 'react';
import {ExpensesListItem} from './ExpensesListItem.jsx';

export class ExpensesList extends React.Component {
    getExpenses = () => {
        const expense = this.props.expenses.map((expense, i) => {
            return <ExpensesListItem
                key={expense.name + i}
                name={expense.name}
                value={expense.value}
                frequency={expense.frequency}
                period={expense.period}
                onNameChange={e => this.props.onNameChange(expense, i)}
                onValueChange={e => this.props.onValueChange(expense, i)}
                onFrequencyChange={e => this.props.onFrequencyChange(expense, i)}
                onPeriodChange={e => this.props.onPeriodChange(expense, i)}
            />;
        });
        return expense;
    };
    render() {


        return (
        <div>
            <h2>Add your expenses:</h2>
            {this.getExpenses()}
            {/*<ExpensesListItem*/}
                {/*key={this.props.expenses.name}*/}
                {/*name={this.props.expenses.name}*/}
                {/*value={this.props.expenses.value}*/}
                {/*frequency={this.props.expenses.frequency}*/}
                {/*period={this.props.expenses.period}*/}
                {/*onNameChange={this.props.onNameChange}*/}
                {/*onValueChange={this.props.onValueChange}*/}
                {/*onFrequencyChange={this.props.onFrequencyChange}*/}
                {/*onPeriodChange={this.props.onPeriodChange}*/}
            {/*/>*/}
            <button onClick={this.props.addNewExpense}>Add another expense</button>
            <button onClick={this.props.expensesCount}>Count your expenses</button>
        </div>
        )
    }
}


