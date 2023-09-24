import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: JSON.parse(localStorage.getItem("cart") || [])
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.data.find((item) => item.id === action.payload.id);
            if(itemInCart) {
                itemInCart.qty++;
            }else{
                state.data.push(action.payload);
            }
        },
        resetCart: (state) => {
            state.data = [];
            //  state.data.push(action.payload);
            // state.data.push(action.payload);
        }
    },
});

export const { addToCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;