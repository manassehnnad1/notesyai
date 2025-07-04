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

const AppLayout = () => {
  return (
    <SidebarProvider>
      <SidebarTrigger />
        <div>AppLayout</div>
      <AppSidebar  />
      <Outlet />
    </SidebarProvider>
  );
}

export default AppLayout;