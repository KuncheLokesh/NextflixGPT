import { useDispatch } from "react-redux";
import { addTrailer } from "../uitls/movieSlice";
import { useEffect } from "react";
import { OPTIONS_DATA } from "../uitls/constant";

const useMovieTrailer=(id)=>{
    const dispatch=useDispatch();

    const moviewClips=async()=>{
        const allClipsRaw  =await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,OPTIONS_DATA )
        const allClips=await allClipsRaw.json();
        
        const filterData=allClips?.results.filter((clip)=> clip.type="Trailer");
        const TialerData=filterData.length>0?filterData[filterData.length-1]:allClips?.results[0];
        dispatch(addTrailer(TialerData));
        
        }
      
        useEffect(()=>{
          moviewClips();
        },[])

}

export default useMovieTrailer;