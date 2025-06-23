/**
 * @copyright 2025 notesy.ai
 * @license Apache-2.0
 * @description Assets for the app
 */

/**
 * 
 * Node Modules
 */

import Header from "@/components/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "@/components/Footer";

import Logo from '@/components/Logo';
import { Loader2 } from "lucide-react";

const RootLayout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state == 'loading' && navigation.formData


  return (
    <>
        <div className="min-h-[100dvh] flex flex-col overflow-hidden">
            <Header />

            <main className="grow grid grid-cols-1  items-center pt-36 pb-16">

              <Outlet />
            </main>

            <Footer />

             { isLoading && ( 
              <div className="fixed top-0 left-0 z-50 h-[100dvh] bg-background flex flex-col justify-center items-center gap-5">
                  <img src='Logo' width={64} height={64} alt="Notesy.ai" />
                  <Loader2  className="text-muted-foreground animate-spin"/>
              </div>
            )}  
        </div>
    </>
  );
};

export default RootLayout;