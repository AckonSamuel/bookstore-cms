import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import Button from './Button';

const Book = ({
  title, author, bookId, bookIndex,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="book-container">
      <>
        <h2 id="title">{title}</h2>
        <p id="author">{author}</p>

        <div className="btn-container">

          <button
            book-index={bookIndex}
            onClick={(e) => {
              const index = Number(e.target.getAttribute('book-index'));
              dispatch(removeBook({ index, bookId }));
            }}
            type="button"
          >
            Remove
          </button>
          <Button buttonType="button" text="Edit" id="btn-edit" />
        </div>
      </>
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
