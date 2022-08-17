import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';

const initialState = [];

export default function BookReducer(state = initialState, action) {
  switch (action.type) {
    case 'bookstore/books/FETCH_BOOKS/fulfilled':
      return action.payload;
    case 'bookstore/books/ADD_BOOK/fulfilled':
      return [...state, action.payload];
    case 'bookstore/books/REMOVE_BOOK/fulfilled':
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
    default:
      return state;
  }
}

export const addBook = createAsyncThunk(
  ADD_BOOK,
  async (book) => {
    await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3tOezWN18kXpN04hlHCf/books', {
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: 'Not Available',
    });
    return book;
  },
);

export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (book) => {
    const lerr = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3tOezWN18kXpN04hlHCf/books/${book.bookId}`;
    await axios.delete(lerr);
    return book.index;
  },
);

export const fetchBooks = createAsyncThunk(
  FETCH_BOOKS,
  async () => {
    const res = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3tOezWN18kXpN04hlHCf/books');
    const books = Object.entries(res.data)
      .map(([id, book]) => ({ ...book[0], id, type: book[0].category }));
    return books;
  },
);
