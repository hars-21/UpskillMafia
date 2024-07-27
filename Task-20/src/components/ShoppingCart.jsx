import React from "react";

const ShoppingCart = ({ cartItems, decreaseQuantity, increaseQuantity }) => {
	const calculateTotal = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	};

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
								<div className="action">
									<button onClick={() => decreaseQuantity(index)}>-</button>
									<span>{item.quantity}</span>
									<button onClick={() => increaseQuantity(index)}>+</button>
								</div>
							</li>
						))}
					</ul>
					<p style={{ textAlign: "center" }}>Total: ${calculateTotal()}</p>
				</div>
			)}
		</div>
	);
};

export default ShoppingCart;
