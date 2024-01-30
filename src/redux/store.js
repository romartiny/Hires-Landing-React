import {configureStore} from "@reduxjs/toolkit";
import buy from './slices/buySlice'
import mobile from './slices/mobileSlice'

export const store = configureStore({
    reducer: {
        buy,
        mobile
    },
});