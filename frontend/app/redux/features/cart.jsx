import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalPrice: 0,
  cartItemsQTY: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      console.log("CALL Recieved at addItemToCart");
      state.cartItems.push(action.payload);
      state.cartItemsQTY += 1;

      const updatedCart = [...state.cartItems, action.payload];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
    initializeCart: (state) => {
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      console.log(cartData, "cartData -aa");
      state.cartItems = cartData;
      state.cartItemsQTY = cartData.length;
    },
  },
});

export const MyCart = (state) => state;

export const { addItemToCart, initializeCart } = cartSlice.actions;
export default cartSlice.reducer;
