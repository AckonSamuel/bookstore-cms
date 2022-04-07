import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.BookReducer);

  return (
    <>
      <ul className="allBooks">
        <li className="bookInfo">
          {
         books.length !== 0 ? books.map((book) => (
           <Book
             category={book.category}
             title={book.title}
             author={book.author}
             chapter={book.chapter}
             completed={book.completed}
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
