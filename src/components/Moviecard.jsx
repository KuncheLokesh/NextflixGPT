import React from 'react';
import { IMG_URL } from '../uitls/constant';

const Moviecard = ({ posterPath }) => {
  return (
    <div className="w-48 flex-shrink-0 hover:scale-105 transform transition duration-300 ease-in-out">
      <img
        alt="Movie Poster"
        src={IMG_URL + posterPath}
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
  );
};

export default Moviecard;
