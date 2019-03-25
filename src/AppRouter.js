import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from "react-router-dom";
import Home from "./Home"
import TweetBox from './TweetBox';

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/">HOME</Link>
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

                        <Route exect path="/" component={Home} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
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

class Login extends Component {
    state = {
        user: 'admin',
        pswd: 'admin',
        redirectToReferrer: false
    };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const FORM = e.target.form,
            INPUT_USER_VALUE = FORM.elements.USER.value,
            INPUT_PASSWORD_VALUE = FORM.elements.PASSWORD.value;
            let isValid = false;

        if (INPUT_USER_VALUE === this.state.user && INPUT_USER_VALUE) {
            isValid = true;
            FORM.elements.USER.removeAttribute('style');
        } else {
            isValid = false;
            FORM.elements.USER.style.borderColor = '#d0021b';
        }

        if (INPUT_PASSWORD_VALUE === this.state.user && INPUT_PASSWORD_VALUE) {
            isValid = true;
            FORM.elements.PASSWORD.removeAttribute('style');
        } else {
            isValid = false;
            FORM.elements.PASSWORD.style.borderColor = '#d0021b';
        }

        if (isValid) {
            this.login();
        }
    }

    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;

        if (redirectToReferrer) return <Redirect to={from} />;

        return (
            <div className="container">
                <div className="row">
                    <form className="col-sm-4">
                        <div className="form-group input-group">
                            <span className="input-group-addon" id="basic-addon1">@</span>
                            <input className="form-control" placeholder="Username" aria-describedby="basic-addon1" name="USER" />
                        </div>
                        <div className="form-group input-group">
                            <span className="input-group-addon" id="basic-addon2">
                                <span className="glyphicon glyphicon-lock" aria-hidden="true"></span>
                            </span>
                            <input className="form-control" placeholder="Password" aria-describedby="basic-addon2" name="PASSWORD" />
                        </div>
                        <button onClick={this.handleSubmit} className="btn btn-primary" disabled="">Log In</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AppRouter;