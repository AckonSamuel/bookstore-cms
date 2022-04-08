import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import './sytles/navbar.css';
import imuser from './sytles/react-icons';

const Navbar = () => (
  <nav>
    <span id="logo">Bookstore</span>
    <>
      <span className="BOOKS"><Link to="/">Books</Link></span>
      <span className="CATEGORIES"><Link to="/categories">Categories</Link></span>
    </>

    <ImUser style={imuser} />
  </nav>
);

export default Navbar;
