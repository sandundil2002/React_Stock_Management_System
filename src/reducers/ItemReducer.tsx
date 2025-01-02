import {Item} from "../models/item.ts";

const initialState:Item[] = [];

enum ItemActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    UPDATE_ITEM = 'UPDATE_ITEM',
    DELETE_ITEM = 'DELETE_ITEM',
}

export const ItemReducer = (state:Item[] = initialState, action: {type: string, payload: {name: string, description: string, price: number, quantity: number}}) => {
    switch (action.type) {
        case ItemActionTypes.ADD_ITEM:
            return [...state, action.payload];
        case ItemActionTypes.UPDATE_ITEM:
            return state.map((item:Item) => {
                if (item.name === action.payload.name) {
                    return action.payload;
                }
                return item;
            });
        case ItemActionTypes.DELETE_ITEM:
            return state.filter((item:Item) => item.name !== action.payload.name);
        default:
            return state;
    }
};