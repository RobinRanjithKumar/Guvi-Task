/* eslint-disable no-unused-vars */
// src/App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./features/cartSlice";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://drive.google.com/uc?export=download&id=1fOadeM1liwbUK38z92F0XYugk2jwqK2r"
        );
        response.data.forEach((item) => dispatch(addItem(item)));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>React Redux Cart</h1>
      <div>
        {cart.items.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(addItem(item))}>+</button>
            <button onClick={() => dispatch(removeItem(item.id))}>-</button>
          </div>
        ))}
      </div>
      <div>
        <h3>Total Quantity: {cart.totalQuantity}</h3>
        <h3>Total Amount: ${cart.totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default App;