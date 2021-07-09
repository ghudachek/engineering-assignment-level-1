import React from "react";
import { getProducts } from "../services/products";
import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { Link } from "@material-ui/core";
const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      if (products.data) {
        setLoading(false);
        console.log(products.data);
        setProducts(products.data);
      }
    };
    fetchProducts();
  }, []);

  if (loading === false) {
    // console.log(products);

    return (
      <div>
        <h1>All Products</h1>
        {products?.map((product) => (
          <div className="products">
            <Link
              href={`/product/${product.id}`}
              style={{ textDecoration: "none" }}
            >
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
    return <h1>Loading...</h1>;
  }
};

export default Products;
