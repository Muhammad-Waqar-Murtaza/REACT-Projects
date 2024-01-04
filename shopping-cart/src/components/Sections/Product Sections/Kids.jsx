import React from 'react'
import { kid } from '../../Constants'
import SingleProduct from './SingleProduct'

const Kids = () => {
  return (
    <div>
    <div className='product-wrap'>
      <h1>Kid's Latest</h1>
      <p>
        Details to details is what makes Hexashop different from the other
        themes.
      </p>
    </div>
    <div className='singleProduct'>
    {kid.map((product)=>{
      return(
        <SingleProduct product={product} key={product.id} />
      )
    })}
    </div>
  </div>
  )
}

export default Kids