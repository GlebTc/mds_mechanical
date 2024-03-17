import { FaChevronCircleDown } from "react-icons/fa";


const NextSectionScrollButton = ({ title, section }: { title: string, section: string }) => {
  return (
    <a
      href={`#${section}`}
      className={`absolute bottom-4 left-4 bg-red-600/70 px-4 py-1 text-white z-[30] flex justify-center gap-2 items-center rounded-md animate-bounce`}
    >
      <FaChevronCircleDown size={25} />
      <button className="font-bold text-lg">{title}</button>
    </a>
  );
};

export default NextSectionScrollButton;