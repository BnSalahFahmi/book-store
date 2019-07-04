import BookApi from '../../api/book-api';

export const BookActionTypes  = {
    GET_BOOKS_RESPONSE : 'GET_BOOKS_RESPONSE',
    ADD_NEW_BOOK_RESPONSE : 'ADD_NEW_BOOK_RESPONSE',
    GET_BOOK_RESPONSE : 'GET_BOOK_RESPONSE'
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
                dispatch(addNewBookResponse());
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
