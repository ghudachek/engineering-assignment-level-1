import React from "react";
import { getProducts } from "../services/products";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      if (products.data) {
        setLoading(false);
        console.log(products.data);
      }
      setProducts(products.data);
    };
    fetchProducts();
  }, []);

  if (products.length > 1) {
    console.log(products);

    return (
      <div>
        <h1>All Products</h1>
        {products?.map((product) => (
          <div className="products">
            <Link to={`/product/${product.id}`}>
              <h3>{product.label}</h3>
              <p>
                Price:
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(product.price)}
              </p>
            </Link>
          </div>
        ))}
      </div>
    );
  } else {
    return <h1>No Products</h1>;
  }
};

export default Products;
