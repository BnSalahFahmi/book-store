import BookApi from '../../api/book-api';

export const BookActionTypes  = {
    GET_BOOKS_RESPONSE : 'GET_BOOKS_RESPONSE'
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
