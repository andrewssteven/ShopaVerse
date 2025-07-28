// Cart actions
export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item
});

export const removeFromCart = (id) => ({
  type: "REMOVE_FROM_CART",
  payload: id,
});

// Wishlist actions
export const addToWishlist = (item) => ({
  type: "ADD_TO_WISHLIST",
  payload: item,
});

export const removeFromWishlist = (id) => ({
  type: "REMOVE_FROM_WISHLIST",
  payload: id,
});

