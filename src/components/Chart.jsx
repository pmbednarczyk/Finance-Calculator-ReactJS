import React from 'react';

export class Chart extends React.Component {
    render() {
        return (
            <div>
                <h3>Chart will be generated here</h3>
                <p>Ilość wydatków:{this.props.expenses.length}</p>
                <p>Nazwa wydatku:{this.props.expenses.name}</p>
                <p>Wartość wydatków:{this.props.expenses.value}</p>
                <p>Częstotliwość wydatków:{this.props.expenses.frequency}</p>
                <p>Okres wydatków:{this.props.expenses.period}</p>
            </div>
        )
    }
}


