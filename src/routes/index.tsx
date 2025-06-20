/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Assets for the app
 */

import { createBrowserRouter } from "react-router";


/**
 * pages
 */
import HomePage from "@/pages/HomePage";
import RegisterPage from "@/pages/RegisterPage";
import LoginPage from "@/pages/LoginPage";
import AuthSyncPage from "@/pages/AuthSyncPage";

/**
 * layouts
 */
import RootLayout from "@/layouts/RootLayout";

/**
 * Types
 */
import type { RouteObject } from "react-router";

/**
 * Error Boundaries
 */

import RootErrorBoundary from "@/pages/RootErrorBoundary";
const rootRouteChildren: RouteObject[] = [
    {
        index: true,
        element: <HomePage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/auth-sync',
        element: <AuthSyncPage />,
    }
];

const router = createBrowserRouter([{
    path: '/',
    element: <RootLayout />,
    errorElement: <RootErrorBoundary />,
    children: rootRouteChildren,

}]);

export default router;