import React from 'react';
import './bool-list-item.css';

const BookListItem = ({book, onAddedToCart}) => {
  const {title, author, cover} = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img alt="cover" src={cover}/>
      </div>
      <div className="book-details">
        <div className="book-title">{title}</div>
        <div className="book-author">{author}</div>
      </div>
     <div className="book-action">
       <button onClick={onAddedToCart}><i className=" fas fa-plus-square"/></button>
     </div>
    </div>
  );
}

export default BookListItem;
