import React from 'react';
import {IndexLink} from 'react-router';
import styled from 'styled-components';

const FullContainer = styled.div`
      width: 100%;
      max-width: 1920px;
      margin: 0 auto;
      height: 100vh;
      overflow: hidden;
      position: relative;
      background: linear-gradient(rgba(39,39,75,1),rgba(21,23,43,0.3)), url('./src/bg.jpeg') no-repeat center center;
      background-size: cover;
      background-attachment: fixed;
      padding: 2%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
`;

const MainHeading = styled.h1`
    font-size: 64px;
    color: rgba(255, 255, 255, 0.85);
    font-weight: 700;
    letter-spacing: -1.4px;
    text-align: center;
    @media (max-width: 600px) {
        font-size: 44px;
    }
`;

const P = styled.p`
    color: rgba(255, 255, 255, .85);
    letter-spacing: -.4px;
    max-width: 40%;
    text-align: center;
    margin-top: 30px;
    font-size: 22px;
    font-weight: 300;
    @media (max-width: 1000px) {
        max-width: 70%;
    }
    
    @media (max-width: 600px) {
        max-width: 85%;
    }
`;

const CTA = styled.span`
    a {
        color: rgba(0, 0, 0, 0.58);
        font-size: 30px;
        font-weight: 300;
        letter-spacing: -1.4px;
        text-decoration: none;
        margin-top: 35px;
        background: rgba(255, 255, 255, 0.66);
        border-radius: 5px;
        padding: 10px 48px;
        transition: all 0.3s ease-in-out;
        @media (max-width: 600px) {
            font-size: 24px;
        }
        &:hover {
            background: rgba(4, 105, 255, .6);
            color: rgba(255, 255, 255, .76);
        }
    }
`;

const B = styled.b`
    font-weight: 900;
`;

export class Header extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            uselessExpenses: ["Beer", "Hazard", "Snacks", "Parties", "Gas", "Cigarettes"],
            seconds: 0,
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
                this.setState({
                    seconds: this.state.seconds + 1
                });

        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <FullContainer id="start">
                <MainHeading>Calculate your unnecessary spendings</MainHeading>
                <P>Have you ever wondered how much money do you spend on <B>{this.state.uselessExpenses[this.state.seconds%this.state.uselessExpenses.length]}</B> during your whole life?</P>
                <CTA><IndexLink to="/calc">Check it out</IndexLink></CTA>
            </FullContainer>
        )
    }
}



