import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar"; // Supondo que você tenha este componente
import Search from "../components/Search";
import MovieList from "../components/MovieList";
import "./Home.css";
import { useQuery } from "@tanstack/react-query";

async function fetchMovies(): Promise<Movie[]> {
  const BACKEND_URL =
    "https://apifilmesback-production.up.railway.app/filmes/listar";

  console.log("Buscando filmes: ", BACKEND_URL);

  const response = await fetch(BACKEND_URL);

  if (!response.ok) {
    throw new Error("A requisição para o backend falhou");
  }
  return response.json();
}

export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  duration: number;
  director: string;
  genre: string;
}

export default function Home() {
  const [textoDaBusca, setTextoDaBusca] = useState("");
  const movieListRef = useRef<HTMLDivElement>(null); // Tipando a ref

  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["filmes"],
    queryFn: fetchMovies,
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextoDaBusca(event.target.value);
  };

  const handleScrollButtonClick = () => {
    movieListRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (isLoading) {
    return (
      <p style={{ textAlign: "center", fontSize: "1.5rem", marginTop: "20vh" }}>
        Carregando filmes...
      </p>
    );
  }

  if (isError) {
    return (
      <p
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          marginTop: "20vh",
          color: "red",
        }}
      >
        Erro ao carregar os filmes.
      </p>
    );
  }

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
        <MovieList movies={movies || []} />
      </div>
    </div>
  );
}
