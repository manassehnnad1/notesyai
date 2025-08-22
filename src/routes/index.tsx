/**
 * @copyright 2025 notesy.ai
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
import PricingPage from "@/pages/PricingPage";

/**
 * layouts
 */
import RootLayout from "@/layouts/RootLayout";
import AppLayout from "@/layouts/AppLayout";
import BlankLayout from "@/layouts/BlankLayout";

/**
 * Types
 */
import type { RouteObject } from "react-router";

/**
 * Error Boundaries
 */

import RootErrorBoundary from "@/pages/RootErrorBoundary";
import App from "@/App";
import RequestPage from "@/pages/RequestPage";
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
const appRouteChildren: RouteObject[]= [
    {
        path: '/app/requests',
        element: <RequestPage />,
    },
];

const router = createBrowserRouter([{
    path: '/',
    element: <RootLayout />,
    errorElement: <RootErrorBoundary />,
    children: rootRouteChildren,

},
{
    path:'/app',
    element: <AppLayout />,
    children: appRouteChildren,
},
{
    path: '/pricing',
    element: <BlankLayout />, 
    children: [
      {
        index: true,
        element: <PricingPage />
      }
    ]
  },
  {
    path: '/requests',
    element: <BlankLayout />, 
    children: [
      {
        index: true,
        element: <RequestPage />
      }
    ]
  },
]);

export default router;