import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ProductTab from "./components/ProductTab";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";
import { Payment } from "./components/payment";
import { PaymentProvider } from "./context/paymentContext";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [action, setAction] = useState("cart");

  const toPayment = () => {
    setAction("payment");
    // window.location.href = "/payment";
  };

  const toCart = () => {
    setAction("cart");
    // window.location.href = "/";
  };

  const handleAddToCart = (product) => {
    if (cartItems.includes(product)) {
      increaseQuantity(cartItems.indexOf(product));
    } else {
      product.quantity = 1;
      setCartItems([...cartItems, product]);
      console.log(cartItems);
    }
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity++;
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity--;
    if (updatedCart[index].quantity === 0) {
      updatedCart.splice(index, 1);
    }
    setCartItems(updatedCart);
  };

  return (
    <div>
      <BrowserRouter>
        <PaymentProvider value={{ action, cartItems, toPayment, toCart }}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<ProductTab handleAddToCart={handleAddToCart} />}
            />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <ShoppingCart
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        </PaymentProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
