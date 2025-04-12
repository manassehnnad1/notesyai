/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Assets for the app
 */


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

/**
 * CSS link
 */
import './index.css';

/**
 * Routes
 */
import router from '@/routes';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
