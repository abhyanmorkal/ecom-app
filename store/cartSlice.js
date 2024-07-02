import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProductsToCart(state, action) {
      state.push(action.payload);
    },
    removeProductsFromCart(state, action) {
      return state.filter((product) => action.payload !== product.id);
    },
  },
});

export const { addProductsToCart, removeProductsFromCart } = cart.actions;

export default cart.reducer;
