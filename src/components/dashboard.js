import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reactjs from '../assets/img/reactjs.jpg';
import reactrouter4 from '../assets/img/reactrouter.jpg';
import bootstrap4 from '../assets/img/bootstrap.jpg';
import redux from '../assets/img/redux.png'

export class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container dashboard-container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="card dashboard-card">
                            <img src={reactjs} className="card-img" alt="ReactJS" />
                            <div className="card-block">
                                <h3 className="card-title">ReactJS</h3>
                                <p className="card-text">A declarative, efficient, and flexible JavaScript library for building user interfaces </p>
                                <a href="https://github.com/facebook/react" className="card-link">Github</a>
                                <a href="https://fr.reactjs.org/" className="card-link">Officiel Site</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-3">
                        <div className="card dashboard-card">
                            <img src={redux} className="card-img" alt="Create React App" />
                            <div className="card-block">
                                <h3 className="card-title">Redux</h3>
                                <p className="card-text">A Predictable state container for JavaScript apps</p>
                                <a href="https://github.com/reduxjs/redux" className="card-link">Github</a>
                                <a href="https://redux.js.org/" className="card-link">Officiel Site</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="card dashboard-card">
                            <img src={reactrouter4} className="card-img" alt="React Router 4" />
                            <div className="card-block">
                                <h3 className="card-title">React Router</h3>
                                <p className="card-text">A collection of navigational components that compose declaratively with a reactJS application</p>
                                <a href="https://github.com/ReactTraining/react-router" className="card-link">Github</a>
                                <a href="https://reacttraining.com/react-router/" className="card-link">Officiel Site</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="card dashboard-card">
                            <img src={bootstrap4} className="card-img" alt="Bootstrap 4" />
                            <div className="card-block">
                                <h3 className="card-title">Bootstrap</h3>
                                <p className="card-text">An open source toolkit for developing responsive, mobile-first projects on the web with HTML, CSS, and JS</p>
                                <a href="https://github.com/twbs/bootstrap" className="card-link">Github</a>
                                <a href="https://getbootstrap.com/" className="card-link">Officiel Site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;