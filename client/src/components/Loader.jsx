import React from 'react'
import gif from '../assets/giphy (6).gif'
const Loader = () => {
  return (
    <div role='status' className=''>
      <img src={gif} alt="" className='w-[120px]' />
    </div>
  )
}

export default Loader
