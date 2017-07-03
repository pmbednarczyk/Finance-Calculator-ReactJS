import React from 'react';
import styled from 'styled-components';

const ExpenseContainer = styled.div`
      max-width: 700px;
      width: 100%;
      margin: 10px auto;
      box-sizing: border-box;
      padding: 1%;
      text-align: left;
      border-radius: 5px;
      background: linear-gradient(228deg,rgba(27, 101, 155, 0.1) 0%,rgba(15, 45, 81, 0.35) 26%);
      position: relative;
      @media (max-width: 600px) {
        margin: 25px auto;
      }
      >div {
        display: inline-block;
        box-sizing: border-box;
        padding: 1%;
        span {
            display: block;
            font-size: 13px;
        }
        input {
            display: inline-block;
            width: 100%;
            margin-top: 8px;
            border: transparent;
            &:focus {
            box-shadow: inset 0 0px 11px rgba(132, 181, 255, 0.6), 0 0px 1px rgba(0, 126, 255, 0.2), 0 0px 10px rgba(110, 141, 255, 0.5);
            outline: 0;
           }
        }
        input, select {
            min-height: 35px;
            box-sizing: border-box;
            padding: 5px;
            &.invalid {
              box-shadow: inset 0 0px 11px rgb(206, 20, 20), 0 0px 1px rgba(255, 0, 0, 0.6), 0 0px 10px rgba(255, 0, 0, 0.9);
            }
        }
        select {
            margin-top: 9px;
            border: transparent;
            background: transparent;
        }
        option {
            background: #edeef0;
            color: #5d5d78;      
        }
        &:nth-of-type(1) {
            width: 40%;
        }
        &:nth-of-type(2) {
            width: 15%;
        }
        &:nth-of-type(3) {
            width: 35%;
            input {
                width: 20%;
            }
        }
        @media (max-width: 600px) {
             &:nth-of-type(1) {
                width: 100%;
             }
             &:nth-of-type(2), &:nth-of-type(3) {
                width: 50%;
             }
        }
      }
      a {
          position: absolute;
          right: 32px;
          top: 32px;
          width: 32px;
          height: 32px;
          opacity: 0.3;
          transition: all 0.2s ease-in-out;
          cursor: pointer;
          &:before, &:after {
              position: absolute;
              left: 15px;
              content: ' ';
              height: 33px;
              width: 2px;
              background-color: #333;
        }
        &:after {
            transform: rotate(45deg);
        }
        &:before {
            transform: rotate(-45deg);
        }
        &:hover {
             opacity: 1;
        }
        @media (max-width: 600px) {
            right: 0;
            top: -14px;
            height: 32px;
            padding: 10px;
            background: #edeef0;
            width: 32px;
            opacity: 1;
            border-radius: 50%;
            &:before, &:after {
              position: absolute;
              left: 15px;
              content: ' ';
              height: 15px;
            }
        }
        
      }
`;


export class ExpensesListItem extends React.Component {

    render() {

        return (
            <ExpenseContainer>
                <div>
                    <span>Expense name:</span>
                    <input type="text"
                           onChange={this.props.onNameChange}
                           value={this.props.name}
                           placeholder="Ex: Beer, Snacks, Cigarettes..."
                    />
                </div>
                <div>
                    <span>Price per unit: </span>

                    <input type="number"
                           onChange={this.props.onValueChange}
                           value={this.props.value}
                           placeholder="Ex: 9,99"
                           className={this.props.validationClass}
                    />
                </div>
                <div>
                    <span>How often do you buy it?</span>
                    <input type="number"
                           onChange={this.props.onFrequencyChange}
                           value={this.props.frequency}
                           placeholder="Ex: 4"
                    />
                    <select
                        onChange={this.props.onPeriodChange}
                        value={this.props.period}
                    >
                        <option>per week</option>
                        <option>per month</option>
                        <option>per year</option>
                    </select>
                </div>
                <a onClick={this.props.onRemoveClick}></a>
            </ExpenseContainer>
        )
    }
}


