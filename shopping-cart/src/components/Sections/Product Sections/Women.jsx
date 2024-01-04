import React from "react";
import { women } from "../../Constants";
import SingleProduct from "./SingleProduct";

const Women = () => {
  return (
    <div>
      <div className="product-wrap">
        <h1>Women's Latest</h1>
        <p>
          Details to details is what makes Hexashop different from the other
          themes.
        </p>
      </div>
      <div className="singleProduct">
        {women.map((product) => {
          return (
            <SingleProduct product={product} key={product.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Women;
