"use client";
import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/productsSlice";
import cartReducer from "@/app/redux/features/cart";
export const store = configureStore({
  reducer: {
    items: productsSlice,
    cart: cartReducer,
  },
});
