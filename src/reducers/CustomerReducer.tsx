import {Customer} from "../models/customer.ts";

const initialState:Customer[] = [];

enum CustomerActionTypes {
    ADD_CUSTOMER = 'ADD_CUSTOMER',
    UPDATE_CUSTOMER = 'UPDATE_CUSTOMER',
    DELETE_CUSTOMER = 'DELETE_CUSTOMER',
}

export const CustomerReducer = (state:Customer[] = initialState, action: {type: string, payload: {name: string, address: string, mobile: number, email: string}}) => {
    switch (action.type) {
        case CustomerActionTypes.ADD_CUSTOMER:
            return [...state, action.payload];
        case CustomerActionTypes.UPDATE_CUSTOMER:
            return state.map((customer:Customer) => {
                if (customer.email === action.payload.email) {
                    return action.payload;
                }
                return customer;
            });
        case CustomerActionTypes.DELETE_CUSTOMER:
            return state.filter((customer:Customer) => customer.email !== action.payload.email);
        default:
            return state;
    }
};