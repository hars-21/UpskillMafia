import React from "react";
import usePayment from "../context/paymentContext";
import { Link, Outlet } from "react-router-dom";

const ShoppingCart = ({ decreaseQuantity, increaseQuantity }) => {
	const calculateTotal = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	};

	const { action, cartItems, toPayment, toCart } = usePayment();

	return (
		<div className="shopping-cart">
			<h2>Shopping Cart</h2>
			{cartItems.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<div>
					<ul>
						{cartItems.map((item, index) => (
							<li key={index} className="cartItems">
								{item.image && (
									<img src={item.image} alt={item.name} className="cartImage" />
								)}
								<div className="itemDetails">
									{item.name}
									<br />${item.price}
								</div>
								<div className={"action"}>
									<button onClick={() => decreaseQuantity(index)}>-</button>
									<span>{item.quantity}</span>
									<button onClick={() => increaseQuantity(index)}>+</button>
								</div>
							</li>
						))}
					</ul>
					<p className="totalPrice">Total: ${calculateTotal()}</p>
					{action === "payment" ? (
						<Link to="/" className="payment-btn" onClick={() => toCart()}>
							Go back to Shopping
						</Link>
					) : (
						<Link
							to="/payment"
							className="payment-btn"
							onClick={() => toPayment()}
						>
							Proceed to Payment
						</Link>
					)}
				</div>
			)}
			<Outlet />
		</div>
	);
};

export default ShoppingCart;
