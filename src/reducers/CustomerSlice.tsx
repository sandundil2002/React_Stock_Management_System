import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Customer } from '../models/customer';

const initialState: Customer[] = [];

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        addCustomer(state, action: PayloadAction<Customer>) {
            state.push(action.payload);
        },
        updateCustomer(state, action: PayloadAction<Customer>) {
            return state.map(customer =>
                customer.email === action.payload.email ? action.payload : customer
            );
        },
        deleteCustomer(state, action: PayloadAction<string>) {
            return state.filter(customer => customer.email !== action.payload);
        },
    },
});

export const { addCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;