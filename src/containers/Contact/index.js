import React from 'react';
import styled from 'styled-components'

const Img = styled.img`
            max-width: 380px;
           width: 100%;
           opacity: 0.8;
           margin: 15px 0;
           animation: 2s ease 0s normal forwards 1 fadein;
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
        width: 95%;
        padding: 0px;
        opacity: 0.8;
        margin: 10px auto;
        text-align: center;
        font-size: 18px;
        letter-spacing: -.4px;
        color: rgba(0, 0, 0, 0.79);
        line-height: 25px;
        span {
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 10px;
            display: block;
        }
        animation: 2s ease 0s normal forwards 1 fadein;
        @keyframes fadein{
            0% { opacity:0.5; }
            66% { opacity:0.8; }
            100% { opacity:1; }
        }
        `;

const H1 = styled.h1`
            margin: 20px 0 15px;
            font-size: 21px;
            font-weight: 700;
            letter-spacing: -.9px;
            color: rgba(0, 0, 0, 0.79);
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

        return (
            <div>
                <Img src="./src/img/pmb-avatar.jpg"/>
                <P><span>Hello, World!</span>
                    I am Pawel and I would like to dedicate my knowledge and positive energy to work in Front-end
                    development - especially in Javascript and its new libraries like ReactJS. <br/>My main goal is to
                    work with professionals and develop highest quality digital products.<br/>I have still lot to learn
                    and It will be pleasure to work as Junior Front-end Developer at innovative projects.</P>
                <P>Experience in Front-End: 1 year+ <br/>Preferred location: Cracow, Poland</P>
                <H1>Contact me at pmbednarczyk@gmail.com</H1>
                <AContainer>
                    <a href="https://github.com/pmbednarczyk/" target="_blank"><img src="./src/img/git.jpg"/></a>
                    <a href="https://www.linkedin.com/in/pawel-bednarczyk/" target="_blank"><img
                        src="./src/img/in.png"/></a>
                    <a href="https://www.fb.com/pavaka" target="_blank"><img src="./src/img/fb.jpg"/></a>
                </AContainer>
            </div>

        )
    }
}