import menuItems from "@/utils/menuItems.json";

const QuickLinks = () => {
  return (
    <div className="QUICK_LINKS_CONTAINER w-full p-4 flex flex-col justify-start ">
      <h2 className="text-2xl font-bold border-b-4 border-red-600">
        Quick Links
      </h2>
      <ul className="flex flex-col gap-2 pt-2">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="text-lg font-bold hover:text-red-600/70 cursor-pointer"
          >
            <a href={`${item.href}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
