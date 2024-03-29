import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../redux/slice/cartSlice";

export const store = configureStore({
    reducer:{
      cart : cartReducer,
    },
    devTools : true
})