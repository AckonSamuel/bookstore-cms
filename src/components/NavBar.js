import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navbar = () => (
  <nav>
    <h1 id="logo">Bookstore</h1>
    <ImUser />
    <>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </>
  </nav>
);

export default Navbar;
