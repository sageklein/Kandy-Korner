import { Link } from "react-router-dom";
import React from "react";


const ProductCard = (props) => {
	return (
		<div className="kandyCard">
			<div className="kandyCardContent">
				{/* <picture>
					<img
						src=
						alt="Product"
					/>
				</picture> */}
				<h3>
					Name:{" "}
					<span className="kandyName">
						{props.product.name}
					</span>
				</h3>
				<p>Price: ${props.product.price}</p>
				<p>Product Type: {props.product.productTypeId}</p>
				<Link to={`/products/${props.product.id}`}>
					<button className="details">Details</button>
				</Link>
			</div>
		</div>
	);
};

export default ProductCard;
