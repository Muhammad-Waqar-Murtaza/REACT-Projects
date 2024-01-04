import React from "react";
import { men } from "../../Constants";
import SingleProduct from './SingleProduct'

const Mens = () => {
  return (
    <div>
      <div className="product-wrap">
        <h1>Men's Latest</h1>
        <p>
          Details to details is what makes Hexashop different from the other
          themes.
        </p>
      </div>
      <div className="singleProduct">
        {men.map((product) => {
          return (
            <SingleProduct product={product} key={product.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Mens;
