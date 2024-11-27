import React from 'react'
import { useSelector } from 'react-redux'
import MovieTitle from './MovieTitle';
import MovieVedio from './MovieVedio';

const MainContainer = () => {

    const allMoview =useSelector(state=>state.movies?.nowPlayingMovies)
    if(!allMoview) return;
    const movie=allMoview[0];

    const {title,overview}=movie;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <MovieVedio id={movie?.id} />
      </div>
      <div className="absolute top-1/4 left-10 text-white z-20">
        <MovieTitle title={title} overview={overview} />
      </div>
    </div>
  )
}

export default MainContainer