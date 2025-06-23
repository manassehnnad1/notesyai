/**
 * @copyright 2025 notesy.ai
 * @license Apache-2.0
 * @description Registration page for the app
 */


import { SignIn } from "@clerk/clerk-react";

/**
 * 
 * Components 
 */
import Head from "@/components/Head";


const LoginPage = () => {
  return (
    <>
        <Head  title="Login to Notesy.ai"/>
        <section>
            <div className="container flex justify-center">
                <SignIn signUpUrl="/register" />
            </div>
        </section>
    </>
  )
}

export default LoginPage