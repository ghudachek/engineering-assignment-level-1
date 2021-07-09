import React from "react";
import { getProduct } from "../services/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "@material-ui/core";

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
        <Link href="/" className="link">
          Back
        </Link>
        <h3>{product.label}</h3>
        <p>Features:</p>
        {product.features?.map((feature) => (
          <li>{feature}</li>
        ))}
      </div>
    );
  } else {
    return (
      <div className="loading">
        <Link href="/" className="link">
          Back
        </Link>
        <h1> Loading...</h1>
      </div>
    );
  }
};

export default Details;
