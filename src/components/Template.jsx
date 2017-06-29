import React from 'react';

import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

class Main extends React.Component {
    render() {
        return <h1>Main</h1>;
    }
}

class Contact extends React.Component {
    render() {
        return <h1>Contact us at contact@example.com</h1>;
    }
}

class NotFound extends React.Component {
    render() {
        return <h1>404, <Link to="/">wroc do strony glownej</Link></h1>
    }
}

class Template extends React.Component {
    render() {
        console.log(this.props.route.users, 'Template'); {/* 6 */}
        const style = {
            backgroundColor: "red",
            border: "4px solid green"
        };

        {/* 7 */}
        const menu = this.props.route.users.map(u => {
            return <li key={u.id}>
                <IndexLink activeStyle={style} to={"/users/"+u.id}>{u.name}</IndexLink>
            </li>
        });

        return (<div>
            <h1>App</h1>
            <nav>
                <ul>
                    <li><IndexLink activeStyle={ style } to="/">strona głowna</IndexLink></li>
                    <li><IndexLink activeStyle={ style } to="/contact">kontakt</IndexLink></li>
                    {menu} {/* 8 */}
                </ul>
            </nav>
            {this.props.children}
        </div>)
    }
}

{/* 2 */}
class UserInfo extends React.Component {
    getData() {
        const id = this.props.params.userId;
        console.log(this.props.route.abc);
        const user = this.props.route.users.filter(u => {
            return u.id == id;
        });

        return user[0];
    }
    render() {
        const user = this.getData();

        return <p>{user.name}</p>
    }
}

class App extends React.Component {
    render() {
        console.log(this.props.users); {/* 4 */}
        return <Router history={hashHistory}>
            <Route path="/" component={Template} users={this.props.users}>  {/* 5 */}
                <IndexRoute component={Main}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/users/:userId" component={UserInfo} abc=":)" users={this.props.users}/> {/* 1 */}
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>;
    }
}

