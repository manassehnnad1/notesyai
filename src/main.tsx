/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Assets for the app
 */


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ClerkProvider } from '@clerk/clerk-react'

/**
 * CSS link
 */
import './index.css';

/**
 * Routes
 */

/**
 * Environment vars
 */


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const SIGN_IN_FORCE_REDIRECT_URL = import.meta.env.VITE_CLERK_SIGN_IN_FORCE_REDIRECT_URL;
const SIGN_UP_FORCE_REDIRECT_URL = import.meta.env.VITE_CLERK_SIGN_UP_FORCE_REDIRECT_URL;
if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Clerk publishable key!')
}


import router from '@/routes';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/auth-sync"
      signInForceRedirectUrl={SIGN_IN_FORCE_REDIRECT_URL}
      signUpForceRedirectUrl={SIGN_UP_FORCE_REDIRECT_URL}
    >
      <RouterProvider router={router} />

    </ClerkProvider>
    
  </StrictMode>,
)
