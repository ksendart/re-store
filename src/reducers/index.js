import { BOOKS_LOADED } from '../actions';

const initialState = {
  books: [
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
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_LOADED:
      return {
        books: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
