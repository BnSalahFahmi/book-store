import React, { useState, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faUser, faList, faSignOutAlt, faPlus, faTachometerAlt, faBook } from '@fortawesome/free-solid-svg-icons';

import { ToastContainer } from 'react-toastify';

import Dashboard from './components/dashboard';
import BooksListContainer from "./components/book-list-container";
import BookForm from "./components/book-form";

library.add(faEye);
library.add(faEdit);
library.add(faTrash);
library.add(faUser);
library.add(faTachometerAlt);
library.add(faList);
library.add(faSignOutAlt);
library.add(faPlus);
library.add(faBook);

const App = () => {

  const loggedUser = "Fahmi BEN SALAH";

  return (
    <Router>
      <ToastContainer />
      <div className="cont">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img className="app-logo" src={logo} width="60" height="60" alt="ReactJS" />
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link"><FontAwesomeIcon icon='tachometer-alt' /> Dashboard</Link>
              </li>
              <li className="navbar-item">
                <Link to="/books" className="nav-link"><FontAwesomeIcon icon='book' /> Books</Link>
              </li>
              <li className="navbar-item">
                <Link to="/book" className="nav-link"><FontAwesomeIcon icon='plus' /> New Book</Link>
              </li>
            </ul>
            {<ul className="navbar-nav mr-auto pull-right">
              <li className="navbar-item">
                <Link to="/about" className="nav-link"><FontAwesomeIcon icon='user' /> {loggedUser}</Link>
              </li>
            </ul>}
          </div>
        </nav>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/books" component={BooksListContainer} />
            <Route path="/book" component={BookForm} />
            <Route path="/book/:id" component={BookForm} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
