export const BOOKS_LOADED = 'BOOKS_LOADED';
export const BOOKS_REQUESTED = 'BOOKS_REQUESTED';

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

export {
  booksLoaded,
  booksRequested,
};
