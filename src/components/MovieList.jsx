import React from 'react';
import Moviecard from './Moviecard';

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4">
            {movies?.map((movie, index) => (
              <Moviecard key={index} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
