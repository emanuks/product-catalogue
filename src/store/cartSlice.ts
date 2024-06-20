import { createSlice } from "@reduxjs/toolkit";

import { CartProduct } from "./cartSlice.types";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [] as CartProduct[],
    total: 0
  },
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
      state.total += action.payload.discountedPrice;
    },
    increment: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      state.products[index].quantity += 1;
      state.total += action.payload.discountedPrice;
    },
    decrement: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      state.products[index].quantity -= 1;
      state.total -= action.payload.discountedPrice;
    },
    changeQty: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      state.products[index].quantity = action.payload.quantity >= 0 ? +action.payload.quantity : 1;
      state.total = state.total - state.products[index].quantity * state.products[index].discountedPrice + action.payload.quantity * action.payload.discountedPrice;
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload.id);
      state.total -= action.payload.discountedPrice * action.payload.quantity;
    },
    clearCart: (state) => {
      state.products = [];
      state.total = 0;
    }
  }
});

export const { 
  addToCart, 
  increment, 
  decrement, 
  changeQty, 
  removeFromCart, 
  clearCart 
} = cartSlice.actions;

export default cartSlice.reducer;