import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a movie..."
        className="w-full mt-4 px-4 py-4 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
      />
    </div>
  );
}

export default SearchBar;
