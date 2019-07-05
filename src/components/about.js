import React, { Component } from 'react';
import PropTypes from 'prop-types';
import photo from '../assets/img/photo.jpg';

export class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mini-container jumbotron">
                <div class="media">
                    <a class="pull-left" href="https://github.com/BnSalahFahmi">
                        <img class="media-object img-thumbnail" src={photo} alt="Fahmi BEN SALAH"/>
                    </a>
                    <div class="media-body">
                        <h4 class="media-heading">About Developer</h4>
                        This application was developed by Fahmi BEN SALAH
                        <p><a className="btn btn-primary btn-lg" href="https://github.com/BnSalahFahmi" role="button">See More Projects</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;