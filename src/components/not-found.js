import React, { Component } from 'react';
import PropTypes from 'prop-types';
import photo from '../assets/img/photo.jpg';
import pageNotFound from '../assets/img/page-not-found.png';

export class NotFound extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="page-header">
                    <img className="not-found" src={pageNotFound} />
                </div>
            </div>
        );
    }
}

export default NotFound;