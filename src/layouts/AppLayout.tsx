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
import ChatContainer from "@/components/chatContainer";

const AppLayout = () => {
  return (
    <>
      <SidebarProvider>
        <SidebarTrigger />
        <AppSidebar  />
        <Outlet />
      </SidebarProvider>
      <ChatContainer />
    </>
  );
}

export default AppLayout;