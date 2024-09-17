import React from "react";
import ProductCard from "./ProductCard";

const products = [
	{
		image:
			"https://media.gq.com/photos/63e2b8431ff05e504d450057/3:4/w_640,c_limit/Nike-Air-Max-90-GTX-shoes.png",
		name: "Nike Air Max 90 GTX shoes",
		price: 160,
		quantity: 1,
	},
	{
		image:
			"https://media.gq.com/photos/61019f090bf452849a346d63/3:4/w_640,c_limit/Nike-Blazer-mid-'77-vintage-sneakers.jpg",
		name: "Nike Blazer mid '77 vintage sneakers",
		price: 100,
		quantity: 1,
	},
	{
		image:
			"https://media.gq.com/photos/61019f090bf452849a346d63/3:4/w_640,c_limit/Nike-Blazer-mid-'77-vintage-sneakers.jpg",
		name: "Adidas Gazelle shoes	",
		price: 100,
		quantity: 1,
	},
	{
		image:
			"https://media.gq.com/photos/63e2b848275d2fef78a41260/3:4/w_640,c_limit/Reebok-x-A$AP-NAST-Zig-Kinetica-2-5-shoes.png",
		name: "Reebok x A$AP NAST Zig Kinetica 	",
		price: 180,
		quantity: 1,
	},
	{
		image:
			"https://media.gq.com/photos/6102d1d891abc1e5d9e34fd6/3:4/w_640,c_limit/Puma-Clyde-core-foil-sneakers.jpg",
		name: "Puma Clyde core foil sneakers	",
		price: 70,
		quantity: 1,
	},
	{
		image:
			"https://media.gq.com/photos/6102d55a250171c13b378bbf/3:4/w_640,c_limit/Jordan-1-Retro-Royal-sneakers.jpg",
		name: "Jordan 1 Retro Royal sneakers	",
		price: 372,
		quantity: 1,
	},
	{
		image:
			"https://media.gq.com/photos/61ae8b787439b36516f97489/3:4/w_640,c_limit/Jordan-1-low-Fragment-x-Travis-Scott-sneakers.jpg",
		name: "Jordan 1 low Fragment x Travis Scott sneakers	",
		price: 1100,
		quantity: 1,
	},
	{
		image:
			"https://media.gq.com/photos/6101a6cf02037d9f64c0a5b9/3:4/w_640,c_limit/Adidas-Originals-Superstar-sneakers.jpg",
		name: "Adidas Originals Superstar sneakers	",
		price: 95,
		quantity: 1,
	},
	{
		image:
			"https://media.gq.com/photos/6102cb8267eec38a30cf29ba/3:4/w_640,c_limit/New-Balance-993-sneakers.jpg",
		name: "New Balance 993 sneakers	",
		price: 200,
		quantity: 1,
	},
];

const ProductTab = ({ handleAddToCart }) => {
	return (
		<div className="tab">
			{products.map((product) => (
				<ProductCard
					key={product.name}
					image={product.image}
					name={product.name}
					price={product.price}
					handleAddToCart={() => handleAddToCart(product)}
				/>
			))}
		</div>
	);
};

export default ProductTab;
