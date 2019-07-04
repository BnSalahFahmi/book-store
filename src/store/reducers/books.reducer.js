import { BookActionTypes } from '../actions/books.actions';
import _ from 'lodash';

const Initial_State = {
    books : [],
    selectedBook: undefined
}

const booksReducer = (state = Initial_State, action) => {
    switch(action.type) {
        case BookActionTypes.GET_BOOKS_RESPONSE: {
            return {
                ...state, 
                books: _.assign(action.books)
            };
        }
        case BookActionTypes.GET_BOOK_RESPONSE: {
            debugger;
            return {
                ...state,
                selectedBook: _.assign(action.book)
            };
        }
        default: { return state; }
    }
};

export default booksReducer;