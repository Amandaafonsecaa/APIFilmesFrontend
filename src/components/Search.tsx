import React from 'react';
import lupa from '../assets/search.png';
import './Search.css';

interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
}

export default function Search({ value, onChange, onButtonClick }: SearchProps) {
  return (
    <div className="search-container">
      {/* Adicionamos a classe 'form-element' aqui */}
      <div className="form-element search-input-wrapper">
        <img src={lupa} alt="Ícone de busca" className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Digite o filme..."
          value={value}
          onChange={onChange}
        />
      </div>

      {/* E também adicionamos a classe 'form-element' aqui */}
      <button className="form-element btn" onClick={onButtonClick}>
        Ver todos os Filmes
      </button>
    </div>
  );
}