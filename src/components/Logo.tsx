/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Assets for the app
 */

import { logo, pager } from "@/assets";



const Logo = () => {
  return (
    <div className="flex items-center gap-3 font-semibold text-lg">
      <img src={ logo}
      alt="notecloud"
      className="w-6 h-6" />
      notecloud
    </div>
  )
}

export default Logo;