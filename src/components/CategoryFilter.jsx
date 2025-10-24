import React from "react";

function CategoryFilter({ genres, selectedGenre, onSelectGenre }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 my-6">
      <button
        onClick={() => onSelectGenre("All")}
        className={`px-4 py-2 rounded-tr-lg font-semibold text-sm transition-all duration-200 ${
          selectedGenre === "All"
            ? "bg-red-600 text-white"
            : "bg-gray-800 text-gray-300 hover:bg-red-700 hover:text-white"
        }`}
      >
        All
      </button>

      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onSelectGenre(genre)}
          className={`px-4 py-2 rounded-tr-lg font-semibold text-sm transition-all duration-200 ${
            selectedGenre === genre
              ? "bg-red-600 text-white"
              : "bg-gray-950 text-gray-300 hover:bg-red-700 hover:text-white"
          }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
