import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import './sytles/booklist.css';

const BookList = () => {
  const books = useSelector((state) => state.BookReducer, shallowEqual);

  return (
    <>
      <ul className="allBooks">
        <li className="bookInfo">
          {
         books.length !== 0 ? books.map((book, i) => (
           <Book
             title={book.title}
             author={book.author}
             key={uuidv4().toString()}
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
