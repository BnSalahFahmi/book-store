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
import { faEye, faEdit, faTrash, faPlus, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
library.add(faEye);
library.add(faPlus);
library.add(faEdit);
library.add(faTrash);
library.add(faWindowClose);

export class BooksListContainer extends React.Component {

    constructor() {
        super();
        this.handleRowSelect = this.handleRowSelect.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleViewClick = this.handleViewClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.state = {
            selectedBook: undefined,
            enableView: false,
            enableEdit: false,
            enableDelete: false,
            show: false
        }
    }

    componentDidMount() {
        this.props.action.getBooksAction()
            .catch(error => {
                toast("Error occured !", { type: toast.TYPE.ERROR, autoClose: 3000 });
            });
    }

    handleRowSelect(row, isSelected) {
        if (isSelected) {
            this.setState({
                selectedBook: row,
                enableView: true,
                enableEdit: true,
                enableDelete: true,
                show: false
            })
        } else {
            this.setState({
                selectedBook: undefined,
                enableView: false,
                enableEdit: false,
                enableDelete: false,
                show: false
            })
        }
    }

    handleAddClick(itemId, event) {
        this.props.history.push('/book');
    }

    handleViewClick(itemId, event) {
        const selectedBookId = this.state.selectedBook.id;
        if (selectedBookId) {
            const existingBookIndex = this.props.books.findIndex(book => book.id === selectedBookId);
            const bookFound = Object.assign({}, this.props.books[existingBookIndex]);
            this.setState({
                selectedBook: bookFound,
                enableView: this.state.enableView,
                enableEdit: this.state.enableEdit,
                enableDelete: this.state.enableDelete,
                show: true
            })
        }
    }

    handleEditClick(itemId, event) {
        const selectedBookId = this.state.selectedBook.id;
        if (selectedBookId) {
            this.setState({ selectedBookId: undefined });
            this.props.history.push(`/book/${selectedBookId}`);
        }
    }

    handleDeleteClick(itemId, event) {
        const selectedBookId = this.state.selectedBook.id;
        if (selectedBookId) {
            this.setState({
                selectedBook: undefined,
                enableView: false,
                enableEdit: false,
                enableDelete: false,
                show: false
            })
            this.props.action.deleteBookAction(selectedBookId).then(() => {
                toast("Book Deleted", { type: toast.TYPE.SUCCESS, autoClose: 3000 });
            })
            .catch(error => {
                toast("Error occured !", { type: toast.TYPE.ERROR, autoClose: 3000 });
            });
        }
    }

    close = () => {
        this.setState({
            selectedBook: this.state.selectedBook,
            enableView: this.state.enableView,
            enableEdit: this.state.enableEdit,
            enableDelete: this.state.enableDelete,
            show: false
        })
    };

    render() {
        const { books } = this.props;

        if (!books) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div className="container">
                {this.state.selectedBook ? <Modal className="view-book-modal" show={this.state.show} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Book
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-10">
                                <form>
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input
                                            className="form-control"
                                            placeholder="Input name"
                                            value={this.state.selectedBook.id}
                                            disabled="true"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            className="form-control"
                                            placeholder="Input name"
                                            value={this.state.selectedBook.name}
                                            disabled="true"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea
                                            className="form-control"
                                            placeholder="Input address"
                                            rows="5"
                                            value={this.state.selectedBook.description}
                                            disabled="true"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Author</label>
                                        <input
                                            className="form-control"
                                            placeholder="Input address"
                                            value={this.state.selectedBook.author}
                                            disabled="true"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-2">
                                <img className="img-thumbnail card-img-view" src={this.state.selectedBook.photo} alt="src={this.state.selectedBook.name}" />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger"
                        onClick={this.handleDeleteClick}>
                            <FontAwesomeIcon icon='trash' />
                            Delete
                        </Button>
                        <Button variant="secondary" onClick={this.close}>
                            <FontAwesomeIcon icon='window-close' />
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> : null}
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
                        <BooksList books={books} handleRowSelect={this.handleRowSelect} handleSelectAll={this.handleSelectAll} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    books: state.booksReducer.books,
    selectedBook: state.booksReducer.selectedBook
});

const mapDispatchToProps = dispatch => ({
    action: bindActionCreators(BookActionTypes, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(BooksListContainer);