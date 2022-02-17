import { FETCH_BOOK_FAILURE, FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS } from '../actions';

const updateBookList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: null,
    };
  }
  switch (action.type) {
    case FETCH_BOOK_REQUEST:
      return {
        books: [],
        loading: true,
        error: null,
      };
    case FETCH_BOOK_SUCCESS:
      return {
        books: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_BOOK_FAILURE:
      return {
        books: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state.bookList;
  }
};

export default updateBookList;
