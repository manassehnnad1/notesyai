/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Sync page after sign up
 */

import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";


const AuthSyncPage = () => {
  const { isSignedIn, isLoaded, userId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded) return;

    if (!isSignedIn) {
      // If the user is not signed in, redirect to the login page
      navigate('/login');
      return;
    }
    if (isSignedIn) {
        localStorage.setItem('clerkUserId', userId);

        navigate('/app/today');
    }
  }, [isSignedIn, isLoaded, userId]);
  return (
    <div>AuthSyncPage</div>
  )
}

export default AuthSyncPage


