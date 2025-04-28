// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";

// function IphoneDetail() {
//   const { id } = useParams(); // This gets the "id" from the URL
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     async function fetchProductDetail() {
//       try {
//         const response = await fetch("http://localhost:2025/iphones");
//         const data = await response.json();
//         const products = data.Products;
//         const foundProduct = products.find(
//           (item) => item.Product_id === parseInt(id)
//         );
//         setProduct(foundProduct);
//       } catch (error) {
//         console.error("Error fetching product detail:", error);
//       }
//     }

//     fetchProductDetail();
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>; // Or a spinner if you like
//   }

//   return (
//     <div className="container mt-5">
//       <h1>{product.Product_Name}</h1>
//       <img
//         src={product.Product_Image}
//         alt={product.Product_Name}
//         className="img-fluid"
//       />
//       <p>{product.Product_Discription}</p>
//       <p>Starting Price: {product.Starting_Price}</p>
//       <p>Monthly: {product.Price_Range}</p>
//       <a href={product.Product_link} target="_blank" rel="noopener noreferrer">
//         Visit Official Page
//       </a>
//     </div>
//   );
// }

// export default IphoneDetail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function IphoneDetail() {
  const { id } = useParams(); // This gets the "id" from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductDetail() {
      try {
        const response = await fetch("./../../../public/Data.json");
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
    <div className="container mt-5">
      <h1>{product.Product_Name}</h1>
      <img
        src={product.Product_Image}
        alt={product.Product_Name}
        className="img-fluid"
      />
      <p>{product.Product_Discription}</p>
      <p>Starting Price: {product.Starting_Price}</p>
      <p>Monthly: {product.Price_Range}</p>
      <a href={product.Product_link} target="_blank" rel="noopener noreferrer">
        Visit Official Page
      </a>
    </div>
  );
}

export default IphoneDetail;
