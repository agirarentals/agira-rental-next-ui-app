import { Button } from "@nextui-org/button";
import { main } from "framer-motion/client";
import Link from "next/link";
import React from "react";

const page = () => {
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
          <Button>Sign in with Google</Button>
        </div>
      </section>
    </main>
  );
};

export default page;
