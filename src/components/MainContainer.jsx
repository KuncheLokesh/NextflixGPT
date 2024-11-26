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
    <div>
        <MovieTitle title={title} overview={overview}/>
        <MovieVedio id={movie?.id} />
    </div>
  )
}

export default MainContainer