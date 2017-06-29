import React from 'react';
import styled from 'styled-components'
import Container from '../index.jsx';

export class Contact extends React.Component {

    render() {
        const ContactContainer =  styled(Container)`
    justify-content: center;
`;
        return (
            <ContactContainer>
                <h1>Contact us at contact@example.com</h1>
            </ContactContainer>

        )
    }
}