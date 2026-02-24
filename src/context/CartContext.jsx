import { createContext, useContext } from "react";
import { useCartAction } from "../hooks/useCartAction";

const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const { state, addItem, removeItem, increment, decrement } = useCartAction();

  const getTotal = () => {
    return state.items.reduce(
      (acc, item) => acc + Number(item.cantidad) * Number(item.precio), 0
    );
  };

  const getTotalItems = () => {
    return state.items.reduce((acc, item) => acc + item.cantidad, 0);
  };

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, increment, decrement, getTotal, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook interno que evita tener que escribir useContext(CartContext) en cada componente
export const useCart = () => useContext(CartContext);