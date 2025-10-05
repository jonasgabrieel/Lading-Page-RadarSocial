import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import Home from './pages/Home.tsx';
import QuemSomos from './pages/QuemSomos.tsx';
import Blog from './pages/Blog.tsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/quem-somos',
        element: <QuemSomos />,
      },
      {
        path: '/blog', element: <Blog /> 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);