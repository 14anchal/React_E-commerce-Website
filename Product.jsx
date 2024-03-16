import React from "react";
import "./Product.css";

export default function Product({SelectedProduct}) {

  return (
    <div>
      <main id="Pmain">
        <div id="Product">
          <img src= {SelectedProduct.Img} />

          <div id="ProductContent">
            <h2>{SelectedProduct.Title}</h2>
            <p>
              Description:
              {SelectedProduct.desc}
            </p>
            <p>Price: ${SelectedProduct.Price}</p>

            {/* Additional content */}
            <div id="AdditionalContent">
              <p>Discount: 10% off</p>
              <p>EMI Options Available</p>
              <p>Card Offers: Get 5% cashback with XYZ Bank Cards</p>
              {/* Add more content as needed */}
            </div>

            <div id="PBtns">
              <button>Add To Cart</button>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}