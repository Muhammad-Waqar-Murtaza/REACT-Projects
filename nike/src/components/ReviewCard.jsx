import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} 
            alt={customerName} 
            width={120} 
            height={120} 
            className='rounded-full object-cover'/>
        <p className='info-text text-center max-w-sm mt-6'>{feedback}</p>
        <div className='mt-3 flex justify-center items-center gap-2.5'>
            <img src={star} width={24} height={24} className='object-contain m-0' alt="rating star"/>
            <p className='text-xl text-slate-gray font-montserrat'>({rating})</p>
        </div>
        <h3 className='font-palanquin font-bold text-3xl text-center mt-1'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard