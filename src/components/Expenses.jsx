import React from 'react';
import {Expense} from './Expense.jsx';

export class Expenses extends React.Component {

    render() {
        return (
        <div>
            <h2>Add your expenses:</h2>
            <Expense/>
            <button>Add another expense</button>
        </div>
        )
    }
}


