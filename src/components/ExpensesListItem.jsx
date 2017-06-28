import React from 'react';
import styled from 'styled-components';

const ExpenseContainer = styled.div`
      max-width: 600px;
      width: 100%;
      background: #ccc;
      margin: 10px auto;
      box-sizing: border-box;
      padding: 1%;
`;


export class ExpensesListItem extends React.Component {
    componentDidMount(){
        console.log("ExpensesListItem");
    }
    render() {
        return (
            <ExpenseContainer>
                Expense name: <br/>
                <input type="text"
                       onChange={this.props.onNameChange}
                       value={this.props.name}
                       placeholder="Ex: Beer, Snacks, Cigarettes..."
                /><br/><br/>
                Expense value: <br/>
                <input type="number"
                       onChange={this.props.onValueChange}
                       value={this.props.value}
                       placeholder="Ex: 9,99"
                /><br/><br/>
                Expense frequency: <br/>
                <input type="number"
                       onChange={this.props.onFrequencyChange}
                       value={this.props.frequency}
                       placeholder="Ex: 4"
                />
                <span>per</span>
                <select
                    onChange={this.props.onPeriodChange}
                    value={this.props.period}
                >
                    <option>Week</option>
                    <option>Month</option>
                    <option>Year</option>
                </select><br/><br/>
                <button onClick={this.props.expensesCount}>Remove</button>
            </ExpenseContainer>
        )
    }
}


