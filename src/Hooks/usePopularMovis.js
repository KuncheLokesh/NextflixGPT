import { useDispatch } from "react-redux";
import { addPopularMovies } from "../uitls/movieSlice";
import { useEffect } from "react";
import { OPTIONS_DATA } from "../uitls/constant";


const usePopularMovies=()=>{

    const dispatch=useDispatch((state)=>state.movie);
    const getDataOfMovies=async()=>{
    const getNowPlayingMovies= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',OPTIONS_DATA);
    const data= await getNowPlayingMovies.json();
    
    dispatch(addPopularMovies(data.results));
    }

    useEffect(()=>{
        getDataOfMovies();
    },[])


}

export default usePopularMovies;