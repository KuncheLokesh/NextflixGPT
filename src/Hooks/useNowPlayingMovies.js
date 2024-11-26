import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../uitls/movieSlice";
import { OPTIONS_DATA } from "../uitls/constant";
import { useEffect } from "react";


const useNowPlayingMovies=()=>{
    const dispatch=useDispatch((state)=>state.movie);
    const getDataOfMovies=async()=>{
    const getNowPlayingMovies= await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',OPTIONS_DATA);
    const data= await getNowPlayingMovies.json();
    
    dispatch(addNowPlayingMovies(data.results));
    }

    useEffect(()=>{
        getDataOfMovies();
    },[])
}

export default useNowPlayingMovies;