import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from "./components/Header.jsx";
import {Expense} from './components/Expense.jsx';
import {Chart} from './components/Chart.jsx';
import {About} from './components/About.jsx';

document.addEventListener('DOMContentLoaded', () => {
    class App extends React.Component {
        constructor() {
            super(...arguments);
        }


        render() {
            return (
                <section>
                    <h1>Finance App</h1>
                    <Header/>
                    <Expense/>
                    <Chart/>
                    <About/>
                </section>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    );
});
