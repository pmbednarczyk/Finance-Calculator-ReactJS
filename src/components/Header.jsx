import React from 'react';
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
    color: #fff;
    font-weight: 700;
    font-family: "acumin-pro", 'Roboto', sans-serif;
    letter-spacing: -1.4px;
    @media (max-width: 600px) {
        font-size: 44px;
    }
`;

const CTA = styled.a`
    color: rgba(0, 0, 0, 0.58);
    font-size: 30px;
    font-weight: 700;
    font-family: "acumin-pro", 'Roboto', sans-serif;
    letter-spacing: -1.4px;
    margin-top: 65px;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.66);
    border-radius: 10px;
    padding: 10px 48px;
    transition: all 0.3s ease-in-out;
    @media (max-width: 600px) {
        font-size: 24px;
    }
    &:hover {
    background: rgba(255, 255, 255, 0.86);
    }
`;



export class Header extends React.Component {

    render() {
        return (
            <FullContainer id="start">
                <MainHeading>Calculate Your Useless Expenses...</MainHeading>
                <CTA href="#calcStart">Start</CTA>
            </FullContainer>
        )
    }
}



