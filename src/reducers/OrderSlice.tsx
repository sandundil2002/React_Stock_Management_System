import {Order} from "../models/order.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState:Order[] = [];

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder(state, action) {
            state.push(action.payload);
        }
    }
})

export const {addOrder} = orderSlice.actions;
export default orderSlice.reducer;