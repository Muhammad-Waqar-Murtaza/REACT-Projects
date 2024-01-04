import React, { useContext, useState, useEffect } from "react";
import Header from "./Header";
import { CartArray } from "./Product Sections/Context";
import CartProducts from "./CartProducts";

const Cart = () => {

  const { cart } = useContext(CartArray);

  const [total, setTotal] = useState('')

  useEffect(()=>{
    setTotal(cart.reduce((acc, curr)=> acc + Number(curr.price),0))
  },[total, cart])

  return (
    <div>
      <Header />
      <div className="product-wrap">
        <h1>This is the cart</h1>
        <p>The Total is: ${total}</p>
      </div>
      <div className="singleProduct">
        {cart.map((product) => {
          return <CartProducts product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
