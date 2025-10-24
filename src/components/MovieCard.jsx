import React from "react";
import { Link, useNavigate } from "react-router-dom";

function MovieCard({ movie, favoritesHook }) {
  const { isFavorite, toggleFavorite } = favoritesHook;
  const navigate = useNavigate();

  const handleFavoriteClick = (e) => {
    e.preventDefault(); // stop the Link from triggering
    toggleFavorite(movie);
    navigate("/favorites"); // go to favorites page
  };

  return (
    <div className="bg-black rounded-xl p-4 flex flex-col items-center transform transition duration-200 hover:scale-105 hover:shadow-lg">
      <Link to={`/movie/${movie.id}`} className="w-full">
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
      </Link>

      {/* Add to Favorites Button */}
      <button
        onClick={handleFavoriteClick}
        className="mt-3 px-4 py-2 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition"
      >
        {isFavorite(movie.id) ? "Favorited ❤️" : "Add to Favorites ❤️"}
      </button>
    </div>
  );
}

export default MovieCard;
