export const FETCH_BOOK_REQUEST = 'FETCH_BOOK_REQUEST';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_BOOK_FAILURE = 'FETCH_BOOK_FAILURE';
export const BOOK_ADDED_TO_CART = 'BOOK_ADDED_TO_CART';
export const BOOK_REMOVED_IN_CART = 'BOOK_DECREASE_IN_CART';
export const BOOK_DELETED_FROM_CART = 'BOOK_DELETED_FROM_CART';

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
const bookRemovedInCart = (id) => {
  return {
    type: BOOK_REMOVED_IN_CART,
    payload: id,
  }
}
const bookDeletedFromCart = (id) => {
  return {
    type: BOOK_DELETED_FROM_CART,
    payload: id,
  }
}

export {
  booksLoaded,
  booksRequested,
  booksError,
  bookAddedToCart,
  bookRemovedInCart,
  bookDeletedFromCart
};
