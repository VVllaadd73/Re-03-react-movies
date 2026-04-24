// src/services/movieService.ts

import axios from 'axios';
import type { MovieResponse } from '../types/movie';

const token = import.meta.env.VITE_TMDB_TOKEN;
const baseURL = 'https://api.themoviedb.org/3';

async function fetchSearchMovies(textSearch: string) {
  const response = await axios.get<MovieResponse>(`${baseURL}/search/movie`, {
    params: {
      query: textSearch
    },
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data.results;
}

export default fetchSearchMovies;