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

    enableView = false;
    enableEdit = false;
    enableDelete = false;

    constructor() {
        super();
        this.handleRowSelect = this.handleRowSelect.bind(this);
        this.handleSelectAll = this.handleSelectAll.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleViewClick = this.handleViewClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.state = {
            selectedBook: undefined,
            enableView: false,
            enableEdit: false,
            enableDelete: false
        }
    }

    componentDidMount() {
        this.props.action.getBooksAction()
        .catch(error => {
            toast("Error occured !");
        });
    }

    handleRowSelect(row, isSelected) {
        if (isSelected) {
            this.setState({
                selectedBook: row,
                enableView: true,
                enableEdit: true,
                enableDelete: true
            })
        } else {
            this.setState({
                selectedBook: undefined,
                enableView: false,
                enableEdit: false,
                enableDelete: false
            })
        }
    }

    handleSelectAll(isSelected, rows) {
        debugger;
        if (isSelected) {
            this.setState({
                selectedBook: rows,
                enableView: false,
                enableEdit: false,
                enableDelete: true
            })
        } else {
            this.setState({
                selectedBook: undefined,
                enableView: false,
                enableEdit: false,
                enableDelete: false
            })
        }
    }

    handleAddClick(itemId, event) {
        this.props.history.push('/create')
    }

    handleViewClick(itemId, event) {
        //TODO
    }

    handleEditClick(itemId, event) {
        //TODO
    }

    handleDeleteClick(itemId, event) {
        //TODO
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
                                onClick={this.handleAddClick}
                            >
                                <FontAwesomeIcon icon='plus' /> New
                            </button>

                            <button
                                type="button"
                                className="btn btn-success ml-2"
                                disabled={!this.state.enableView}
                                onClick={this.handleViewClick}
                            >
                                <FontAwesomeIcon icon='eye' /> View
                            </button>

                            <button
                                type="button"
                                className="btn btn-warning ml-2"
                                disabled={!this.state.enableEdit}
                                onClick={this.handleEditClick}
                            >
                                <FontAwesomeIcon icon='edit' /> Edit
                            </button>

                            <button
                                type="button"
                                className="btn btn-danger ml-2"
                                disabled={!this.state.enableDelete}
                                onClick={this.handleDeleteClick}
                            >
                                <FontAwesomeIcon icon='trash' /> Delete
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <BooksList books={books} handleRowSelect={this.handleRowSelect} handleSelectAll={this.handleSelectAll}/>
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