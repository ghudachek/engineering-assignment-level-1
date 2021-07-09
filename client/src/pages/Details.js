import React from "react";
import { getProduct } from "../services/products";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params.id);
  useEffect(() => {
    const fetchProducts = async () => {
      const product = await getProduct(params.id);
      if (product) {
        setLoading(false);
        //console.log(product.data);
        setProduct(product.data);
      }
    };
    fetchProducts();
  }, []);

  if (loading === false) {
    return (
      <div className="details">
        <Link to="/">Back</Link>
        <h3>{product.label}</h3>
        <p>
          Details:
          {product.features?.map((feature) => (
            <li>{feature}</li>
          ))}
        </p>
      </div>
    );
  } else {
    return (
      <div className="loading">
        <Link to="/">Back</Link>
        <h1> Loading...</h1>
      </div>
    );
  }
};

export default Details;
