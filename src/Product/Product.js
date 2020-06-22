import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import APIManager from '../modules/APIManager';


function Product(props) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		APIManager.getAllProducts().then((result) =>
			setProducts(result)
		);
	}, []);

	return (
		<>
			<header>
				<h1>Products</h1>
				<button onClick={() => props.history.push("/products/add")}>
					Add Product
				</button>
			</header>
			<div className="KandyKardWrapper">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						{...props}
					/>
				))}
			</div>
		</>
	);
}

export default Product;