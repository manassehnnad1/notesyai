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
import Footer from "@/components/Footer";

const RootLayout = () => {
  return (
    <>
        <div className="min-h-[100dvh] flex flex-col overflow-hidden">
            <Header />

            <main className="grow grid grid-cols-1  items-center pt-36 pb-16">

              <Outlet />
            </main>

            <Footer />
        </div>
    </>
  );
};

export default RootLayout;