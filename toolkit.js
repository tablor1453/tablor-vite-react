import toolkit from "@reduxjs/toolkit";


const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_ACTION");
const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
    });
})

const login = createAction('CREATE_SESSION');
const loginReducer = createReducer({status: false}, (builder) => {
    builder.addCase(login, (state) => {
        state.status = true;
    });
});

const store = configureStore({
    reducer: {
        login: loginReducer,
        cart: cartReducer,
    }
});

store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
});

// const action = ;
store.dispatch(addToCart({id: 10, qty: 5 })); 
store.dispatch(addToCart({id: 30, qty: 88 }));
store.dispatch(login());
