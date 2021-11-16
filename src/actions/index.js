export const FETCH_BOOK_REQUEST = 'FETCH_BOOK_REQUEST';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_BOOK_FAILURE = 'FETCH_BOOK_FAILURE';

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

export {
  booksLoaded,
  booksRequested,
  booksError,
};
