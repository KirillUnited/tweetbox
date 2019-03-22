import React, { Component } from 'react';

class Login extends Component {
    state = { redirectToReferrer: false };

    // login = () => {
    //     fakeAuth.authenticate(() => {
    //         this.setState({ redirectToReferrer: true });
    //     });
    // };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="col-sm-4">
                        <div className="form-group input-group">
                            <span className="input-group-addon" id="basic-addon1">@</span>
                            <input className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="form-group input-group">
                            <span className="input-group-addon" id="basic-addon2">
                                <span className="glyphicon glyphicon-lock" aria-hidden="true"></span>
                            </span>
                            <input className="form-control" placeholder="Password" aria-describedby="basic-addon2" />
                        </div>
                        <button onClick={this.login} className="btn btn-primary" disabled="">Log In</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;