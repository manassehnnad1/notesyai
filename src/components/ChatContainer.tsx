/**
 * @copyright 2025 notesy.ai
 * @license Apache-2.0
 * @description Chat container component
 */


import { SendHorizonal } from "lucide-react"; 

const ChatGPTLanding = () => (
  <div className="ml-80 mt-16 min-h-screen flex flex-col items-center justify-center bg-white text-center">
    <div className="text-3xl font-bold mb-2">Introducing Notesy.ai</div>
    <div className="text-gray-600 mb-8 text-center max-w-md">
      Get Past exam papers for your university, summarise your bulky notes and take exam pop quizzes with notesy - all you have to do is ask
    </div>
    <div className="w-full max-w-xl flex items-center justify-center bg-gray-100 rounded-full px-4 py-2 shadow mb-8 mx-auto">
      <button className="mr-2 text-gray-500 text-xl font-bold">+</button>
      <input
        type="text"
        placeholder="Ask anything"
        className="flex-1 bg-transparent outline-none px-2 text-lg text-center"
      />
      <button className="mx-2 text-gray-500">
        <SendHorizonal size={24} />
      </button>
    </div>
    <div className=" ml-6 fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-100 rounded-xl px-6 py-3 flex items-center justify-center shadow">
      <span className="text-gray-700 font-semibold mr-4">Unlock more with Plus</span>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">Get Plus</button>
    </div>
  </div>
);

export default ChatGPTLanding;