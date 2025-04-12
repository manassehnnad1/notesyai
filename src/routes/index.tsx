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

/**
 * layouts
 */
import RootLayout from "@/layouts/RootLayout";

/**
 * Types
 */
import type { RouteObject } from "react-router";

const rootRouteChildren: RouteObject[] = [
    {
        index: true,
        element: <HomePage />,
    },
];

const router = createBrowserRouter([{
    path: '/',
    element: <RootLayout />,
    children: rootRouteChildren,
}]);

export default router;