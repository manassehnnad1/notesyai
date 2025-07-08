/**
 * @copyright 2025 notesy.ai
 * @license Apache-2.0
 * @description Assets for the app
 */

import { Link } from "react-router";

/**
 * Components
 */

import { Button } from "@/components/ui/button";
import Head from "@/components/Head";
import { ArrowRight } from "lucide-react";
import TrustedBy from "@/components/TrustedBy";

const HomePage = () => {
  return (
    <>
      <Head title="Notesy.ai - Study papers search with AI precision" />
      <section>
        <div className="container !px-8 grid grid-cols-1 gap-8 items-center mx-auto">
          <div className="pt-32 pb-10 space-y-4 md:space-y-7 lg:space-y-9">
            <h1 className="text-center text-2xl pt-10  md:text-2xl lg:text-3xl font-light text-gray-700">
               Past papers and notes <br /> with <span className=" font-light text-gray-500">[AI precision]</span>
            </h1>
            <div className="">
              <p className="text-center md:text-lg lg:text-xl font-light text-gray-700">Find study papers fast with our smart AI search.</p>
            <div className=" mt-2 flex justify-center mr-16">
              <TrustedBy />
            </div>
            </div>
            
            <div className="flex justify-center mt-3 ">
              <Button asChild size='lg' className="relative overflow-hidden rounded-half group after:bg-white px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4">
              <Link to='/register'className="relative flex items-center gap-1 z-10 transition-colors duration-300 group-hover:text-black group-hover:text-white">
              <span className="font-light">Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-colors duration-300  transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage;