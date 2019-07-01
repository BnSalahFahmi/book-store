import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BooksList from './book-list';
import { toast } from 'react-toastify';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as BookActionTypes from '../store/actions/books.actions';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
library.add(faEye);
library.add(faPlus);
library.add(faEdit);
library.add(faTrash);

export class BooksListContainer extends React.Component {

    constructor() {
        super();
        this.handleRowSelect = this.handleRowSelect.bind(this);
        this.handleViewAppClick = this.handleViewAppClick.bind(this);
        this.state = {
            selectedBook: undefined
        }
    }

    componentDidMount() {
        this.props.action.getBooksAction()
        .catch(error => {
            //toast("Error occured !");
        });
    }

    handleRowSelect(row, isSelected) {
        if (isSelected) {
            this.state.selectedRows.push(row);
        }
    }

    handleAddAppClick(itemId, event) {

    }

    handleViewAppClick(itemId, event) {

    }

    handleEditAppClick(itemId, event) {

    }

    handleDeleteAppClick(itemId, event) {

    }

    render() {
        const { books } = this.props;

        if (!books) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div className="container">
                <div className="row mt-3 margin-left margin-bottom">
                    <div className="col">
                        <div className="btn-group" role="group">
                            <button
                                type="button"
                                className="btn btn-primary ml-2"
                                onClick={() => {
                                    this.props.history.push('/create')
                                }}
                            >
                                <FontAwesomeIcon icon='plus' /> New
                            </button>

                            <button
                                type="button"
                                className="btn btn-success ml-2"
                            >
                                <FontAwesomeIcon icon='eye' /> View
                            </button>

                            <button
                                type="button"
                                className="btn btn-warning ml-2"
                            >
                                <FontAwesomeIcon icon='edit' /> Edit
                            </button>

                            <button
                                type="button"
                                className="btn btn-danger ml-2"
                            >
                                <FontAwesomeIcon icon='trash' /> Delete
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <BooksList books={books} handleRowSelect={this.handleRowSelect} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    books: state.booksReducer.books
});



const mapDispatchToProps = dispatch => ({
    action: bindActionCreators(BookActionTypes, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(BooksListContainer);