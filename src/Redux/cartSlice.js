import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!state.products) {
        state.products = [];
      }
      console.log(state.products, "states");

      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      console.log(action);
      state.products =  state.products.filter(
        (item, index) => index !== action.payload
      );
    },
  },
});

export const { addToCart, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
