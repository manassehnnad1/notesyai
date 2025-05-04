/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Assets for the app
 */

/**
 * 
 * Node Modules
 */

import Header from "@/components/Header";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
        <div className="">
            <Header />
        </div>
    </>
  );
};

export default RootLayout;