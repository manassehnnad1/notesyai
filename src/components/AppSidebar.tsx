/**
 * @copyright 2025 notesy.ai
 * @license Apache-2.0
 * @description Registration page for the app
 */

import { Link } from "react-router";

import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuBadge } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/clerk-react";

/**
 * Assets
 */

import {  MessageCirclePlus } from "lucide-react";
import {SIDEBAR_LINKS} from "@/constants";

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="mb-16 ">
        <Link to="/notesyAI" >
          <span className="text-lg-center font-special font-bold">notesy.ai</span>
        </Link>
       
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <MessageCirclePlus /> New chat
                </SidebarMenuButton>
              </SidebarMenuItem>

              {SIDEBAR_LINKS.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    
                    <Link to={item.href}>
                      <item.icon /> <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>0</SidebarMenuBadge>
                </SidebarMenuItem>
              ))}

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
      <SidebarFooter>
         <UserButton showName appearance={{
          elements: {
            rootBox: "w-full",
            userButtonTrigger:"!shadow-none w-full justify-start p-2 rounded-md hover:bg-sidebar-accent",
            userButtonBox: "flex-row-reverse shadow-none gap-2",
            userButtonOuterIdentifier: "ps-0",
            popoverBox: "pointer-events-auto"
          }

         }} />
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar;