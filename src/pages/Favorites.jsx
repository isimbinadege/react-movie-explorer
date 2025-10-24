import React from "react";
import { Link } from "react-router-dom";
import useFavorites from "../hooks/useFavorites";

function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-950 text-white p-6 pt-24">

      <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-400 mb-10">
        Your Favorite Movies ❤️
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-300 text-lg mt-20">
          You haven't added any favorites yet.  
          <Link to="/" className="text-red-400 underline ml-1">Browse movies</Link>
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {favorites.map((movie) => (
            <div
              key={movie.id}
              className="bg-black rounded-xl p-4 flex flex-col items-center shadow-lg"
            >
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

                <h3 className="text-lg font-semibold text-red-400 text-center mb-2">
                  {movie.name}
                </h3>

                <p className="text-sm text-gray-400 text-center">
                  {movie.genres?.join(", ") || "No genres"}
                </p>
              </Link>

              {/* Remove Button */}
              <button
                onClick={() => toggleFavorite(movie)}
                className="mt-3 px-4 py-2 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Remove ❌
              </button>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Favorites;
