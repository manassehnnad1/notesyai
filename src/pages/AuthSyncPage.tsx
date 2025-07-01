/**
 * @copyright 2025 notesy.ai
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
        if (localStorage.getItem('clerkUserId')){
            localStorage.removeItem('clerkUserId')
        }
      // If the user is not signed in, redirect to the login page
      navigate('/login');
      return;
    }
    if (isSignedIn) {
        localStorage.setItem('clerkUserId', userId);

        navigate('/app/');
    }
  }, [isSignedIn, isLoaded, userId]);
  return (
    <>
    </>
  )
}

export default AuthSyncPage


