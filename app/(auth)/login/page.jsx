"use client"
import { Button } from "@nextui-org/button";
import { main } from "framer-motion/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../../../lib/firestore/firestore";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useAuth } from "../../../contexts/AuthContext";
import { useRouter } from "next/navigation";

const page = () => {
  const {user}=useAuth();
  const router=useRouter();
  useEffect(()=>{
    if(user){
      router.push("/dashboard")
    }
  },[user])
  return (
    <main className="w-full flex justify-center items-center p-24 min-h-screen bg-gray-300">
      <section className="flex flex-col gap-3">
        <div className="flex justify-center">
          <img className="h-12" src="/logo.png" alt="logo" />
        </div>
        <div className="flex flex-col gap-3 bg-white p-10 rounded-xl min-w-[340px]">
          <h1 className="font-bold text-lg">Login with E-mail</h1>
          <form action="" className="flex flex-col gap-3">
            <input
              type="email"
              name="user-email"
              id="user-email"
              placeholder="Enter your email"
              className="px-3 py-3 rounded border focus:outline-none w-full"
            />
            <input
              type="password"
              name="user-password"
              id="user-password"
              placeholder="Enter your password"
              className="px-3 py-3 rounded border focus:outline-none w-full"
            />
            <Button color="primary">Login</Button>
          </form>
            <div className="flex justify-between">
                <Link href={'/sign-up'}><button className="text-xs text-blue-700">New? Create account</button></Link>
                <Link href={'/forgot-password'}><button className="text-xs text-blue-700">Forgot password</button></Link>
            </div>
          <hr />
          <SignInWithGoogleComponent/>
        </div>
      </section>
    </main>
  );
};

export default page;
function SignInWithGoogleComponent(){
  const [isLoading,setIsLoading]=useState(false);
  const handleLogin=async ()=>{
    setIsLoading(true);
    try {
      const user=await signInWithPopup(auth,new GoogleAuthProvider())
    } catch (error) {
      toast.error(error?.message);
    }
    setIsLoading(false);
  }
return <Button isLoading={isLoading} isDisabled={isLoading} onPress={handleLogin}>Sign in with Google</Button>  
}