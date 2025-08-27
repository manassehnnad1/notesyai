/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Assets for the app
 */

/**
 * 
 * Node Modules
 */
import { Link } from "react-router";


import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";


const Header = () => {
  return (
  <header className="fixed top-0 left-0 w-full flex justify-center items-center py-4 px-2 bg-transparent z-50">
      <div className="w-full max-w-3xl flex items-center justify-between bg-gray-100 rounded-full px-8 py-3 shadow-sm">
        <Link to='/' className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="flex items-center gap-8">
          <Link to="/login" className="text-lg font-semibold text-black hover:text-gray-500">Log in</Link>
          <Button asChild className="rounded-full bg-black text-white text-lg font-bold px-6 py-6 shadow-none hover:bg-gray-900 transition-colors">
            <Link to="/register">Join for free</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;