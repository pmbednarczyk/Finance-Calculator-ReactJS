import React from 'react';
import styled from 'styled-components';
import { Spendings } from './components/Spendings';
import { Chart } from './components/Chart';

const Wrapper = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    padding: 0;
    background: linear-gradient(rgba(255, 255, 255, .1),rgba(255, 255, 255, 0.2)), url(./src/img/bg-calc-optimized.jpg) no-repeat center center;
    background-attachment: fixed;
`;

const Container = styled.div`
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      min-height: 100vh;
      display: flex;
      align-items: center;
      flex-direction: column;
`;
class Calculator extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <Spendings
            {...this.props}
          />

          <Chart
            {...this.props}
          />
        </Container>
      </Wrapper>
    );
  }
}

export default Calculator;
