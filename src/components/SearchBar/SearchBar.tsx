// src/components/SearchBar/SearchBar.tsx

import styles from './SearchBar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import type { SearchFormProps } from '../../types/movie';

export default function SearchBar({ onSearch }: SearchFormProps) {
  const handleSearch = (formData: FormData) => {
    const query = formData.get('query') as string;
    console.log('Search query:', query);

    if (query === "") {
      toast.error("Please enter a search topic!");
      return;
    }

    onSearch(query);
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form action={handleSearch} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>

  );
}