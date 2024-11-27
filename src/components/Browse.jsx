import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovis';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';


const Browse =  () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header></Header>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse