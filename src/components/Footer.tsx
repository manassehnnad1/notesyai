/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Footer
 */

import { Separator } from "@/components/ui/separator";
import { SOCIAL_LINKS } from "@/constants/index";


const Footer = () => {
  return (
    <footer className="p-4 pb-0">
      <div className="container min-h-16 py-4 bg-black border border-b-0 rounded-t-xl flex flex-col gap-3 items-center lg:flex-row lg:justify-between">
        <p className="text-center text-sm text-white">&copy; 2025 notesy.ai</p>

        <ul className="flex flex-wrap items-center">
          {SOCIAL_LINKS.map(({href, label}, index)=> (
            <li key={ index }className="flex items-center">
              <a href={ href } className="text-sm text-muted-foreground hover:text-white" target="_blank">{ label }</a>

              { index !== SOCIAL_LINKS.length -1 && (
                <Separator orientation="vertical" className="h-3 mx-3"/>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;