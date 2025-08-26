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
import {Bot, CloudDownload, MoveUpRight} from 'lucide-react';





const HomePage = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-start pt-24 px-2 ">
      <Head title="Get study papers in seconds." />
      <h1 className="text-5xl md:text-7xl font-mono font-light text-black text-center leading-tight">
        Get <span className="relative inline-block"><span className="bg-blue-100 px-2 rounded select-none">past questions </span></span><br /> & notes in seconds<span className="text-black">.</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-10 mb-10">
        <div className="rounded-full border border-gray-300 bg-white text-black font-medium px-5 py-2 shadow-none flex items-center gap-2 text-sm select-none">
          <Bot className="w-5 h-5 text-gray-500" />
          AI-assisted search
        </div>
        <div className="rounded-full border border-gray-300 bg-white text-black font-medium px-5 py-2 shadow-none flex items-center gap-2 text-sm select-none">
          <CloudDownload className="w-5 h-5 text-gray-500" />
          Download hyperlinks
        </div>
      </div>

      <div className="flex items-center justify-center mt-0">
        <Button variant="outline" className="rounded-full border-2 border-gray-200 bg-white text-black font-semibold px-7 py-2 shadow-none font-mono">
          <Link to="/register">Get Started </Link><MoveUpRight className="w-4 h-4 ml-0" />
        </Button>
        
      </div>

    </main>
  );
};

export default HomePage;