import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    buy: false,
}

const buySlice = createSlice({
    name: 'buy',
    initialState,
    reducers: {
        setBuyOpen(state, action) {
            state.buy = action.payload;
        }
    }
})

export const selectBuy = (state) => state.buy;

export const {setBuyOpen} = buySlice.actions;

export default buySlice.reducer;