import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import './sytles/navbar.css';

const Navbar = () => (
  <nav>
    <span id="logo">Bookstore</span>
    <>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </>

    <ImUser />
  </nav>
);

export default Navbar;
