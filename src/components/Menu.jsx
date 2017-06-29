import React from 'react';
import {IndexLink} from 'react-router';
import styled from 'styled-components'

const Nav = styled.nav`
    display: block;
    background: rgba(0, 0, 0, 0.55);
    position: fixed;
    width: 100%;
    z-index: 2;
    top: 0;
    border-top: 4px solid #0469ff;
`;
const Li = styled.li` 
    padding: 15px 30px;
    display: inline-block;
    a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.58);
        transition: all 0.3s ease-in-out;
        &:hover {
            color: rgba(255, 255, 255, 1);
        }
    }
`;

export class Menu extends React.Component {
    render() {
        return (
            <div>
                <Nav>
                    <ul>
                        <Li><IndexLink to="/">Start</IndexLink></Li>
                        <Li><IndexLink to="/calc">Calc it</IndexLink></Li>
                        <Li><IndexLink to="/contact">Contact</IndexLink></Li>
                    </ul>
                </Nav>
                {this.props.children}
            </div>
        )
    }
}



