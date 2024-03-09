import React from 'react'
import { Link } from 'react-router-dom'


const Nolike = () => {
  return (
    <div className='relative  top-[200px]'>
        <Link to='/'>
          <button className='bg-orange-500 rounded-md   px-6 p-2'>
             No like Yet
          </button>
        </Link>
    </div>
  )
}

export default Nolike