import React from 'react'
import { star } from '../assets/icons'

const PopularProductCards = ({name, price, imgURL}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt={name} className='w-[280px] h-[280px]'/>
        
        <div className='mt-8 flex justify-start gap-2.5 '>
          <img src={star} alt="rating star" />
          <span className='font-montserrat text-slate-gray text-xl leading-normal'>(4.5)</span>
        </div>
        <h3 className='font-palanquin text-2xl font-semibold my-2 leading-normal'>{name}</h3>
        <p className='text-coral-red text-2xl font-montserrat font-semibold leading-normal'>{price}</p>
    </div>
  )
}

export default PopularProductCards