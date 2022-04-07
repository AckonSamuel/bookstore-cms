import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import BookReducer from './books/books';
import CategoriesReducer from './categories/categories';

const reducers = combineReducers({
  BookReducer,
  CategoriesReducer,
});

const store = createStore(reducers);

export default store;
