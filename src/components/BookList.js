import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.BookReducer.books);

  return (
    <>
      <ul className="allBooks">
        <li className="bookInfo">
          {
         books.length !== 0 ? books.map((book) => (
           <Book
             title={book.title}
             author={book.author}
             key={uuidv4()}
           />
         )) : <h4>NO BOOKS AVAILABLE</h4>
}
        </li>
      </ul>
    </>
  );
};

export default BookList;
