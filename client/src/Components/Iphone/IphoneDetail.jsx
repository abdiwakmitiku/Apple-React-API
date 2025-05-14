import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Iphone.css"

function IphoneDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductDetail() {
      try {
        const response = await fetch("/Data.json");
        const data = await response.json();
        const products = data.Products;
        const foundProduct = products.find(
          (item) => item.Product_id === parseInt(id)
        );
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    }

    fetchProductDetail();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Or a spinner if you like
  }

  return (
    <div className="container mt-5 iphones">
      <h1>{product.Product_Name}</h1>
      <img
        src={product.Product_Image}
        alt={product.Product_Name}
        className="img-fluid"
      />
      <h4>{product.Product_Discription}</h4>
      <h4>Starting Price: {product.Starting_Price}</h4>
      <h4>Monthly: {product.Price_Range}</h4>
      <h4><a href={product.Product_link} target="_blank" rel="noopener noreferrer">
        Visit Official Page
      </a></h4>
    </div>
  );
}

export default IphoneDetail;
