const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    id: 0,
    title: 'The Nature of Nature',
    author: 'Enric Sala',
  },
  {
    id: 1,
    title: 'The Design of Everyday Things',
    author: 'Donald A. Norman',
  },
  {
    id: 2,
    title: 'The Art of War',
    author: 'Sun-Tsu',
  },
];

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default: return state;
  }
};

const AddBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const RemoveBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export { AddBook, RemoveBook };
export default BookReducer;
