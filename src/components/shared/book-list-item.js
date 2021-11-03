import React from 'react';
import './bool-list-item.css';

const BookListItem = ({book}) => {
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
       <button><i className=" fas fa-plus-square"/></button>
       <button><i className="fas fa-trash-alt"/></button>
     </div>
    </div>
  );
}

export default BookListItem;
