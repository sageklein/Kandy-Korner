import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import APIManager from '../modules/APIManager';

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return APIManager.getAll().then(productsFromAPI => {
      setProducts(productsFromAPI)
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
		<>
			<section className="addContent">
				<button
					type="button"
					className="btn"
					onClick={() => {
						props.history.push("/products/new");
					}}
				>
					Add Product
				</button>
			</section>
			<div className="ProductCardWrapper">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</>
  );
};

export default ProductList