/**
 * @copyright 2025 notesy.ai
 * @license Apache-2.0
 * @description page for upgrading tier
 */

/**
 * 
 * imports
 */

import ModelSwitch from "@/components/ModelSwitch"

const PricingPage = () => {
  return (
    <>
    <ModelSwitch />
    <div className="flex flex-col  items-center">
        {/* <h1 className="mt-36 text-2xl font-medium text-muted-foreground">Get Plus</h1> */}
        <div className="flex mt-72 gap-7">
            <div className="border border-black-100 rounded-2xl w-96 h-72 "></div>
            <div className="border border-black-100 rounded-2xl w-96 h-72 ">
                <h1 className="font-bold text-5xl ml-9 mt-9">₦ 2,500<br />
                    <span className="font-light text-muted-foreground text-sm">for lifetime access</span></h1>
                <button className="text-white bg-black rounded-sm  w-64 ml-14 px-5 py-2 text-base hover:bg-gray-200 hover:text-black transition delay-75">Get Plus</button>
            </div>
        </div>
        

    </div>
    </>
  )
}

export default PricingPage