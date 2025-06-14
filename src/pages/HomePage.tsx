/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Assets for the app
 */

import { Link } from "react-router";

/**
 * Components
 */

import { Button } from "@/components/ui/button";
import Head from "@/components/Head";

const HomePage = () => {
  return (
    <>
      <Head title="notecloud - Study papers search with AI precision" />
      <section>
        <div className="">
          <div className="pt-32 pb-10 space-y-10">
            <h1 className="text-center text-2xl pt-10">
              Grab Past papers and notes <br /> with <span>[AI precision]</span>
            </h1>
            <div className="">
              <p className="text-center">Find study papers fast with our smart AI search.</p>
            <p className="text-center text-sm">Trusted by students of 
              <img src="/src/assets/RSU.png" alt="Rivers State University" className="h-6 inline-block ml-2" />
            </p>

            </div>
            
            <div className="flex justify-center mt-3">
              <Button asChild size='lg' className="rounded-full ">
              <Link to='/register'>Get Started</Link>
            </Button>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage;