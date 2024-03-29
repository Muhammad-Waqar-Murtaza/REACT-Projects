import React from 'react'
import { products } from '../assets/constants'
import PopularProductCards from '../components/PopularProductCards'

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-bold font-palanquin'>
          Our <span className='text-coral-red'>Popular</span> Products
        </h2>
        <p className='text-slate-gray font-montserrat lg:max-w-lg mt-2'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </div>
      
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-4'>
        
        {products.map((product)=>(
          <PopularProductCards key={product.name} {...product} />
        ))}

      </div>

      

    </section>
  )
}

export default PopularProducts