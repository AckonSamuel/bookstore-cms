import { configureStore } from '@reduxjs/toolkit';
import BookReducer from './books/books';
import CategoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    BookReducer,
    CategoriesReducer,
  },
});

export default store;
