import React from 'react';
import './header.css';

const Header = ({ numItems }) => {
  return (
    <header className="header row">
      <div className="logo text-dark">Re-Store</div>
      <div className="cart text-dark">
        <i className="fas fa-book-open"/>
        {numItems} items
      </div>
    </header>
  );
};

export default Header;
