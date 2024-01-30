import {configureStore} from "@reduxjs/toolkit";
import buy from './slices/buySlice'

export const store = configureStore({
    reducer: {
        buy
    },
});