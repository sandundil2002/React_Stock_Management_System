import {Customer} from "../models/customer.ts";

export const initialState:Customer[] = [];

enum CustomerActionTypes {
    ADD_CUSTOMER = 'ADD_CUSTOMER',
    DELETE_CUSTOMER = 'DELETE_CUSTOMER',
    SEARCH_CUSTOMER = 'SEARCH_CUSTOMER',
    UPDATE_CUSTOMER = 'UPDATE_CUSTOMER'
}

export const CustomerReducer = (state = initialState, action: {type: string, payload: {name: string, address: string, mobile: number, email: string}}) => {
    switch (action.type) {
        case CustomerActionTypes.ADD_CUSTOMER:
            return [...state, action.payload];
            default:
                return state;
    }
};