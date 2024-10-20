"use client";
import { navItems, NavItemsProps } from "@/data/navItems";
import { AlignJustify, SearchCode, X } from "lucide-react";
import React, { useState } from "react";

const Mobile = () => {
  const [toggleMobileMenu, setMobilemenu] = useState(false);
  const [openSubOptions, setOpenSubOptions] = useState<number | null>(null);
  const handleMobileMenu = () => {
    setMobilemenu(!toggleMobileMenu);
  };

  const handleSubOptionToggle = (index: number) => {
    // Toggle the visibility of sub-options for the clicked main option
    if (openSubOptions === index) {
      setOpenSubOptions(null); // Close if already open
    } else {
      setOpenSubOptions(index); // Open the clicked option's sub-options
    }
  };
  return (
    <div className="block md:hidden ">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <button className="block md:hidden" onClick={handleMobileMenu}>
            {toggleMobileMenu ? <X /> : <AlignJustify />}
          </button>
          <h3 className="text-white">Sunny</h3>
        </div>
        <div>
          <SearchCode />
        </div>
      </div>

      <div
        className={`fixed top-14 left-0 h-full bg-slate-700 transition-transform transform ${
          toggleMobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "250px", zIndex: 10 }}
      >
        <div className="absolute top-2 right-2">
          <X
            size={24}
            className="cursor-pointer"
            onClick={() => setMobilemenu(false)}
          />
        </div>
        <div className="p-4">
          <h4 className="text-white text-lg">Menu</h4>
          <ul className="flex flex-col mt-4">
            {navItems.map((item: NavItemsProps, index: number) => (
              <li
                key={index}
                className="py-2 text-white hover:bg-slate-600 px-2 rounded"
              >
                <div
                  onClick={() => handleSubOptionToggle(index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <p>{item.option}</p>
                  {/* Show icon for expandable items */}
                  {item.subOption && item.subOption.length > 0 && (
                    <span>{openSubOptions === index ? "-" : "+"}</span>
                  )}
                </div>

                {/* Render sub-options if they exist */}
                {openSubOptions === index &&
                  item.subOption &&
                  item.subOption.length > 0 && (
                    <ul className="ml-4 mt-2">
                      {item.subOption.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="py-1 text-gray-200 hover:bg-slate-500 px-2 rounded cursor-pointer"
                        >
                          {subItem.name}
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
