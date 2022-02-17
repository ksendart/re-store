import { BOOK_ADDED_TO_CART, BOOK_DELETED_FROM_CART, BOOK_REMOVED_IN_CART } from '../actions';

const updateOrder = (state, bookId, quantity) => {
  const { shoppingCart: { cartItems }, bookList: { books } } = state;
  const book = books.find(({ id } )=> id === bookId);
  const cartItemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const cartItem = cartItems[cartItemIndex];

  const newCartItem = updateCartItem(book, cartItem, quantity)
  return {
    orderTotal: 0,
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

const updateSoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 280,
    };
  }
  switch (action.type) {
    case BOOK_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1)
    case BOOK_DELETED_FROM_CART:
      const deleteBookId = action.payload;
      const deleteCartItem = state.shoppingCart.cartItems.find(item => item.id === deleteBookId);
      return updateOrder(state, action.payload, -deleteCartItem.count);
    case BOOK_REMOVED_IN_CART:
      return updateOrder(state, action.payload, -1);
    default:
      return state.shoppingCart;
  }
};

export default updateSoppingCart;
