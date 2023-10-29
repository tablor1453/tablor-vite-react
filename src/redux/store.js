import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
    reducer: { cart: cartReducer },
});

console.log("Oncreate store: ", store.getState());

store.subscribe(() => {
    console.log("STORE CHANGE: ", store.getState());
});

// store.subscribe("store change : ", store.getState());

export default store;