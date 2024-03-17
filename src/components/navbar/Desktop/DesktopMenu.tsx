"use client";
import menuItems from "@/utils/constants/menuItems.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import constants from "@/utils/constants/constans.json";
import DesktopDropdown from "./DesktopDropdown";

const DesktopMenu = () => {
  const [subMenuOpen, setSubMenuOpen] = useState<number | null>(null);

  const pathname = usePathname();
  return (
    <ul className="flex gap-[1px] lg:gap-[10px] xl:gap-[20px]">
      {menuItems.map((item: any, index: number) => {
        if (item.subMenuArray) {
          return (
            <div
              key={item.title}
              className="DROPDOWN_TITLE relative hover:bg-gray-300 px-2 rounded-lg flex justify-between items-center"
              //On Mouse Enter the div pulls the index of a particular array item and sets subMenuOpen to that index.
              onMouseEnter={() => setSubMenuOpen(index)}
              //On Mouse Leave, the div sets the setSubMenuOpen to null or falsy value.
              onMouseLeave={() => setSubMenuOpen(null)}
            >
              <DesktopDropdown
                title={item.title}
                subMenuOpen={subMenuOpen === index}
                setSubMenuOpen={() => setSubMenuOpen(index)}
              />
            </div>
          );
        } else {
          return (
            <li
              key={item.title}
              className={`${
                pathname === item.href
                  ? "rounded-md bg-gray-300 duration-300 px-2"
                  : ""
              } rounded-md hover:bg-gray-300 duration-300 px-2`}
            >
              <Link
                title={`Navigate to ${item.title} page | ${constants.aria_label}`}
                aria-label={`Navigate to ${item.title} page | ${constants.aria_label}`}
                href={item.href}
              >
                <p>{item.title}</p>
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default DesktopMenu;
