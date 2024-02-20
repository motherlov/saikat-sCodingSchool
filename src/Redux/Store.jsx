import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import courseSlice from "./courseSlice";

const Store =configureStore({
    reducer:{
        product:productSlice.reducer,
        courses:courseSlice.reducer
    },
})
export default Store