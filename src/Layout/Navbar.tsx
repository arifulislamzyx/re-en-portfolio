"use client";
import React, { useState } from "react";
import { navItems, NavItemsProps } from "@/data/navItems";

import Mobile from "./Mobile";
import Link from "next/link";
import { SearchCode } from "lucide-react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleLinkClick = () => {
    setOpenDropdown(null);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="bg-slate-700 py-4">
      <div className=" relative container hidden md:flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <h3 className="text-white">Sunny</h3>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center justify-evenly gap-4">
            {navItems.map((item: NavItemsProps, index: number) => (
              <div key={index} className="relative group">
                <div
                  className="flex items-center gap-2 text-white cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  <Link href={item.slug || "#"}>{item.option}</Link>
                  {item.icon && <span>{item.icon}</span>}
                </div>

                {openDropdown === index &&
                  item.subOption &&
                  item.subOption.length > 0 && (
                    <div className="absolute bg-white p-4 shadow-lg rounded top-full mt-2 left-0 z-50">
                      {item.subOption.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.slug}
                          className="py-1 px-3 block text-black hover:bg-gray-200 cursor-pointer"
                          onClick={handleLinkClick}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>

          <div className="">
            <div className="text-white cursor-pointer" onClick={toggleSearch}>
              <SearchCode />
            </div>

            {searchOpen && (
              <div className="absolute flex items-center justify-center gap-5 bg-white px-10 py-2 shadow-lg rounded -top-3 right-11  z-50 transition-all duration-300">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded">
                  Search
                </button>
                <button
                  className="mt-2 text-red-500 cursor-pointer"
                  onClick={toggleSearch}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Mobile />
    </div>
  );
};

export default Navbar;
