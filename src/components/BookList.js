import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.BookReducer.books, shallowEqual);

  return (
    <>
      <ul className="allBooks">
        <li className="bookInfo">
          {
         books.length !== 0 ? books.map((book, i) => (
           <Book
             title={book.title}
             author={book.author}
             key={book.title}
             bookIndex={i}
             bookId={book.id}
           />
         )) : <h4>NO BOOKS AVAILABLE</h4>
}
        </li>
      </ul>
    </>
  );
};

export default BookList;
