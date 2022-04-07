const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';

const LOAD_BOOKS = 'bookstore/books/LOAD_BOOKS';
const LOADED_BOOKS = 'bookstore/books/LOADED_BOOK';

const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';


const initialState = [
  {
    title: 'The Nature of Nature',
    author: 'Enric Sala',
  },
  {
    title: 'The Design of Everyday Things',
    author: 'Donald A. Norman',
  },
  {
    title: 'The Art of War',
    author: 'Sun-Tsu',
  },
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
