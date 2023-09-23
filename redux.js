import { legacy_createStore } from "redux";

// reducer
const cartReducer = ( state = { cart: [] }, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            }
        default:
            return state;
    }
};

// store
const store = legacy_createStore(cartReducer);
console.log("on create store :", store.getState());

// subcribe
store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
});

// dispatch
const addAction = {type: "ADD_TO_CART", payload: {id:2, qty: 50}};
store.dispatch(addAction);