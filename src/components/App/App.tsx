// src/components/App/App.tsx

import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import SearchBar from "../SearchBar/SearchBar"
import fetchSearchMovies from "../../services/movieService";
import Loader from "../Loader/Loader";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";
import type { Movie } from "../../types/movie";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const openModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const request = async (textSearch: string) => {
    setLoading(true);
    try {
      const movies = await fetchSearchMovies(textSearch);
      if (movies.length > 0) {
        setMovies(movies);
      } else {
        setMovies([]);
        toast.error("No movies found for your request.");
      }
    } catch {
      toast.error("Error fetching movies");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SearchBar onSearch={request} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        theme="dark"
      />
      {isLoading && (<Loader />)}
      {!isLoading && movies.length > 0 && (<MovieGrid movies={movies} onSelect={openModal} />)}
      {isModalOpen && selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </>
  )
}

export default App
