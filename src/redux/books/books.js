const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  'Mind Power',
  'Holy Bible',
  'The Richest Man in Babylon',
  'The Secret',
  'Radical Honesty',
];

const AddBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const RemoveBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default: return state;
  }
};

export { AddBook, RemoveBook };
export default BookReducer;
