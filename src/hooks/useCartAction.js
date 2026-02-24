import { useReducer } from "react";
import { v4 as uuid } from "uuid"; // librería para generar IDs únicos

const initialState = { items: [] };

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                items: [
                    ...state.items,
                    { ...action.item, cantidad: 1, cartItemId: uuid() }
                ]
            };

        case "REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter(i => i.cartItemId !== action.cartItemId)
            };

        case "INCREMENT":
            return {
                ...state,
                items: state.items.map(i =>
                    i.cartItemId === action.cartItemId
                        ? { ...i, cantidad: i.cantidad + 1 }
                        : i
                )
            };

        case "DECREMENT":
            return {
                ...state,
                items: state.items.map(i =>
                    i.cartItemId === action.cartItemId && i.cantidad > 1
                        ? { ...i, cantidad: i.cantidad - 1 }
                        : i
                )
            };

        default:
            return state;
    }
};

export const useCartAction = () => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addItem = (item) => dispatch({ type: "ADD_ITEM", item });
    const removeItem = (cartItemId) => dispatch({ type: "REMOVE_ITEM", cartItemId });
    const increment = (cartItemId) => dispatch({ type: "INCREMENT", cartItemId });
    const decrement = (cartItemId) => dispatch({ type: "DECREMENT", cartItemId });

    return { state, addItem, removeItem, increment, decrement };
};