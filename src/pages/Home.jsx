import React, { useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import useFetchMovies from "../hooks/useFetchMovies";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import useFavorites from "../hooks/useFavorites";
import ruth from "../assets/images/ruth.jpeg";

function Home() {
  const { movies, loading, error } = useFetchMovies();

  // ✅ Extract values from favorites hook
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Get all unique genres
  const genres = Array.from(
    new Set(movies.flatMap((movie) => movie.genres || []))
  );

  // Filter movies based on genre and search
  const filteredMovies = movies.filter((movie) => {
    const matchGenre =
      selectedGenre === "All" || movie.genres?.includes(selectedGenre);
    const matchSearch = movie.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchGenre && matchSearch;
  });

  return (
    <div className="relative min-h-screen w-full">
      {/* Background image */}
      <img
        src={ruth}
        alt="Movies background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-red-900/30 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 pt-20 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 tracking-wide text-red-500">
          Dive Into Cinema
        </h1>

        {/* Search bar */}
        <SearchBar search={searchQuery} setSearch={setSearchQuery} />

        {/* Category filter */}
        <CategoryFilter
          genres={genres}
          selectedGenre={selectedGenre}
          onSelectGenre={setSelectedGenre}
        />

        {/* Loading / Error / Movie list */}
        {loading && <p className="text-center text-white mt-10">Loading...</p>}
        {error && (
          <p className="text-center text-red-500 mt-10">Error: {error}</p>
        )}

        {!loading && !error && (
          filteredMovies.length > 0 ? (
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  favoritesHook={{ favorites, toggleFavorite, isFavorite }} // ✅ clean pass
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-300 text-lg mt-10">
              🎬 No results found for{" "}
              <span className="text-red-400 font-semibold">
                {searchQuery}
              </span>
            </p>
          )
        )}
      </div>
    </div>
  );
}

export default Home;
