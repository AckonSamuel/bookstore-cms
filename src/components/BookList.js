import React from 'react';
import { useSelector } from 'react-redux'
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
             title={book.title}
             author={book.author}
             key={}
           />
         )) : <h4>NO BOOKS AVAILABLE</h4>
}
        </li>
      </ul>
    </>
  );
};

export default BookList;
