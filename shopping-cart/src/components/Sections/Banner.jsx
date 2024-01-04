import React from 'react'
import heroBanner from '../../assets/hero_man.png.webp'

const Banner = () => {
  return (
    <div className='hero-banner'>
        <div className='banner-left'>
            <img src={heroBanner} alt="" width={600} height={600} />
        </div>
        <div className='banner-right'>
            <h2>60% Discount</h2>
            <h1>Select Your New Perfect Style</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum eveniet, cumque mollitia eaque suscipit?</p>
            <button>Shop now</button>
        </div>
    </div>
  )
}

export default Banner