import React, { Component } from 'react';


/** display loaded image */
class LoadedImg extends Component {
    render() {
        if (this.props.photoAdded) {
            return (
                <div href="#" className="thumbnail">
                    <img src={this.props.imgURL} alt="avatar" />
                </div>
            );
        }
        return (
            <div class="alert alert-info" role="alert">No Avatar</div>
        );
    }
  }

export default LoadedImg;