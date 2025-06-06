import React from 'react';
import { IoTimeOutline, IoPersonCircleOutline, IoFilmOutline } from 'react-icons/io5';
 // Importando o tipo
import './MovieCard.css';

export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  duration: number;
  director: string;
  genre: string;
}

// Definindo os tipos das props que o componente recebe
interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  if (!movie) {
    return null;
  }

  return (
    <div className="movie-card">
      <img
        src={movie.posterUrl}
        alt={`Pôster do filme ${movie.title}`}
        className="movie-poster"
      />
      <div className="movie-info-overlay">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-details">
          <div className="detail-item">
            <IoTimeOutline className="detail-icon" />
            <span>{movie.duration} min</span>
          </div>
          <div className="detail-item">
            <IoPersonCircleOutline className="detail-icon" />
            <span>{movie.director}</span>
          </div>
          <div className="detail-item">
            <IoFilmOutline className="detail-icon" />
            <span>{movie.genre}</span>
          </div>
        </div>
      </div>
    </div>
  );
}