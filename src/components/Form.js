import React from 'react';
import Button from './Button';

const Form = () => (
  <div className="form-container">
    <h4>ADD NEW BOOK</h4>
    <form className="book-form">
      <input
        id="book-title"
        placeholder="Book Title"
        type="text"
        value=""
        required
      />

      <select id="category" name="category" placeholder="Category">
        <option value="category" selected="selected">
          Category
        </option>
        <option value="Literature">Literature</option>
        <option value="Science">Science</option>
        <option value="Engineering">engineering</option>
        <option value="Religion">Religion</option>
      </select>
      <Button text="ADD BOOK" buttonTypes="submit" id="submit" />
    </form>
  </div>
);

export default Form;
