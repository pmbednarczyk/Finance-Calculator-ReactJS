import React from 'react';
import styled from 'styled-components'
import Container from '../index.jsx';

const Img = styled.img`
            max-width: 380px;
           width: 100%;
           opacity: 0.8;
           animation: 3s ease 0s normal forwards 1 fadein;
           @keyframes fadein{
                0% { opacity:0.5; }
                66% { opacity:0.8; }
                100% { opacity:1; }
           }
           &:hover {
            opacity: 1;
           }
        `;
const P = styled.p`
        max-width: 580px;
        width: 100%;
        padding: 20px;
        opacity: 0.8;
        margin: 20px auto;
        text-align: center;
        font-size: 18px;
        letter-spacing: -.6px;
        color: rgba(0, 0, 0, 0.79);
        line-height: 23px;
        span {
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 10px;
            display: block;
        }
        `;

const H1 = styled.h1`
            margin-top: 10px;
            font-size: 21px;
            font-weight: 700;
            letter-spacing: -.9px;
            color: #272c32;  
        `;

const AContainer = styled.div`
            margin: 20px 0;
            a {
                display: inline-block;
                margin-right: 15px;
                transition: all 0.3s ease-in-out;
                &:last-of-type {
                    margin-right: 0;
                }
                &:hover {
                    opacity: 0.8;
                }
                img {
                    max-width: 35px;
                    border-radius: 5px;
                }
            }
        `;


export class Contact extends React.Component {

    render() {
        const CContainer = styled(Container)`
            justify-content: center;
            min-height: 100vh;
            text-align: center;
            padding: 1%;
            padding-top: 80px;
            @media (max-width: 600px) {
                padding-top: 111px;
            }
            
        `;

        return (
            <CContainer>
                <Img src="./src/img/default-avatar.jpg"/>
                <P><span>Hello, World!</span>
                    My name is Pawel and I would like to dedicate my knowledge and positive energy to work in Front-end
                    development. <br/>My main goal is to master Javascript programming skills, especially in new libraries
                    ex. ReactJS.</P>
                <H1>Contact me at pmbednarczyk@gmail.com</H1>
                <AContainer>
                    <a href="https://github.com/pmbednarczyk/" target="_blank"><img src="./src/img/git.jpg"/></a>
                    {/*<a href="https://www.linkedin.com/in/pawel-bednarczyk/" target="_blank"><img*/}
                        {/*src="./src/img/in.png"/></a>*/}
                    {/*<a href="https://www.fb.com/pavaka" target="_blank"><img src="./src/img/fb.jpg"/></a>*/}
                </AContainer>
            </CContainer>

        )
    }
}