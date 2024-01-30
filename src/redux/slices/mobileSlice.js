import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    buy: false,
}

const mobileSlice = createSlice({
    name: 'mobile',
    initialState,
    reducers: {
        setOpenNavigation(state, action) {
            state.buy = action.payload;
        }
    }
})

export const selectBuy = (state) => state.buy;

export const {setOpenNavigation} = mobileSlice.actions;

export default mobileSlice.reducer;