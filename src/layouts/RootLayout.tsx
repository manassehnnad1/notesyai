/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Assets for the app
 */

/**
 * 
 * Node Modules
 */
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
        <div>RootLayout</div>
        <Outlet />
    </>
  );
};

export default RootLayout;