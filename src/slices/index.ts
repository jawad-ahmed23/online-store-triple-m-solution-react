import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { addItem, clearCart, removeItem,deleteItem } from "./cart";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;

export { addItem, clearCart, removeItem ,deleteItem};
