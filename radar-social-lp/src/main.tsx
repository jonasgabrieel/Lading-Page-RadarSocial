// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import Home from './pages/Home.tsx';
import QuemSomos from './pages/QuemSomos.tsx';
import './index.css';

// Aqui criamos o mapa de navegação
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // O App será o layout principal (com a Navbar)
    children: [
      {
        path: '/', // Rota para a página inicial
        element: <Home />,
      },
      {
        path: '/quem-somos', // Rota para a página "Quem Somos"
        element: <QuemSomos />,
      },
      // Futuramente, você pode adicionar outras rotas aqui:
      // { path: '/blog', element: <Blog /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);