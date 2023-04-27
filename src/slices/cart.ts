import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../interfaces";

export interface Item extends Product {
  quantity: number;
}

const cartSlice = createSlice({
  name: "products",
  initialState: {
    items: [] as Item[],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((i) => i.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((i) => i.id !== id);
        } else {
          existingItem.quantity--;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((i) => i.id === id);

      if (existingItem) {
        state.items = state.items.filter((i) => i.id !== id);
      }
    },
  },
});

export const { addItem, clearCart, removeItem,deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
