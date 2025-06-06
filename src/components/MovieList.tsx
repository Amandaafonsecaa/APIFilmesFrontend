import MovieCard from './MovieCard';
import './MovieList.css';

export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  duration: number;
  director: string;
  genre: string;
}

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <section className="movie-list-section">
      <h1 className="movie-list-title">Filmes em Destaque</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}