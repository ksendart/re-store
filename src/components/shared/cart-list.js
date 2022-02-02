import React from 'react';
import { connect } from 'react-redux';
import './cart-list.css';
const CartList = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Title</td>
            <td>Count</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
        { items.map(({ id, title, count, total }, idx) => {
          return (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{title}</td>
              <td>{count}</td>
              <td>{total}</td>
              <td>
                <div className="book-action">
                  <button onClick={() => onDecrease(id)}><i className=" fas fa-minus-square"/></button>
                  <button onClick={() => onIncrease(id)}><i className=" fas fa-plus-square"/></button>
                  <button onClick={() => onDelete(id)}><i className="fas fa-trash-alt"/></button>
                </div>
              </td>
            </tr>
          )
        })}

        </tbody>
      </table>
      <div>TOTAL: {total}</div>
    </div>
  )
}

const matStateToProps = ({ cartItems, cartTotal }) => {
  return {
    items: cartItems,
    total: cartTotal,
  };
};

const mapDispatchToProps = () => {
  return {
    onIncrease: (id) => {},
    onDecrease: (id) => {},
    onDelete: (id) => {},
  }
};

export default connect(matStateToProps, mapDispatchToProps)(CartList);
