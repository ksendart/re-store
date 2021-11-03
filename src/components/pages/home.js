import React from 'react';
import { Component } from 'react';
import { BookList } from '../shared';

export default class Home extends Component {
  render() {
    return (<h2><BookList/></h2>);
  }
}
