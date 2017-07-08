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
      background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.3)), url(./src/img/bg-optimized.jpeg) no-repeat center center;
      background-size: cover;
      background-attachment: fixed;
      padding: 2%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      @media (max-width: 600px) {
         padding: 131px 2%;
         min-height: 100vh;
         height: auto;
      }
            
`;

const MainHeading = styled.h1`
    font-size: 64px;
    color: rgba(255, 255, 255, 0.85);
    font-weight: 700;
    letter-spacing: -1.4px;
    text-align: center;
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
     transform: translate3d(0, 0, 0);
     backface-visibility: hidden;
     perspective: 1000px;
     text-shadow: 2px 1px 5px rgba(0, 0, 0, 0.3);
         
     @media (max-width: 600px) {
        font-size: 44px;
     }
    

    @keyframes shake {
      10%, 90% {
        transform: translate3d(-1px, 0, 0);
      }
      
      20%, 80% {
        transform: translate3d(2px, 0, 0);
      }
    
      30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
      }
    
      40%, 60% {
        transform: translate3d(4px, 0, 0);
      }
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
    text-shadow: 2px 1px 5px rgba(0, 0, 0, 0.3);
    @media (max-width: 1400px) {
        max-width: 55%;
    }
    
    @media (max-width: 1000px) {
        max-width: 70%;
    }
    
    @media (max-width: 600px) {
        max-width: 85%;
    }
`;

const CTA = styled.div`
    margin-top: 35px;
    a {
        background: rgba(4, 105, 255, .6);
        color: rgba(255, 255, 255, .86);
        font-size: 26px;
        font-weight: 300;
        letter-spacing: -1.4px;
        text-decoration: none;
        border-radius: 15px 0 15px 0;
        padding: 10px 48px;
        transition: all 0.3s ease-in-out;
        @media (max-width: 600px) {
            font-size: 22px;
        }
        &:hover {
         color: rgba(0, 0, 0, 0.58);
         background: rgba(255, 255, 255, 0.66);
        }
    }
`;

const B = styled.b`
    font-weight: 900;
    @media (max-width: 600px) {
        display: block;
        font-size: 120%;
    }
`;


export class Header extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            uselessExpenses: ["Beer", "Gambling", "Snacks", "Parties", "Gas", "Cigarettes"],
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
                <P>Have you ever wondered how much money do you spend on
                    <B> {this.state.uselessExpenses[this.state.seconds % this.state.uselessExpenses.length]}</B> during
                    your whole life?</P>
                <CTA><IndexLink to="/calc">Check it out</IndexLink></CTA>
            </FullContainer>
        )
    }
}



