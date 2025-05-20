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
    <header className="">
        <div className="">
            <Link  to='/'>
                <Logo />
            </Link>

            <div className="">
                <Button className="rounded-full" >
                  <Link to='/login'>Sign in</Link>

                </Button>
            </div>
        </div>
    </header>
  );
}

export default Header;