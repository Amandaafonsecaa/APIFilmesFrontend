import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";// Supondo que você tenha este componente
import Search from "../components/Search";
import MovieList from "../components/MovieList";
import "./Home.css";

export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  duration: number;
  director: string;
  genre: string;
}

const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Duna: Parte Dois",
    posterUrl: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8aaB9Nhrr.jpg",
    duration: 166,
    director: "Denis Villeneuve",
    genre: "Ficção Científica",
  },
  {
    id: 2,
    title: "Oppenheimer",
    posterUrl: "https://image.tmdb.org/t/p/w500/c0DCmfC7Et2K3URn_q3A3s32A9D.jpg",
    duration: 180,
    director: "Christopher Nolan",
    genre: "Drama",
  },
  {
    id: 3,
    title: "Homem-Aranha: Através do Aranhaverso",
    posterUrl: "https://image.tmdb.org/t/p/w500/b4Y22lbA7xcn2P2jQ25h0rE2a2A.jpg",
    duration: 140,
    director: "Joaquim Dos Santos",
    genre: "Animação",
  },
  {
    id: 4,
    title: "Pobres Criaturas",
    posterUrl: "https://image.tmdb.org/t/p/w500/45o8q4hOh2Wl4fS5TjN2a3aD4iW.jpg",
    duration: 141,
    director: "Yorgos Lanthimos",
    genre: "Comédia",
  },
  {
    id: 5,
    title: "Godzilla Minus One",
    posterUrl: "https://image.tmdb.org/t/p/w500/dGv15yaI9T6n2ac3zGza9jP9iAI.jpg",
    duration: 125,
    director: "Takashi Yamazaki",
    genre: "Ação",
  },
  {
    id: 6,
    title: "A Origem",
    posterUrl: "https://image.tmdb.org/t/p/w500/8B2s8iGgm4aYf6m5T2gV6Vn2E10.jpg",
    duration: 148,
    director: "Christopher Nolan",
    genre: "Ficção Científica",
  },
];

export default function Home() {
  const [textoDaBusca, setTextoDaBusca] = useState('');
  const movieListRef = useRef<HTMLDivElement>(null); // Tipando a ref

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextoDaBusca(event.target.value);
  };

  const handleScrollButtonClick = () => {
    movieListRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="home-container">
      <section className="search-section">
        <Navbar />
        <div className="search-component-wrapper">
          <Search
            value={textoDaBusca}
            onChange={handleSearchChange}
            onButtonClick={handleScrollButtonClick}
          />
        </div>
      </section>

      {/* O MovieList agora é envolvido em uma div para que a ref possa ser anexada */}
      <div ref={movieListRef}>
        <MovieList movies={mockMovies} />
      </div>
    </div>
  );
}