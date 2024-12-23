import React from 'react'

import {  useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';


const MovieVedio = ({id}) => {
  
  const storeTrialer=useSelector((store)=>store?.movies?.trailer)
  useMovieTrailer(id);

  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${storeTrialer?.key}?autoplay=1&mute=1&loop=1&playlist=${storeTrialer?.key}&rel=0&modestbranding=1&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

  )
}

export default MovieVedio