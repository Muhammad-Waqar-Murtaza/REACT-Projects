import React, { useContext } from 'react'
import { CartArray } from './Product Sections/Context'

const CartProducts = ({product}) => {

    const {cart, setCart} = useContext(CartArray)

  const removeFromCart = (id) => {
    setCart(cart.filter((prod)=> prod.id !== id))
  }

  return (
    <div>
      <img src={product.image} width={300} height={300} alt="" />
      <div className="product-desc">
        <h3>{product.name}</h3>
        <p>$ {product.price}</p>  
      </div>
      <button className="addtocart" onClick={()=>{removeFromCart(product.id)}}>Remove Item</button>
    </div>
  )
}

export default CartProducts