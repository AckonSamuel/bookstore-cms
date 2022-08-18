import React from 'react';
import PropTypes from 'prop-types';
import { RemoveBook } from '../redux/books/books';
import Button from './Button';

const Book = (
  { title, author },
) => (
  <div className="book-container">
    <>
      <h2 id="title">{title}</h2>
      <p id="author">{author}</p>

      <div className="btn-container">
        <Button buttonType="button" text="Remove" id="btn-remove" onClick={(index) => RemoveBook(index)} />
        <Button buttonType="button" text="Edit" id="btn-edit" />
      </div>
    </>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
