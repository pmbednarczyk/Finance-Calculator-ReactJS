import React from 'react';

export class Expense extends React.Component {
    render() {
        return (
            <form>
                Nazwa wydatku: <br/>
                <input type="text"/><br/><br/>
                Wartość wydatku: <br/>
                <input type="text" /><br/><br/>
                Częstotliwość wydatku: <br/>
                <input type="text" /><br/><br/>
                <span>na</span>
                <select >
                    <option>Tydzień</option>
                    <option>Miesiąc</option>
                    <option>Rok</option>
                </select><br/><br/>
            </form>
        )
    }
}


