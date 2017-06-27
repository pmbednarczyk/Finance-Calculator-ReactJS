import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from "./components/Header.jsx";
import {Expenses} from './components/Expenses.jsx';
import {Chart} from './components/Chart.jsx';
import {About} from './components/About.jsx';
import styled from 'styled-components';

const Container = styled.div`
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
`;

document.addEventListener('DOMContentLoaded', () => {
    class App extends React.Component {
        constructor() {
            super(...arguments);
        }


        render() {
            return (
                <div>
                    <Header/>
                    <Container>
                        <Expenses/>
                        <Chart/>
                    </Container>
                    <About/>
                </div>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    );
});
