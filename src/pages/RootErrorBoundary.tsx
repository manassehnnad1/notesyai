/**
 * @copyright 2025 notesy.ai
 * @license Apache-2.0
 * @description Exception handling for the app
 */

import {  isRouteErrorResponse, useRouteError, Link } from "react-router";


/**
 * Components
 */
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RootErrorBoundary = () => {
    const error = useRouteError();
  return (
    <div className="min-h-[100dvh] flex flex-col">
        <Header />

        <div className="grow container flex flex-col justify-center items-center pt-32 pb-12">
            <h1 className="text-2xl  text-center ">
                { isRouteErrorResponse(error) ? '' : 'An unexpected error occurred' }
            </h1>

            <p className="text-center mt-2">
                { isRouteErrorResponse(error) ? '':'we\'re working on fixing this issue, please try again in a few minutes' }
            </p>
            <div className="">
                <Button asChild>
                    <Link to="/">Return to Home</Link>
                </Button>
            </div>
        </div>
        <figure className="mb-10 mx-auto">
            <img src="/src/assets/404.jpg"  className="w-96 sm:w-128 md:w-160 h-auto mx-auto" alt="404, page not found" />
        </figure>

        <Footer />
    </div>
  )
}

export default RootErrorBoundary