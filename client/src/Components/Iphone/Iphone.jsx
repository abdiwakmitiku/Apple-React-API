// import React, { useState, useEffect } from "react";
// import { Link } from "react-router";

// function Iphone() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function getIphoneData() {
//       try {
//         const response = await fetch("http://localhost:2025/iphones");
//         const data = await response.json();
//         setProducts(data.Products);
//         console.log(data);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     getIphoneData();
//   }, []);
//   console.log(products);

//   let flip = true;

//   return (
//     <>
//       <section className="internal-page-wrapper">
//         <div className="container">
//           <div className="row justify-content-center text-center">
//             <div className="col-12 mt-5 pt-5">
//               <h1 className="font-weight-bold">Iphones</h1>
//               <div className="brief-description iphone-main-desc mb-5">
//                 The Best For The Brightest
//               </div>
//             </div>
//           </div>
//           {products?.map((singleProduct) => {
//             let Name = singleProduct.Product_Name;
//             let id = singleProduct.Product_id;
//             let Image = singleProduct.Product_Image
//             let Brief = singleProduct.Product_Brief_Description;
//             let StartPrice = singleProduct.Starting_Price;
//             let PriceRange = singleProduct.Price_Range;
//             let ProductPage = "/iphone/" + id;
//             let order1 = 1;
//             let order2 = 2;
//             if (flip) {
//               order1 = 2;
//               order2 = 1;
//               flip = !flip;
//             } else {
//               flip = !flip;
//             }

//             return (
//               <div
//                 key={id}
//                 className="row justify-content-center text-center product-holder h-100"
//               >
//                 <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
//                   <div className="title-wrapper">
//                     {Name}
//                   </div>
//                   <div className="product-brief">{Brief}</div>
//                   <div className="starting-price">{`Starting at ${StartPrice}`}</div>
//                   <div className="monthly-price">{PriceRange}</div>
//                   <div className="links-wrapper">
//                     <ul>
//                       <li>
//                         <Link to={ProductPage}>Learn More</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className={`col-sm-12 col-md-6 order-${order2}`}>
//                   <div className="product-image">
//                     <img src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhoneSE-color-lineup-4up-220308_big.jpg.small_2x.jpg" alt="product" />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </>
//   );
// }

// export default Iphone;

import React, { useState, useEffect } from "react";
import { Link } from "react-router";


function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getIphoneData() {
      try {
        const response = await fetch("./../../../public/Data.json");
        const data = await response.json();
        setProducts(data.Products);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    getIphoneData();
  }, []);
  console.log(products);

  let flip = true;

  return (
    <>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">Iphones</h1>
              <div className="brief-description iphone-main-desc mb-5">
                The Best For The Brightest
              </div>
            </div>
          </div>
          {products?.map((singleProduct) => {
            let Name = singleProduct.Product_Name;
            let id = singleProduct.Product_id;
            let Image = singleProduct.Product_Image;
            let Brief = singleProduct.Product_Brief_Description;
            let StartPrice = singleProduct.Starting_Price;
            let PriceRange = singleProduct.Price_Range;
            let ProductPage = "/iphone/" + id;
            let order1 = 1;
            let order2 = 2;
            if (flip) {
              order1 = 2;
              order2 = 1;
              flip = !flip;
            } else {
              flip = !flip;
            }

            return (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="title-wrapper">{Name}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">{`Starting at ${StartPrice}`}</div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={ProductPage}>Learn More</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="product-image">
                    <img src={Image} alt="product" />
                  </div>
                </div>
              </div>
            );s
          })}
        </div>
      </section>
    </>
  );
}

export default Iphone;
