import { configureStore } from "@reduxjs/toolkit";
import fabReducer from "./fabSlice"; // Adjust the path accordingly
import cartReducer from "./cartSlice"; // Corrected import

const store = configureStore({
  reducer: {
    fab: fabReducer,
    cart: cartReducer,
  },
});

export default store;
