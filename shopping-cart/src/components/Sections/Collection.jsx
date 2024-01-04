import React from 'react'
import gallery1 from '../../assets/gallery1.jpg.webp'
import gallery2 from '../../assets/gallery2.jpg.webp'
import gallery3 from '../../assets/gallery3.jpg.webp'
import gallery4 from '../../assets/gallery4.jpg.webp'
import gallery5 from '../../assets/gallery5.jpg.webp'

const Collection = () => {
  return (
    <div className='collection-wrap'>
        <div className='collection'>
           <img src={gallery1} alt="" width={300} height={300} />
           <img src={gallery2} alt="" width={300} height={300} />
           <img src={gallery3} alt="" width={300} height={300} />
           <img src={gallery4} alt="" width={300} height={300} />
           <img src={gallery5} alt="" width={300} height={300} />
        </div>
    </div>
  )
}

export default Collection