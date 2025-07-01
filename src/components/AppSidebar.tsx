/**
 * @copyright 2025 notesy.ai
 * @license Apache-2.0
 * @description Registration page for the app
 */

import { Link } from "react-router";

import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from "@/components/ui/sidebar";

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link to="/notesyAI" >
          <span className="text-lg font-bold">Notesy</span>
        </Link>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar