/**
 * @copyright 2025 notesy.ai
 * @license Apache-2.0
 * @description Chat container component
 */

import { SendHorizonal, Paperclip, Lightbulb, History } from "lucide-react";
import ModelSwitch from "./ModelSwitch";
import { Link } from "react-router";
import { useState, useRef, useEffect } from 'react';

const ChatGPTLanding = () => {

  return (
    <>

      
      {/* <History className="text-muted-foreground h-5 w-5 " /> */}
      <div className="ml-80 mt-16 min-h-screen flex flex-col items-center justify-center bg-white text-center">
 
        
        <div className="ml-6 fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-100 rounded-xl px-6 py-3 flex items-center justify-center shadow">
          <span className="text-gray-700 font-semibold mr-4">Unlock more with Plus</span>
          <Link to='/pricing'><button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">Get Plus</button></Link>
        </div>
      </div>
    </>
  );
};

export default ChatGPTLanding;