export const BOOKS_LOADED = 'BOOKS_LOADED';
export const BOOKS_REQUESTED = 'BOOKS_REQUESTED';
export const BOOKS_ERROR = 'BOOKS_ERROR';

const booksLoaded = (newBooks) => {
  return {
    type: BOOKS_LOADED,
    payload: newBooks,
  }
}
const booksRequested = () => {
  return {
    type: BOOKS_REQUESTED,
  }
}
const booksError = (error) => {
  return {
    type: BOOKS_ERROR,
    payload: error,
  }
}

export {
  booksLoaded,
  booksRequested,
  booksError,
};
