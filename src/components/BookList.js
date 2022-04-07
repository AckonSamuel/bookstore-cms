import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';

const BookList = () => {
  const books;

  return (
    <>
      <ul className="allBooks">
        <li className="bookInfo">
          {books.map((book) => (
            <Book
              category={book.category}
              title={book.title}
              author={book.author}
              chapter={book.chapter}
              completed={book.completed}
              key={uuidv4()}
            />
          ))}
        </li>
      </ul>
    </>
  );
};

export default BookList;
