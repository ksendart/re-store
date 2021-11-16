import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = ({ numItems }) => {
  return (
    <header className="header row">
      <Link to="/">
        <div className="logo text-dark">Re-Store</div>
      </Link>
      <div className="cart text-dark">
        <Link to="/cart">
          <i className="fas fa-book-open"/>
          {numItems} items
        </Link>
      </div>
    </header>
  );
};

export default Header;
