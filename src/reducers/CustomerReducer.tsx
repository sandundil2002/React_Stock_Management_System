import {Customer} from "../models/customer.ts";

export const initialState:Customer[] = [];

enum CustomerActionTypes {
    ADD_CUSTOMER = 'ADD_CUSTOMER',
    UPDATE_CUSTOMER = 'UPDATE_CUSTOMER',
    SEARCH_CUSTOMER = 'SEARCH_CUSTOMER',
    DELETE_CUSTOMER = 'DELETE_CUSTOMER',
}

export const CustomerReducer = (state = initialState, action: {type: string, payload: {name: string, address: string, mobile: number, email: string}}) => {
    switch (action.type) {
        case CustomerActionTypes.ADD_CUSTOMER:
            return [...state, action.payload];,
        case CustomerActionTypes.UPDATE_CUSTOMER:
            return state.map((customer:Customer) => {
                if (customer.email === action.payload.email) {
                    return action.payload;
                }
                return customer;
            });
        default:
            return state;
    }
};