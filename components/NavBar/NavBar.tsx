import React from "react";
import MobileNavBar from "./MobileNavBar";
import { LinksType } from "@/types";
import Link from "next/link";
import Image from "next/image";

const links: LinksType[] = [
  {
    name: "Categories",
    value: "categories",
    id: 1,
  },
  {
    name: "Sale",
    value: "sale",
    id: 2,
  },
  {
    name: "Clearance",
    value: "clearance",
    id: 3,
  },
  {
    name: "New Stock",
    value: "new-stock",
    id: 4,
  },
  {
    name: "Trending",
    value: "trending",
    id: 5,
  },
];

const NavBar = () => {
  return (
    <nav className="sticky top-0 flex h-[100px] flex-col justify-center bg-white px-10 shadow-md">
      <div className="flex justify-end space-x-4 text-xs text-[#333333] ">
        <p>Help</p>
        <p>Orders & Returns</p>
        <p>Hi, Suraj</p>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-[32px] font-bold">ECOMMERCE</h1>
        <div className=" space-x-8 font-semibold">
          {links.map((link) => {
            return (
              <Link href="#" key={link.id}>
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex">
          <Image src="../icons/search.svg" alt="search" width={20} height={20} />
          <Image src="../icons/cart.svg" alt="search" width={20} height={20} />
        </div>
      </div>
      <MobileNavBar />
    </nav>
  );
};

export default NavBar;
