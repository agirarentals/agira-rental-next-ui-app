"use client";

import { main } from "framer-motion/client";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AdminLayout({ children }) {
  return (
    <main className="flex">
      <Sidebar />
      <section className="flex-1 flex flex-col">
        <Header />
        <section className="flex-1 bg-gray-100">{children}</section>
      </section>
    </main>
  );
}
