import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTSuggestedMovies from './GPTSuggestedMovies'
import { BG_IMG } from '../uitls/constant'

const GPTSearch = () => {
  return (
    <div>GPTSearch
        <img  className="absolute -z-10" src={BG_IMG} alt='image of Nteflix'/>
        <GPTSearchBar/>
        <GPTSuggestedMovies/>
    </div>
  )
}

export default GPTSearch;