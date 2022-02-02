export const FETCH_BOOK_REQUEST = 'FETCH_BOOK_REQUEST';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_BOOK_FAILURE = 'FETCH_BOOK_FAILURE';
export const BOOK_ADDED_TO_CART = 'BOOK_ADDED_TO_CART';

const booksLoaded = (newBooks) => {
  return {
    type: FETCH_BOOK_SUCCESS,
    payload: newBooks,
  }
}
const booksRequested = () => {
  return {
    type: FETCH_BOOK_REQUEST,
  }
}
const booksError = (error) => {
  return {
    type: FETCH_BOOK_FAILURE,
    payload: error,
  }
}
const bookAddedToCart = (id) => {
  return {
    type: BOOK_ADDED_TO_CART,
    payload: id,
  }
}

export {
  booksLoaded,
  booksRequested,
  booksError,
  bookAddedToCart,
};
