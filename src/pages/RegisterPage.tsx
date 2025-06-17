/**
 * @copyright 2025 notecloud
 * @license Apache-2.0
 * @description Registration page for the app
 */

import { SignUp } from "@clerk/clerk-react";

/**
 * 
 * Components 
 */
import Head from "@/components/Head";

const RegisterPage = () => {
  return (
    <>
        <Head  title="Create an Account"/>
        <section>
            <div className="container flex justify-center">
                <SignUp signInUrl="/login" />
            </div>
        </section>
    </>
  )
}

export default RegisterPage

