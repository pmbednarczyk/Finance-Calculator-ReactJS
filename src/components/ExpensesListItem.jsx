import React from 'react';
import styled from 'styled-components';

const ExpenseContainer = styled.div`
      max-width: 600px;
      width: 100%;
      background: #ccc;
      margin: 0 auto;
`;



export class ExpensesListItem extends React.Component {
    render() {
        return (
            <ExpenseContainer>
                Nazwa wydatku: <br/>
                <input type="text"/><br/><br/>
                Wartość wydatku: <br/>
                <input type="text" /><br/><br/>
                Częstotliwość wydatku: <br/>
                <input type="text" /><br/><br/>
                <span>na</span>
                <select>
                    <option>Tydzień</option>
                    <option>Miesiąc</option>
                    <option>Rok</option>
                </select><br/><br/>
            </ExpenseContainer>
        )
    }
}


