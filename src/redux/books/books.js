const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    category: 'Science',
    title: 'The Nature of Nature',
    author: 'Enric Sala',
    chapter: '2',
    completed: '5',
  },
  {
    category: 'Enginnering',
    title: 'The Design of Everyday Things',
    author: 'Donald A. Norman',
    chapter: '5',
    completed: '8',
  },
  {
    category: 'Literature',
    title: 'The Art of War',
    author: 'Sun-Tsu',
    chapter: 'Laying Plans',
    completed: '0',
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
