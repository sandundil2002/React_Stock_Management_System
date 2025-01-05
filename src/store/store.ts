import {configureStore} from "@reduxjs/toolkit";
import CustomerSlice from "../reducers/CustomerSlice.tsx";
import ItemSlice from "../reducers/ItemSlice.tsx";

export const store = configureStore({
    reducer: {
        customer: CustomerSlice,
        item: ItemSlice
    },
});