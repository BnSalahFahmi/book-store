import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faBan } from '@fortawesome/free-solid-svg-icons';
library.add(faPaperPlane);
library.add(faBan);

export const BookForm = ({ heading, handleSubmit, handleSave, handleChange, handleCancel, handleReset, handeSelect }) => {

    const photoUrl = "https://images-na.ssl-images-amazon.com/images/I/41u9Jedk-mL._SL160_.jpg";

    return (
        <form onSubmit={handleSubmit}>
            <h1 class="heading">{heading}</h1>
            <hr />
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" onChange={handleChange} id="name" aria-describedby="nameHelp" placeholder="Enter Name" />
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <textarea type="text" class="form-control" onChange={handleChange} id="description" aria-describedby="descriptionHelp" placeholder="Enter Description" />
            </div>

            <div class="form-group">
                <label for="author">Author</label>
                <input type="text" class="form-control" onChange={handleChange} id="author" aria-describedby="authorHelp" placeholder="Enter Author Full Name" />
            </div>

            <div class="form-group">
                <label for="photo">Photo</label>
                <input type="text" class="form-control" onChange={handleChange} id="photoUrl" placeholder="photo URL" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>

            <div class="float-right">
                <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon='paper-plane' /> Submit</button>
                <button type="button" className="btn btn-default btn-space"><FontAwesomeIcon icon='ban' /> Cancel</button>
            </div>
        </form>
    );
};


const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.description) {
        errors.description = 'Required';
    }

    if (!values.author) {
        errors.author = 'Required';
    }

    if (!values.photo) {
        errors.phto = 'Required';
    }

    return errors;
};



BookForm.propTypes = {

};



export default reduxForm({
    form: 'BookForm',
    validate
})(BookForm);
