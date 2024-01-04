import React from 'react'

const Newsletter = () => {
  return (
    <div className='newsletter-wrap'>
        <div className='newsletter'>
            <div className="newsletter-left">
                <h2>Get Our<br/>Latest Offers News</h2>
                <p>Subscribe news letter</p>
            </div>
            <div className="newsletter-right">
                <div className="input-field">
                    <input type="text" placeholder='Your email here'/>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter