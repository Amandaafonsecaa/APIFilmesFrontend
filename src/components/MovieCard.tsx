import {
  IoTimeOutline,
  IoPersonCircleOutline,
  IoFilmOutline,
} from "react-icons/io5";
// Importando o tipo
import "./MovieCard.css";
import type { Movie } from '../types/movie';

// Dentro do seu Home.tsx

// Definindo os tipos das props que o componente recebe
interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  if (!movie) {
    return null;
  }

  console.log("DADOS RECEBIDOS PELO CARD:", movie);

  return (
    <div className="movie-card">
      <img
        src={movie.posterUrl}
        alt={`Pôster do filme ${movie.titulo}`}
        className="movie-poster"
      />
      <div className="movie-info-overlay">
        <h3 className="movie-title">{movie.titulo}</h3>
        <div className="movie-details">
          <div className="detail-item">
            <IoTimeOutline className="detail-icon" />
            <span>{movie.duracao} min</span>
          </div>
          <div className="detail-item">
            <IoPersonCircleOutline className="detail-icon" />
            <span>{movie.diretor}</span>
          </div>
          <div className="detail-item">
            <IoFilmOutline className="detail-icon" />
            <span>{movie.genero}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
