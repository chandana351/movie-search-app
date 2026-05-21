import { useMemo, useState } from "react";

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=80",
    description: "A mind-bending thriller about dreams, memory and impossible heists."
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.7,
    poster: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80",
    description: "A space journey about survival, family and the future of humanity."
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    poster: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=900&q=80",
    description: "A gripping superhero crime drama with unforgettable conflict."
  },
  {
    id: 4,
    title: "Avatar",
    year: 2009,
    genre: "Adventure",
    rating: 7.9,
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=80",
    description: "A visually rich adventure set in a beautiful alien world."
  },
  {
    id: 5,
    title: "Titanic",
    year: 1997,
    genre: "Romance",
    rating: 7.9,
    poster: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80",
    description: "A romantic drama set against one of history's biggest tragedies."
  },
  {
    id: 6,
    title: "Joker",
    year: 2019,
    genre: "Drama",
    rating: 8.4,
    poster: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80",
    description: "A dark character study about loneliness, society and identity."
  },
  {
    id: 7,
    title: "Frozen",
    year: 2013,
    genre: "Animation",
    rating: 7.4,
    poster: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=900&q=80",
    description: "A magical animated story about courage, family and friendship."
  },
  {
    id: 8,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    poster: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
    description: "A cyber action classic about reality, choice and rebellion."
  },
  {
    id: 9,
    title: "Black Panther",
    year: 2018,
    genre: "Action",
    rating: 7.3,
    poster: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?auto=format&fit=crop&w=900&q=80",
    description: "A stylish action film about legacy, leadership and culture."
  },
  {
    id: 10,
    title: "La La Land",
    year: 2016,
    genre: "Romance",
    rating: 8.0,
    poster: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "A musical romance about ambition, art and difficult choices."
  },
  {
    id: 11,
    title: "Finding Nemo",
    year: 2003,
    genre: "Animation",
    rating: 8.2,
    poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    description: "A warm animated ocean adventure about family and bravery."
  },
  {
    id: 12,
    title: "Mad Max Fury Road",
    year: 2015,
    genre: "Action",
    rating: 8.1,
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    description: "A high-energy action film with bold visuals and nonstop momentum."
  }
];

const genres = ["All", "Action", "Adventure", "Animation", "Drama", "Romance", "Sci-Fi"];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("rating");

  const filteredMovies = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return movies
      .filter((movie) => {
        const matchesSearch =
          movie.title.toLowerCase().includes(query) ||
          movie.genre.toLowerCase().includes(query) ||
          movie.description.toLowerCase().includes(query);
        const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre;

        return matchesSearch && matchesGenre;
      })
      .sort((first, second) => {
        if (sortBy === "year") return second.year - first.year;
        if (sortBy === "title") return first.title.localeCompare(second.title);
        return second.rating - first.rating;
      });
  }, [searchTerm, selectedGenre, sortBy]);

  return (
    <div className="app">
      <header className="hero">
        <nav className="nav">
          <span className="logo">MovieFinder</span>
          <a href="#movies">Explore Movies</a>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">React Movie Search App</p>
          <h1>Find movies by title, genre and rating.</h1>
          <p>
            A clean responsive movie search interface built with React, JavaScript, HTML and CSS.
          </p>
        </div>
      </header>

      <main id="movies" className="movies-section">
        <section className="controls" aria-label="Movie search controls">
          <label>
            Search movies
            <input
              type="search"
              placeholder="Search Inception, action, romance..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>

          <label>
            Genre
            <select value={selectedGenre} onChange={(event) => setSelectedGenre(event.target.value)}>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </label>

          <label>
            Sort by
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
              <option value="rating">Top Rated</option>
              <option value="year">Newest</option>
              <option value="title">Title A-Z</option>
            </select>
          </label>
        </section>

        <div className="section-heading">
          <p>{filteredMovies.length} results found</p>
          <h2>Movie Collection</h2>
        </div>

        {filteredMovies.length > 0 ? (
          <section className="movie-grid">
            {filteredMovies.map((movie) => (
              <article className="movie-card" key={movie.id}>
                <img src={movie.poster} alt={movie.title} />
                <div className="movie-content">
                  <div className="movie-meta">
                    <span>{movie.genre}</span>
                    <strong>⭐ {movie.rating}</strong>
                  </div>
                  <h3>{movie.title}</h3>
                  <p>{movie.description}</p>
                  <small>{movie.year}</small>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="empty-state">
            <h3>No movies found</h3>
            <p>Try searching for action, sci-fi, romance or animation.</p>
          </section>
        )}
      </main>
    </div>
  );
}
