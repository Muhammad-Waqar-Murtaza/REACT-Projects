import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='not-found'>
        <h2>Sorry!</h2>
        <p>the page you are looking for has not found</p>
        <Link to='/'>Back to the homepage</Link>
    </div>
  )
}

export default NotFound