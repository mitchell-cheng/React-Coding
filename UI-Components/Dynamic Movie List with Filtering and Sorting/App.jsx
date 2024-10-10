import React, { useState } from "react";

export default function MovieList() {
  const [movies, setMovies] = useState([
    { title: "Movie 1", genre: "Action", releaseYear: 2020 },
    { title: "Movie 2", genre: "Comedy", releaseYear: 2019 },
    { title: "Movie 3", genre: "Action", releaseYear: 2021 },
  ]);

  const [filterGenre, setFilterGenre] = useState("");
  const [sortOption, setSortOption] = useState("title");

  const handleFilterChange = (event) => {
    setFilterGenre(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    if (filterGenre) {
      return movie.genre === filterGenre;
    }
    return true;
  });

  const sortedMovies = filteredMovies.sort((a, b) => {
    if (sortOption === "title") {
      return a.title.localeCompare(b.title);
    } else {
      return a.releaseYear - b.releaseYear;
    }
  });

  return (
    <div>
      <select value={filterGenre} onChange={handleFilterChange}>
        <option value="">All Genres</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
      </select>
      <select value={sortOption} onChange={handleSortChange}>
        <option value="title">Sort by Title</option>
        <option value="releaseYear">Sort by Release Year</option>
      </select>
      <ul>
        {sortedMovies.map((movie) => (
          <li key={movie.title}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}