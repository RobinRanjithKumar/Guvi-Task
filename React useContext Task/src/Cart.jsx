/* eslint-disable no-unused-vars */
import React from 'react';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, dispatch, totalQuantity, totalAmount } = useCart();

  return (
    <div className="cart-container">
      {cart.map(item => (
        <div className="cart-item" key={item.id}>
          <img
            src="https://via.placeholder.com/100" // Replace with actual image URL
            alt={item.name}
            className="item-image"
          />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>$ {item.price.toFixed(2)}</p>
          </div>
          <div className="item-quantity">
            <button onClick={() => dispatch({ type: 'DECREASE_QUANTITY', id: item.id })}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch({ type: 'INCREASE_QUANTITY', id: item.id })}>+</button>
          </div>
          <div className="item-total">
            <p>$ {(item.price * item.quantity).toFixed(2)}</p>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <h3>Summary</h3>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: $ {totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
