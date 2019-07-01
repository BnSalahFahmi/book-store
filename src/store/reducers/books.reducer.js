import { BookActionTypes } from '../actions/books.actions';
import _ from 'lodash';

const Initial_State = {
    books : []
}

const booksReducer = (state = Initial_State, action) => {
    switch(action.type) {
        case BookActionTypes.GET_BOOKS_RESPONSE: {
            return {
                ...state, 
                books: _.assign(action.books)
            };
        }
        default: { return state; }
    }
};

export default booksReducer;