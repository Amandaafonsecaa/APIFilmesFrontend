// src/main.tsx ou src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Seu componente App principal
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';

// Crie o "cliente" que vai gerenciar os dados
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Envolva o App com o Provedor */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);