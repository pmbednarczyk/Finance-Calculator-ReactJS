import React from 'react';
import styled from 'styled-components';

const ExpenseContainer = styled.div`
      max-width: 600px;
      width: 100%;
      background: #ccc;
      margin: 0 auto;
`;


export class ExpensesListItem extends React.Component {
    constructor() {
        super(...arguments);
        // this.state = {
        //     name: '',
        //     value: 0,
        //     frequency: 0,
        //     periodVal: 0,
        //     validationText: '',
        //     validation: null,
        // }
    }
    // handleNameValChange = event => {
    //     this.setState({
    //         name: event.target.value,
    //     });
    // };
    // handleValueValChange = event => {
    //     this.setState({
    //         value: event.target.value,
    //     });
    // };
    // handleFrequencyValChange = event => {
    //     this.setState({
    //         frequency: event.target.value,
    //     });
    // };
    // handlePeriodValChange = event => {
    //     this.setState({
    //         period: event.target.value,
    //     });
    // };

    render() {
        return (
            <ExpenseContainer>
                Nazwa wydatku: <br/>
                <input type="text"
                       /*onChange={this.handleNameValChange}*/
                       onChange={this.props.onNameChange}
                       value={this.props.name}
                /><br/><br/>
                Wartość wydatku: <br/>
                <input type="number"
                       /*onChange={this.handleValueValChange}*/
                       onChange={this.props.onValueChange}
                       value={this.props.value}
                /><br/><br/>
                Częstotliwość wydatku: <br/>
                <input type="number"
                       /*onChange={this.handleFrequencyValChange}*/
                       onChange={this.props.onFrequencyChange}
                       value={this.props.frequency}
                /><br/><br/>
                <span>na</span>
                <select
                    /*onChange={this.handlePeriodValChange}*/
                    onChange={this.props.onPeriodChange}
                    value={this.props.period}
                >
                    <option>Tydzień</option>
                    <option>Miesiąc</option>
                    <option>Rok</option>
                </select><br/><br/>
            </ExpenseContainer>
        )
    }
}


