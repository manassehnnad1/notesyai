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
import { Check } from 'lucide-react';
import { Separator } from "@/components/ui/separator"

const PricingPage = () => {
  return (
    <>
    <ModelSwitch  />
    <div className="flex gap-6 justify-center items-stretch mt-52">
      {/* Basic Plan */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 w-80 flex flex-col">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Free
          </h3>
          <div className="flex items-baseline mb-4">
            <span className="text-4xl font-bold text-gray-900">
              ₦0
            </span>
            <span className="text-sm text-gray-600 ml-2">
              per user
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Basic features 
          </p>
          
        </div>
         <Separator className="h-px w-full bg-gray-300 my-4" />

        {/* <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200 mb-6">
          Get started
        </button> */}

        <div className="flex-grow">
          <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-3">
            FEATURES
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            Everything in our free plan plus...
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                Access to basic features
              </span>
            </li>
            <li className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                Basic reporting and analytics
              </span>
            </li>
            <li className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                Up to 10 individual users
              </span>
            </li>
            <li className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                20GB individual data each user
              </span>
            </li>
          </ul>
        </div>
      </div>

     

      {/* Business Plan */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 w-80 flex flex-col relative">
        <div className="absolute -top-3 right-4">
          <span className="bg-gray-900 text-white text-xs font-medium px-3 py-1 rounded-full">
            Popular
          </span>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Plus
          </h3>
          <div className="flex items-baseline mb-4">
            <span className="text-4xl font-bold text-gray-900">
              ₦500
            </span>
            <span className="text-sm text-gray-600 ml-2">
              per month
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Plus- with all AI features.
          </p>
        </div>

        <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200 mb-6">
          Get plus
        </button>

        <div className="flex-grow">
          <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-3">
            FEATURES
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            Everything in Basic plus...
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                200+ integrations
              </span>
            </li>
            <li className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                Advanced reporting and analytics
              </span>
            </li>
            <li className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                Up to 20 individual users
              </span>
            </li>
            <li className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-700">
                40GB individual data each user
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default PricingPage