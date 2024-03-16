// This component is used in DesktopMenu.tsx to render the dropdown menu items if the navMenuItem has a subMenuArray.  I am still not completely sure how it works, the notes from AI are on the bottom.
import Link from "next/link";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import menuItems from "@/utils/menuItems.json";

// interface for navMenuItems
interface NavMenuItem {
  path: string;
  name: string;
  title: string;
  subMenuArray?: {
    path: string;
    name: string;
    subTitle: string;
  }[];
}

interface DesktopDropdownProps {
  title: string;
  setSubMenuOpen: (isOpen: boolean) => void;
  subMenuOpen: boolean;
}

const DesktopDropdown: React.FC<DesktopDropdownProps> = ({
  title,
  subMenuOpen,
  setSubMenuOpen,
}) => {
  // find the navMenuItem that matches the title
  const matchedMenuItem = menuItems.find((item) => item.title === title);
  // the title prop already assumes that the navMenuItem has a subMenuArray and this variable decalres the array of sub menu items
  const subMenuArray = matchedMenuItem?.subMenuArray || [];

  return (
    <div>
      <button
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <div
          className={`mr-2 transition-transform ${
            subMenuOpen
              ? "duration-[500ms] rotate-0"
              : "duration-[500ms] rotate-180"
          }`}
        >
          {!subMenuOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
        </div>

        {title}
      </button>
      {subMenuOpen && (
        <div className="absolute top-[20px] lg:top-[28px] pt-2 left-0 bg-gray-400 rounded-b-md flex flex-col gap-2 w-[200px]">
          {subMenuArray.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              className="hover:bg-gray-300 h-full w-full pl-2"
            >
              {item.subTitle}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DesktopDropdown;
