"use client";
import menuItems from "@/utils/menuItems.json";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopMenu = () => {
  const pathname = usePathname();
  return (
    <ul className="flex gap-[1px] lg:gap-[10px] xl:gap-[20px]">
      {menuItems.map((item: any) => (
        <li
          key={item.title}
          className={`${
            pathname === item.href
              ? "rounded-md bg-gray-300 duration-300 px-2"
              : ""
          } rounded-md hover:bg-gray-300 duration-300 px-2`}
        >
          <Link href={item.href}>
            <p className="xl:text-lg">{item.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;
