import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import booksReducer from './books.reducer';

export default combineReducers({
    booksReducer,
    form: formReducer    
});