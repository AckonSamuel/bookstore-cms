import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
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
        <h1 id="categor">Action</h1>
        <h2 id="title">{title}</h2>
        <p id="author">{author}</p>
        <div className="btn-container">
          <Button buttonType="button" text="Comment" id="btn-comment" />
          <button
            id="btn-remove"
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
      </div>
      <div className="current-progress">
        <ProgressBar />
        <p>
          64%
          <br />
          complete
        </p>

      </div>
      <div className="update-progress">
        <h4>CURRENT CHAPTER</h4>
        <p>Chapter 17</p>
        <Button buttonType="button" text="Current Chapter" id="btn-chapter" />
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
