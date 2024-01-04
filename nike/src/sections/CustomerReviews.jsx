import React from 'react'
import ReviewCard from '../components/ReviewCard'
import { reviews } from '../assets/constants'

const CustomerReviews = () => {
  return (
    <section className='max-contianer'>
      <h2 className='font-palanquin font-bold text-4xl text-center'>
        What Our
        <span className='text-coral-red'> Customers </span>
         Say?
      </h2>
      <p className='info-text text-center max-w-lg mt-4 m-auto'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review)=>(
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews