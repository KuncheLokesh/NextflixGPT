import React from 'react'

const MovieTitle = ({title,overview}) => {
  return (
    <div className='my-56 py-40  mx-16'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <h2 className='w-1/4 my-3'>{overview}</h2>
      <div>
        <button className='bg-black px-8 text-white text-xl rounded-lg py-2'>▶️Play</button>
        <button className='bg-gray-200 px-8 text-black text-xl rounded-lg py-2 mx-2'>More Info</button>
      </div>
    </div>

    
  )
}

export default MovieTitle