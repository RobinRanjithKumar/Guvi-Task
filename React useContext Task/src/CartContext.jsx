/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_QUANTITY':
      return state.map(item =>
        item.id === action.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case 'DECREASE_QUANTITY':
      return state.map(item =>
        item.id === action.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    default:
      return state;
  }
};

function CartProvider({ children }) {
    const initialState = [
        { id: 1, name: 'Wolf So Grim And Mangy', price: 249, quantity: 1 },
        // Add more items here if needed
    ];

    const [cart, dispatch] = useReducer(cartReducer, initialState);

    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider value={{ cart, dispatch, totalQuantity, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

export default CartProvider;
