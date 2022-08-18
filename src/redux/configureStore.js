import { createStore, combineReducers } from 'redux';
import BookReducer from './books/books';
import CategoriesReducer from './categories/categories';

const reducers = combineReducers({
  BookReducer,
  CategoriesReducer,
});

const store = createStore(reducers);

export default store;
