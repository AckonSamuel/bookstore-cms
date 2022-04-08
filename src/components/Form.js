import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AddBook } from '../redux/books/books';
import Button from './Button';

const Form = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
    type: '',
  });

  const trackChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      id: uuidv4().toString(),
      [name]: value,
    }));
  };

  const submitBook = () => {
    dispatch(AddBook(book));
    document.querySelector('#book-title').value = '';
    document.querySelector('#book-author').value = '';
  };

  return (
    <div className="form-container">
      <h4>ADD NEW BOOK</h4>
      <form
        className="book-form"
        onSubmit={(e) => {
          e.preventDefault();
          submitBook();
        }}
      >
        <input
          id="book-title"
          name="title"
          placeholder="Book Title"
          type="text"
          value={book.title}
          onChange={trackChange}
          required
        />

        <input
          id="book-author"
          name="author"
          placeholder="Book author"
          type="text"
          value={book.author}
          onChange={trackChange}
          required
        />

        <select
          required
          onChange={trackChange}
          value={book.type}
        >
          <option disabled> Category</option>
          <option value="Science" name="Science"> Science</option>
          <option value="Law" name="Law"> Law</option>
          <option value="Engineering" name="Engineering"> Engineering</option>
          <option value="Religion" name="Religion"> Religion</option>
        </select>

        <Button text="ADD BOOK" buttonType="submit" id="submit" />
      </form>
    </div>
  );
};

export default Form;
