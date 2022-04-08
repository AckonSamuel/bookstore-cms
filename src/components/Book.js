import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { RemoveBook } from '../redux/books/books';
import Button from './Button';
import './sytles/book.css';
import ProgressBar from './Circularprogressbar';

const Book = ({
  title, author, bookId, bookIndex,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="book-container">
      <div className="bk-oc">
        <h2 id="title">{title}</h2>
        <p id="author">{author}</p>
        <div className="btn-container">
          <Button buttonType="button" text="Comment" id="btn-comment" />
          <button
            id="btn-remove"
            book-index={bookIndex}
            onClick={(e) => {
              const index = Number(e.target.getAttribute('book-index'));
              dispatch(RemoveBook(index, bookId));
            }}
            type="button"
          >
            Remove
          </button>
          <Button buttonType="button" text="Edit" id="btn-edit" />
        </div>
      </div>
      <div className="current-progress">
        <ProgressBar />
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
  bookIndex: PropTypes.number.isRequired,
};

export default Book;
