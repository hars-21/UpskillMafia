import React from "react";

const ProductCard = ({ image, name, price, handleAddToCart }) => {
	return (
		<div className="product-card">
			<img src={image} alt={name} className="product-image" />
			<h3 className="product-name">{name}</h3>
			<p className="product-price">${price}</p>
			<button onClick={handleAddToCart} className="add-to-cart-button">
				Add to Cart
			</button>
		</div>
	);
};

export default ProductCard;
