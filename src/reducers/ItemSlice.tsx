import {Item} from "../models/item.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState:Item[] = [];

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItem(state, action) {
            state.push(action.payload);
        },
        updateItem(state, action) {
            return state.map((item:Item) => {
                if (item.category === action.payload.category) {
                    return action.payload;
                }
                return item;
            });
        },
        deleteItem(state, action) {
            return state.filter((item:Item) => item.category !== action.payload.category);
        }
    }
})

export const {addItem, updateItem, deleteItem} = itemSlice.actions;
export default itemSlice.reducer;