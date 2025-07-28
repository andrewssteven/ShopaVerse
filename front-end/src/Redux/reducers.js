import { combineReducers } from "redux";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}


const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      return [...state, action.payload];
    case 'REMOVE_FROM_WISHLIST':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;