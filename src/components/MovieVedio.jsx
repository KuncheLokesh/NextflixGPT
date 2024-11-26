import React from 'react'

import {  useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';


const MovieVedio = ({id}) => {
  
  const storeTrialer=useSelector((store)=>store?.movies?.trailer)
  useMovieTrailer(id);

  return (
    <div>
      <iframe 
      width="560" 
      height="315"
       src={`https://www.youtube.com/embed/${storeTrialer?.key}?si=KP1VCJZjJDOB0lwf9`} 
       title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      />
    </div>
  )
}

export default MovieVedio