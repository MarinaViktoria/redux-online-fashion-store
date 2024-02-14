import { configureStore } from '@reduxjs/toolkit';
import allClothes from './clothesSlice';
import cart from './cartSlice';

export const store = configureStore({
  reducer: {
    allClothes: allClothes, 
    cart: cart
  },
})