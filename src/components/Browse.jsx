import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovis';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';


const Browse =  () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  const showGPT=useSelector(store=>store.gpt.showgptPage);

  return (
    <div>
      <Header></Header>
      {
        showGPT?
        <GPTSearch/>:<>
        <MainContainer/>
        <SecondaryContainer/></>
      }
      
    </div>
  )
}

export default Browse