import React, { Component } from 'react';
import List from './List';
import data from './data.json';

class Home extends Component {
    state = {
        date: new Date()
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Home Page</h1>
                    <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                </div>
                <div className="row marketing">
                    <List data={data} />
                </div>
                <footer className="footer">
                    <p>© {this.state.date.getFullYear()} Company, Inc.</p>
                </footer>
            </div>
        )
    }
}

export default Home;