import React, { Component } from 'react';
import './book-list.css';
import { BookListItem } from './index';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error/error-indicator';

class BookList extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return (<Spinner/>);
    }
    if (error) {
      return (<ErrorIndicator/>);
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
    error: state.error,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
    }
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
