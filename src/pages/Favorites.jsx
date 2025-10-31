// src/pages/Favorites.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useFavoritesContext } from "../context/FavoritesContext";
import ruth from "../assets/images/ruth.jpeg";

function Favorites() {
  const { favorites, toggleFavorite } = useFavoritesContext();

  return (
    <div className="relative min-h-screen w-full">
      <img
        src={ruth}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black to-red-900/40 backdrop-blur-sm"></div>

      <div className="relative z-10 pt-24 px-6">
        <h1 className="text-center text-4xl font-bold text-red-400 mb-10">
          Your Favorite Movies ❤️
        </h1>

        {favorites.length === 0 ? (
          <p className="text-center text-gray-300 text-lg">
            No favorites yet.
            <Link to="/" className="text-red-400 underline ml-1">
              Browse Movies
            </Link>
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((movie) => (
              <div key={movie.id} className="bg-black p-4 rounded-xl text-center">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={movie.image?.medium}
                    className="h-64 w-full object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-red-400 font-semibold">{movie.name}</h3>
                </Link>
                <button
                  onClick={() => toggleFavorite(movie)}
                  className="mt-3 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700"
                >
                  Remove ❌
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
