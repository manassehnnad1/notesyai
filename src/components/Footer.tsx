/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Footer
 */


import { SOCIAL_LINKS } from "@/constants/index";
import Logo from "./Logo";

import { Link } from "react-router";


const Footer = () => {
  return (
    <footer className="p-4 pb-0 font-mono">
      <div className="container min-h-52 py-4 bg-black border border-b-0  flex flex-col gap-3 items-center lg:flex-row lg:justify-between rounded-xl">
  <div className="">
          <div className=" items-start text-gray-300 mt-10 ml-12">
          <Logo /> </div>
        <p className="mt-20 text-lg  font-light text-gray-300 ml-12">&copy; {new Date().getFullYear()} notesyai. All rights reserved.</p>
  </div>
        

        <div className="">
          <div className="mb-4 ml-0 items-end">
          <ul className="grid grid-cols-2 gap-y-4">
          {SOCIAL_LINKS.map(({href, label}, index)=> (
            <li key={ index }className="flex items-center mr-0">
              <a href={ href } className="text-lg mr-8 text-gray-300" target="_blank">{ label }</a>

              {/* { index !== SOCIAL_LINKS.length -1 && (
                <Separator orientation="vertical" className="h-3 mx-3"/>
              )} */}
            </li>
          ))}
        </ul>
        </div>
        <div className="flex gap-8 mt-12 justify-end mr-8 ">
          <Link to='/'><p className=" text-sm  font-light text-gray-300">Privacy policy</p></Link>
        <Link to='/'><p className=" text-sm  font-light text-gray-300 mr-4">Terms</p></Link>
        </div>
      </div>
        </div>
    </footer>
  );
};

export default Footer;