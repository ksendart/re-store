import React from 'react';
import { Component } from 'react';
import { BookList } from '../shared';

export default class Home extends Component {
  books = [
    {
      id: 1,
      title: 'Foundation',
      author: 'A. Asimov',
    },
    {
      id: 2,
      title: 'Foundation and Empire',
      author: 'A. Asimov',
    },
  ];

  render() {
    return (<h2><BookList books={this.books}/></h2>);
  }
}
