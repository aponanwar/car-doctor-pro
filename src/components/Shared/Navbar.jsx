import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Navbar() {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div className="bg-base-100  text-slate-900 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start p-4">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <Image src="/assets/logo.svg" alt="Logo" width={100} height={50} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="btn btn-ghost normal-case text-sm"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-4">
            <MdOutlineShoppingCart className="text-2xl" />
            <CiSearch className="text-2xl" />
            <a className="btn btn-outline px-4 hover:bg-red-400">Appointment</a>
            <Link href="/login" className="btn btn-error">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
