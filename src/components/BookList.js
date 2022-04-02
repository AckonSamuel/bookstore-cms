import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';

const BookList = () => {
  const books = [
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
