/**
 * @copyright 2025 notesy.ai
 * @license Apache-2.0
 * @description Registration page for the app
 */

/**
 * 
 * Node Modules
 */
import { Outlet } from "react-router";

/**
 * 
 * Components
 */
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import AppSidebar from "@/components/AppSidebar";
import ChatContainer from "@/components/ChatContainer";


const AppLayout = () => {
  return (
    <>
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-10">
        <span className="text-2xl font-semibold text-white">ChatGPT</span>
      </div>
      <SidebarProvider>
        <SidebarTrigger />
        <AppSidebar  />
        <Outlet />
        <ChatContainer />
      </SidebarProvider>
    </>
  );
}

export default AppLayout;