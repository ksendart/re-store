import React, { Component } from 'react';
import './book-list.css';
import { BookListItem } from './index';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner/spinner';

class BookList extends Component {

  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested } = this.props;
    booksRequested();
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data));
  }

  render() {
    const { books, loading } = this.props;

    if (loading) {
      return (<Spinner/>);
    }
    return (<ul className="book-list">
      {
        books.map((book) => {
          return (<li key={book.id}><BookListItem book={book}/></li>)
        })
      }
    </ul>);
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
  };
}

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
