import React from "react";

const Card = ({ title, desc, img }) => {
	return (
		<div className="card">
			<img src={img} alt={title} />
			<h6>{title}</h6>
			<p>{desc}</p>
		</div>
	);
};

export default Card;
