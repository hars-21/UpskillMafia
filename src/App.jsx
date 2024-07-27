import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import ProductTab from "./components/ProductTab";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";

const App = () => {
	const [cartItems, setCartItems] = useState([]);

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
			<Navbar />
			<ProductTab handleAddToCart={handleAddToCart} />
			<ShoppingCart
				cartItems={cartItems}
				increaseQuantity={increaseQuantity}
				decreaseQuantity={decreaseQuantity}
			/>
		</div>
	);
};

export default App;
