/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Assets for the app
 */


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
