import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import Button from './Button';

const Book = ({
  category, title, author, chapter, completed,
}) => (
  <div className="book-container">
    <>
      <p id="category">{category}</p>
      <h2 id="title">{title}</h2>
      <p id="author">{author}</p>

      <div className="btn-container">
        <Button buttonType="button" text="Comments" id="btn-comment" />
        <Button buttonType="button" text="Remove" id="btn-remove" />
        <Button buttonType="button" text="Edit" id="btn-edit" />
      </div>
    </>
    <div className="progress">
      <CircularProgressbar value={completed} text={`${completed}%`} />
      <>
        <h3>{completed}</h3>
        <p>completed</p>
      </>
    </div>
    <div className="chapter-progress">
      <p>CURRENT CHAPTERS</p>
      <p>
        Chapter 3:
        <span>{chapter}</span>
      </p>
      <Button text="UPDATE PROGRESS" type="button" id="progress-update" />
    </div>
  </div>
);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
};

export default Book;
