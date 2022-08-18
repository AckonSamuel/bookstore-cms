import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    title: 'All day long',
    author: 'Dreamer',
    id: uuidv4(),
  },
  {
    title: 'Upward way',
    author: 'Worker Lsayer',
    id: uuidv4(),
  },
  {
    title: 'How to dare,',
    author: 'Mensrs Ryan',
    id: uuidv4(),
  },
  {
    title: 'Chew along',
    author: 'Okayito Makudsaiki',
    id: uuidv4(),
  },
];

export default function books(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});
