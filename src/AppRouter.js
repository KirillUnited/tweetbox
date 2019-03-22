import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from "react-router-dom";
import Login from './Login';
import TweetBox from './App';

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={props =>
            fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
        }
        />
    );
}

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/login">USER</Link>
                                </li>
                                <li>
                                    <Link to="/tweetbox">TWEETBOX</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Switch>
                        <Route path="/login" component={Login} />
                        <PrivateRoute path="/tweetbox" component={TweetBox} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default AppRouter;