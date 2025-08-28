/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Footer
 */


import { SOCIAL_LINKS } from "@/constants/index";
import Logo from "./Logo";

import { Link } from "react-router";
import { Separator } from "@radix-ui/react-separator";



const Footer = () => {
  return (
    <footer className=" text-gray-300 pt-12 pb-4 px-4 font-mono">
      <div className=" container bg-black min-h-52 items-center py-8 w-full lg:justify-between rounded-xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Logo and description */}
          <div className="flex-1 min-w-[200px] mb-8 md:mb-0 ml-6">
            <div className="flex items-center gap-2 mb-6">
              <Logo />
              
            </div>
            <p className="text-sm text-gray-400 max-w-xs">Find past questions and notes with our AI-powered search to aid your studies and exam preps across all Nigerian universities.</p>
          </div>
          {/* Columns */}
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-8 ">
            <div className="ml-auto">
              <h4 className="font-semibold mb-2 text-white">Product</h4>
              <ul className="space-y-1">
                <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
                <li><Link to="/features" className="hover:underline">FAQ</Link></li>
                <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-white">Resources</h4>
              <ul className="space-y-1">
                <li><Link to="/support" className="hover:underline">Support</Link></li>
                {/* <li><Link to="/faq" className="hover:underline">FAQ</Link></li> */}
                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              
                
             
            </div>
            <div>
             
            </div>
          </div>
        </div>
        <Separator className="w-full bg-gray-300 opacity-40 my-8 " />
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2 ml-6">
          <span>Copyright &copy; notesyai {new Date().getFullYear()}.</span>
          <div className="flex gap-6 mr-52">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;