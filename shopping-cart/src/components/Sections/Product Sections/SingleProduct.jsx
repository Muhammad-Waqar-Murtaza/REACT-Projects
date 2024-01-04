import React, { useContext } from "react";
import { CartArray } from "./Context";


const SingleProduct = ({ product }) => {

  const {cart, setCart} = useContext(CartArray)

  const handleCart = () => {
    setCart([...cart, product])
  }

  return (
    <div>
      <img src={product.image} width={300} height={300} alt="" />
      <div className="product-desc">
        <h3>{product.name}</h3>
        <p>$ {product.price}</p>  
      </div>
      <button className="addtocart" onClick={handleCart}>Add to Cart</button>
    </div>
  );
};

export default SingleProduct;
