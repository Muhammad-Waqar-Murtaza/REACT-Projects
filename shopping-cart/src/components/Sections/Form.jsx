import React from 'react'

const Form = () => {
  return (
    <form>
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <textarea name="message" placeholder='Enter Message' cols="30" rows="10"></textarea>
          <div className="input-box">
            <input type="text" placeholder='Enter your name' />
            <input type="email" placeholder='Email' />
          </div>
          <input className='subject' type="text" placeholder='Enter Subject' />
          <button className='send'>SEND</button>
        </div>
        <div className='contact-info'>
          <div className='address'>
            <i class='bx bx-home'></i>
            <div className="address-current">
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div className='address'>
            <i class='bx bx-phone'></i>
            <div className="address-current">
              <h3>+1 253 565 2365</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className='address'>
            <i class='bx bx-envelope'></i>
            <div className="address-current">
              <h3>support@colorlib.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </form>
  )
}

export default Form