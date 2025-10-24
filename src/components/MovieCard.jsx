import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="bg-black rounded-xl p-4 flex flex-col items-center transform transition duration-200 hover:scale-105 hover:shadow-lg">
        {movie.image?.medium ? (
          <img
            src={movie.image.medium}
            alt={movie.name}
            className="h-64 w-full object-cover rounded-lg mb-4"
          />
        ) : (
          <div className="h-64 w-full bg-gray-700 rounded-lg mb-4 flex items-center justify-center text-gray-400">
            No Poster
          </div>
        )}
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center text-red-500">
          {movie.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-400 text-center">
          {movie.genres?.join(", ") || "No genres"}
        </p>
      </div>
    </Link>
  );
}

export default MovieCard;
