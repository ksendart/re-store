import React from 'react';
import { Component } from 'react';
import CartList from '../shared/cart-list';

export default class Cart extends Component {
  render() {
    return (<div>
      <h2>Cart list</h2>
      <CartList></CartList>
    </div>);
  }
}
