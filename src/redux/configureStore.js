import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import BookReducer from './books/books';
import CategoriesReducer from './categories/categories';

const reducers = combineReducers({
  BookReducer,
  CategoriesReducer,
});

const store = configureStore(reducers)

export default store;
