import { useDispatch } from "react-redux";
import { OPTIONS_DATA } from "../uitls/constant";
import { useEffect } from "react";
import { addTopRatedMovies } from "../uitls/movieSlice";



const useTopRatedMovies=()=>{
    const dispatch=useDispatch((state)=>state.movie);
    const getDataOfMovies=async()=>{
    const getNowPlayingMovies= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',OPTIONS_DATA);
    const data= await getNowPlayingMovies.json();
    
    dispatch(addTopRatedMovies(data.results));
    }

    useEffect(()=>{
        getDataOfMovies();
    },[])
}

export default useTopRatedMovies;