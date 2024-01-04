import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <header className='header-wrap'>
          <Link to='/' className='logo'>E-STORE</Link>
          <div>
            {/* {data} */}
              <li><Link to="/">Home</Link></li> 
              <li><Link to="/about">About</Link></li> 
              <li><Link to="/contact">Contact</Link></li> 
              <li><Link to="/cart">Cart</Link></li> 
          </div>
      </header>
  )
}

export default Header