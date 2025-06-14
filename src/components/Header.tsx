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
    <header className="fixed top-0 left-0 w-full ">
        <div className="container h-16 flex justify-between items-center p-4">
            <Link  to='/'>
                <Logo />
            </Link>

            <div className="flex items-center gap-6 ">
                <Button className="rounded-half" >
                  <Link to='/login'>Sign in</Link>

                </Button>
            </div>
        </div>
    </header>
  );
}

export default Header;