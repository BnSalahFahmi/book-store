import BookApi from '../../api/book-api';

export const BookActionTypes  = {
    GET_BOOKS_RESPONSE : 'GET_BOOKS_RESPONSE',
    ADD_NEW_BOOK_RESPONSE : 'ADD_NEW_BOOK_RESPONSE',
    GET_BOOK_RESPONSE : 'GET_BOOK_RESPONSE',
    UPDATE_BOOK_RESPONSE : 'UPDATE_BOOK_RESPONSE',
    DELETE_BOOK_RESPONSE : 'DELETE_BOOK_RESPONSE'
}

export const getBooksResponse = books => ({
    type: BookActionTypes.GET_BOOKS_RESPONSE,
    books
});

export function getBooksAction() {
    return (dispatch) => {
        return BookApi.getAllBooks()
            .then(books => {
                dispatch(getBooksResponse(books))
            }).catch(error => {
                throw error;
            });
    };
}

export const addNewBookResponse = () => ({
    type: BookActionTypes.ADD_NEW_BOOK_RESPONSE
});

export function saveBookAction(book) {
    return function (dispatch) {
        return BookApi.saveBook(book)
            .then(() => {
                if (book.id) {
                    dispatch(updateBookResponse());
                } else {
                    dispatch(addNewBookResponse());
                }
            }).catch(error => {
                throw (error);
            });
    };
}

export const getBookResponse = bookFound => ({
    type: BookActionTypes.GET_BOOK_RESPONSE,
    book: bookFound
});

export function getBookAction(bookId) {
    return (dispatch) => {
        return BookApi.getBook(bookId)
            .then(book => {
                dispatch(getBookResponse(book));
            }).catch(error => {
                throw error;
            });
    };
}

export const updateBookResponse = () => ({
    type: BookActionTypes.UPDATE_BOOK_RESPONSE
});


export const deleteBookResponse = () => ({
    type: BookActionTypes.DELETE_BOOK_RESPONSE
});


export function deleteBookAction(bookId) {
    return (dispatch) => {
        return BookApi.deleteBook(bookId)
            .then(() => {
                dispatch(deleteBookResponse());
            }).then(() => {
                dispatch(getBooksAction());
            }).catch(error => {
                throw error;
            });
    };
}