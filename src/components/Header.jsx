import React from 'react';
import styled from 'styled-components';

const FullContainer = styled.div`
      width: 100%;
      max-width: 1920px;
      margin: 0 auto;
      background: #ccc;
      height: 100vh;
`;

export class Header extends React.Component {

    render() {
        return (
            <FullContainer>
                <h1>Welcome to my app :)</h1>
            </FullContainer>
        )
    }
}



