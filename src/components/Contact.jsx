import React from 'react';
import styled from 'styled-components'
import Container from '../index.jsx';

const Img = styled.img`
            max-width: 380px;
           width: 100%;
        `;
const H1 = styled.h1`
            margin-top: 30px;
            font-size: 21px;
            font-weight: 700;
            letter-spacing: -.9px;
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
        const ContactContainer = styled(Container)`
            justify-content: center;
            min-height: 100vh;
            text-align: center;
            padding: 1%;
            @media (max-width: 600px) {
                padding-top: 111px;
            }
            
        `;

        return (
            <ContactContainer>
                <Img src="./src/img/default-avatar.jpg"/>
                <H1>Contact us at contact@example.com</H1>
                <AContainer>
                    <a href="https://github.com/pmbednarczyk/" target="_blank"><img src="./src/img/git.jpg"/></a>
                    <a href="https://www.linkedin.com/in/pawel-bednarczyk/" target="_blank"><img src="./src/img/in.png"/></a>
                    <a href="https://www.fb.com/pavaka" target="_blank"><img src="./src/img/fb.jpg"/></a>
                </AContainer>
            </ContactContainer>

        )
    }
}