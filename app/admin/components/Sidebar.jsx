"use client";
import { section } from "framer-motion/client";
import {auth} from '@/lib/firestore/firestore.jsx';
import {
  Box,
  Cat,
  Layers2,
  LayoutDashboard,
  LibraryBig,
  LogOut,
  ShieldCheck,
  ShoppingCart,
  Star,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";

const Sidebar = () => {
  const menuList = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: <LayoutDashboard className="h-4 w-4" />,
    },
    {
      name: "Products",
      link: "/admin/products",
      icon: <Box className="h-4 w-4" />,
    },
    {
      name: "Categories",
      link: "/admin/categories",
      icon: <Layers2 className="h-4 w-4" />,
    },
    {
      name: "Brands",
      link: "/admin/brands",
      icon: <Cat className="h-4 w-4" />,
    },
    {
      name: "Orders",
      link: "/admin/orders",
      icon: <ShoppingCart className="h-4 w-4" />,
    },
    {
      name: "Customers",
      link: "/admin/customers",
      icon: <User className="h-4 w-4" />,
    },
    {
      name: "Reviews",
      link: "/admin/reviews",
      icon: <Star className="h-4 w-4" />,
    },
    {
      name: "Collections",
      link: "/admin/collections",
      icon: <LibraryBig className="h-4 w-4" />,
    },
    {
      name: "Admins",
      link: "/admin/admins",
      icon: <ShieldCheck className="h-4 w-4" />,
    },
  ];
  return (
    <section className="flex flex-col gap-7 justify-between bg-white border-r px-5 py-3 h-screen overflow-hidden md:w-[260px]">
      <div className="flex justify-center py-4">
        <img className="h-8" src="/logo.png" alt="logo" />
      </div>
      <ul className="flex-1 flex flex-col gap-5">
        {menuList?.map((item, key) => {
          return <Tab item={item} key={key} />;
        })}
      </ul>
      <div className="flex justify-center w-full">
        <button onClick={async ()=>{
          try {
            await toast.promise(signOut(auth),{
              error:e=>e?.message,
              loading:"Loading...",
              success:"Successfully Logged out"
            })
          } catch (error) {
            toast.error(error?.message)
          }
        }} className="flex gap-2 items-center px-3 py-3 hover:bg-indigo-100 rounded-xl w-full justify-center ease-soft-spring duration-400 transition-all"><LogOut className="h-5 w-5"/>Logout</button>
      </div>
    </section>
  );
};

export default Sidebar;

function Tab({ item }) {
  const pathname = usePathname();
  const isSelected = pathname === item?.link;
  return (
    <Link href={item?.link} key={item?.name}>
      <li
        className={`flex gap-2 items-center py-3 px-2 rounded-xl font-semibold ease-soft-spring transition-all duration-300 ${isSelected ? "bg-[#879fff] text-white" : "bg-white"}`}
      >
        {item?.icon}
        {item?.name}
      </li>
    </Link>
  );
}
