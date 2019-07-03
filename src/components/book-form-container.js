import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookForm from './book-form'; 
import { toast } from 'react-toastify';
import * as BookActionTypes from '../store/actions/books.actions';

export class BookFormContainer extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSave(values) {
        const book = {
            id: values.id,
            name: values.name,
            description: values.description,
            author: values.author,
            photo: values.photo,
        };

        this.props.action.saveBookAction(book)
            .then(() => {
                toast("Book Saved");
                this.props.history.push('/list');
            }).catch(error => {
                toast("Error occured");
            });
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.replace('/books');
    }

    handleChange(event){
        // TODO
    }

    handleSubmit(event){
        event.preventDefault();
        const book = {
            id: "kk",
            name: "aaa",
            description: "ezrslfk",
            author: "aeqfihze",
            photo: "zefihze",
        };
        this.props.action.saveBookAction(book)
            .then(() => {
                toast("Book Saved");
                this.props.history.push('/list');
            }).catch(error => {
                toast("Error occured");
            });
    }

    handleReset(event){
        //TODO
    }

    render() {
        const { initialValues } = this.props;
        const heading = initialValues && initialValues.id ? 'Edit Book' : 'Add New Book';
        return (
            <div className="container">
                <BookForm
                    heading={heading}
                    handleSubmit={this.handleSubmit}
                    handleSave={this.handleSave}
                    handleChange={this.handleChange}
                    handleCancel={this.handleCancel}
                    handleReset={this.handleReset}
                    initialValues={this.props.initialValues}
                />
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    const bookId = ownProps.match.params.id;

    // if (courseId && state.selectedCourseReducer.course && courseId === state.selectedCourseReducer.course.id) {
    //     return {
    //         initialValues: state.selectedCourseReducer.course,
    //         authors: authorsFormattedForDropdown(state.authorReducer.authors)
    //     };
    // } else {
    //     return {
    //         authors: authorsFormattedForDropdown(state.authorReducer.authors)
    //     };
    // }
    return {
        initialValues: []
    }
};

const mapDispatchToProps = dispatch => ({
    action: bindActionCreators(BookActionTypes, dispatch)
});


BookFormContainer.propTypes = {
    // handleSubmit: PropTypes.func.isRequired,
    // handleSave: PropTypes.func.isRequired,
    // handleChange: PropTypes.func.isRequired,
    // handleCancel: PropTypes.func.isRequired,
    // handleReset: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BookFormContainer);