import {
  FETCH_BOOK_FAILURE,
  FETCH_BOOK_SUCCESS,
  FETCH_BOOK_REQUEST,
  BOOK_ADDED_TO_CART,
  BOOK_DELETED_FROM_CART,
  BOOK_REMOVED_IN_CART
} from '../actions';

const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  cartTotal: 280,
};

const updateOrder = (state, bookId, quantity) => {
  const { cartItems, books } = state;
  const book = books.find(({ id } )=> id === bookId);
  const cartItemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const cartItem = cartItems[cartItemIndex];

  const newCartItem = updateCartItem(book, cartItem, quantity)
  return {
    ...state,
    cartItems: updateCartItems(cartItems, newCartItem, cartItemIndex)
  };
};
const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1),
    ];
  }
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
const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0,
  } = item;
  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
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
      return updateOrder(state, action.payload, 1)
    case BOOK_DELETED_FROM_CART:
      const deleteBookId = action.payload;
      const deleteCartItem = state.cartItems.find(item => item.id === deleteBookId);

      return updateOrder(state, action.payload, -deleteCartItem.count);
    case BOOK_REMOVED_IN_CART:
      return updateOrder(state, action.payload, -1);
    default:
      return state;
  }
}

export default reducer;
