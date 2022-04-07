import { saveBook, loadBooks, removeBook } from '../../components/api_var';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';

const LOAD_BOOKS = 'bookstore/books/LOAD_BOOKS';
const LOADED_BOOKS = 'bookstore/books/LOADED_BOOK';

const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';

const AddBook = (book) => (dispatch) => {
  dispatch({ type: ADD_BOOK });
  saveBook(book).then((status) => {
    if (status === 201 || status === 200) {
      dispatch({ type: ADDED_BOOK, payload: book });
    }
  });
};

const BookLoad = () => (dispatch) => {
  dispatch({ type: LOAD_BOOKS });
  loadBooks().then((books) => dispatch({
    type: LOADED_BOOKS,
    payload: books,
  }));
};

const RemoveBook = (index, id) => (dispatch) => {
  dispatch({ type: REMOVE_BOOK });
  removeBook(id).then((status) => {
    if (status === 201 || status === 200) dispatch({ type: REMOVED_BOOK, payload: index });
  });
};

const initialState = {
  books: [
  ],
};

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
    case REMOVE_BOOK:
    case ADD_BOOK:
      return { ...state, waiting: true };
    case ADDED_BOOK:
      return { ...state, books: [...state.books, action.payload], waiting: false };
    case LOADED_BOOKS:
      return { ...state, books: [...state.books, ...action.payload] };
    case REMOVED_BOOK:
      return {
        ...state,
        books: [...state.books.slice(0, action.payload), ...state.books.slice(action.payload + 1)],
      };
    default:
      return state;
  }
};

export { AddBook, RemoveBook, BookLoad };
export default BookReducer;
