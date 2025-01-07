import {configureStore} from "@reduxjs/toolkit";
import CustomerSlice from "../reducers/CustomerSlice.tsx";
import ItemSlice from "../reducers/ItemSlice.tsx";
import OrderSlice from "../reducers/OrderSlice.tsx";

export const store = configureStore({
    reducer: {
        customer: CustomerSlice,
        item: ItemSlice,
        order: OrderSlice,
    },
});