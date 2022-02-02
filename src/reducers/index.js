import { FETCH_BOOK_FAILURE, FETCH_BOOK_SUCCESS, FETCH_BOOK_REQUEST, BOOK_ADDED_TO_CART } from '../actions';

const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    {
      id: 11,
      title: 'Book 1',
      count: 3,
      total: 150,
    },
    {
      id: 12,
      title: 'Book 2',
      count: 2,
      total: 130,
    },
  ],
  cartTotal: 280,
};

const updateCartItems = (cartItems, item, idx) => {
  if (idx !== -1) {
    return [
      ...cartItems.slice(0, idx),
      item,
      ...cartItems.slice(idx + 1),
    ];
  } else {
    return [
      ...cartItems,
      item,
    ];
  }
}

const updateCartItem = (book, item = {}) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0,
  } = item;
  return {
    id,
    title,
    count: count + 1,
    total: total + book.price,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK_REQUEST:
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case FETCH_BOOK_SUCCESS:
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_BOOK_FAILURE:
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    case BOOK_ADDED_TO_CART:
      const bookId = action.payload;
      const book = state.books.find(book => book.id === bookId);
      const cartItemIndex = state.cartItems.findIndex(item => item.id === bookId);
      const cartItem = state.cartItems[cartItemIndex];

      const newCartItem = updateCartItem(book, cartItem)
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newCartItem, cartItemIndex)
      };
    default:
      return state;
  }
}

export default reducer;
