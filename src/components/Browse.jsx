import React, { useEffect, useState } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'


const Browse =  () => {
  useNowPlayingMovies();
  


  return (
    <div><Header></Header> Browse</div>
  )
}

export default Browse