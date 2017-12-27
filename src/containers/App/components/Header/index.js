import React from 'react';
import {IndexLink} from 'react-router';
import styled from 'styled-components' ;

const Nav = styled.nav`
    display: block;
    background: rgb(39, 44, 50);
    width: 100%;
    z-index: 2;
    position: fixed;
    top: 0;
    border-top: 4px solid #0469ff;
    opacity: 0.8;
    @media (max-width: 600px) {
        text-align: center;
    }
`;
const Li = styled.li` 
    padding: 15px 30px;
    display: inline-block;
    @media (max-width: 600px) {
        padding: 12px 15px;
    }
    a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.58);
        transition: all 0.3s ease-in-out;
        padding: 7px 15px;
        border 1px solid transparent;
        &:hover {
            color: rgba(255, 255, 255, 1);
        }
    }
    &:last-of-type a {
        color: #ff669d;
        &:hover {
            background: rgba(103, 103, 103, 0.44);
        }
    }
`;

export class Menu extends React.Component {

    render() {
        const active = {
            textShadow: 'rgba(30, 53, 116, 0.9) 0px 0px 15px',
            color: 'rgb(227, 225, 228)',
            border: '1px solid rgba(231, 231, 231, 0.42)',
            background: 'rgba(103, 103, 103, 0.44)',
        };

        return (
            <div>
                <Nav>
                    <ul>
                        <Li><IndexLink activeStyle={active} to="/">Start</IndexLink></Li>
                        <Li><IndexLink activeStyle={active} to="/calc">Calc it</IndexLink></Li>
                        <Li><IndexLink activeStyle={active} to="/contact">Hire me</IndexLink></Li>
                    </ul>
                </Nav>
                {this.props.children}
            </div>
        )
    }
}



