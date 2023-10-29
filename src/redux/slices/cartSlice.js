import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        // data: JSON.parse(localStorage.getItem("cart")) || JSON.parse(localStorage.setItem("cart", [])),
        data: JSON.parse(localStorage.getItem("cart")) || [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.data.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.qty++;
            } else {
                state.data.push(action.payload);
            }
        },
        resetCart: (state) => {
            state.data = [];
            localStorage.setItem("cart", null);
        }
    },
});

export const { addToCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;