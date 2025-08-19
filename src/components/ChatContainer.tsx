/**
 * @copyright 2025 notesy.ai
 * @license Apache-2.0
 * @description Chat container component
 */

import { SendHorizonal, Plus, Paperclip, BookOpen, Image, Lightbulb, Search, MoreHorizontal } from "lucide-react";
import ModelSwitch from "./ModelSwitch";
import { Link } from "react-router";
import { useState, useRef, useEffect } from 'react';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  action: () => void;
}

const ChatGPTLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClickedOpen, setIsClickedOpen] = useState(false); // Track if menu was opened by click
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Menu items configuration
  const menuItems: MenuItem[] = [
    
    {
      icon: <Paperclip size={16} />,
      label: "Add photos & files",
      action: () => console.log("Add photos & files clicked")
    },
    {
      icon: <Lightbulb size={16} />,
      label: "Quizzes with notesyai",
      action: () => console.log("Study and learn clicked")
    },
 

  ];

  // Detect if device is mobile/tablet
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setIsClickedOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleButtonClick = () => {
    if (isMobile) {
      // Mobile behavior: toggle menu
      setIsMenuOpen(!isMenuOpen);
    } else {
      // Desktop behavior: click toggles "sticky" mode
      if (isClickedOpen) {
        // If already clicked open, close it
        setIsMenuOpen(false);
        setIsClickedOpen(false);
      } else {
        // If not clicked open, open it in sticky mode
        setIsMenuOpen(true);
        setIsClickedOpen(true);
      }
    }
  };

  const handleMenuItemClick = (action: () => void) => {
    action();
    setIsMenuOpen(false);
    setIsClickedOpen(false);
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsMenuOpen(true);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!isMobile && !isClickedOpen) {
      // Only close on mouse leave if not in "clicked open" mode
      setTimeout(() => {
        // Check if mouse is still within the container area
        const rect = menuRef.current?.getBoundingClientRect();
        const buttonRect = buttonRef.current?.getBoundingClientRect();
        
        if (rect && buttonRect) {
          const mouseX = e.clientX;
          const mouseY = e.clientY;
          
          const isInMenu = mouseX >= rect.left && mouseX <= rect.right && 
                          mouseY >= rect.top && mouseY <= rect.bottom;
          const isInButton = mouseX >= buttonRect.left && mouseX <= buttonRect.right && 
                            mouseY >= buttonRect.top && mouseY <= buttonRect.bottom;
          
          if (!isInMenu && !isInButton && !isClickedOpen) {
            setIsMenuOpen(false);
          }
        }
      }, 100);
    }
  };

  return (
    <>
      <ModelSwitch />
      <div className="ml-80 mt-16 min-h-screen flex flex-col items-center justify-center bg-white text-center">
        <div className="text-3xl font-bold mb-2">Introducing Notesy.ai</div>
        <div className="text-gray-600 mb-8 text-center max-w-md">
          Get Past exam papers for your university, summarise your bulky notes and take exam pop quizzes with notesy - <span className="italic">all you have to do is ask</span>
        </div>
        
        <div className="w-full max-w-xl flex items-center justify-center bg-gray-100 rounded-full px-4 py-0 shadow mb-8 mx-auto relative">
          {/* Add button with menu */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              ref={buttonRef}
              onClick={handleButtonClick}
              className={`mr-2 text-gray-500 text-xl font-bold p-2 rounded-full transition-colors duration-200 ${
                isClickedOpen ? '' : ''
              }`}
              aria-label="Add options"
              aria-expanded={isMenuOpen}
              aria-haspopup="true"
            >
              +
            </button>

            {/* Popup Menu */}
            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute z-50 bottom-full mb-2 left-0 w-64 bg-gray-100 text-white rounded-lg shadow-lg transition-all duration-200 ease-out"
              >
                <div className="py-2">
                  {menuItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleMenuItemClick(item.action)}
                      className="w-full rounded-sm  px-4 py-3 text-left hover:bg-gray-200 transition-colors duration-150 flex items-center space-x-3 group"
                    >
                      <span className="text-black group-hover:text-black transition-colors duration-150">
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium text-black">{item.label}</span>
                    </button>
                  ))}
                  
                  
                  
                </div>
              </div>
            )}
          </div>

          <input
            type="text"
            placeholder="Ask anything"
            className="flex-1 bg-transparent outline-none px-2 text-lg text-center"
          />
          <button className="mx-2 text-gray-500">
            <SendHorizonal size={24} />
          </button>
        </div>
        
        <div className="ml-6 fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-100 rounded-xl px-6 py-3 flex items-center justify-center shadow">
          <span className="text-gray-700 font-semibold mr-4">Unlock more with Plus</span>
          <Link to='/pricing'><button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">Get Plus</button></Link>
        </div>
      </div>
    </>
  );
};

export default ChatGPTLanding;