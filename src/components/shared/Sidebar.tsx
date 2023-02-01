import { useState } from "react";
import { Icon } from "@iconify/react";

type MenuItemTypes = {
  id: number;
  name: string;
  icon?: string;
};

const menuList: MenuItemTypes[] = [
  {
    id: 1,
    name: "Home",
    icon: "bx:home",
  },
  {
    id: 2,
    name: "About",
    icon: "bx:user",
  },
  {
    id: 3,
    name: "Experience",
    icon: "bx:file",
  },
  {
    id: 4,
    name: "Skill",
    icon: "bx:brain",
  },
  {
    id: 5,
    name: "Project",
    icon: "bx:folder-open",
  },
  {
    id: 6,
    name: "Contact",
    icon: "bx:envelope",
  },
];

const Sidebar = () => {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <aside className="w-1/2 h-screen fixed bg-white dark:bg-black transition-all border-r border-side-border dark:border-dark-black">
      <div className="logo h-[70px] w-full flex items-center justify-start p-4">
        <h2 className="text-black dark:text-white ">MYPORFOLIO</h2>
      </div>
      <div className="h-full w-full flex flex-col justify-center p-4">
        <ul>
          {menuList.map((item: MenuItemTypes, index: number) => (
            <li
              key={item.id}
              className={`${
                activeId === item.id && "text-black dark:text-white"
              } py-2 flex items-center gap-2`}
            >
              <Icon icon={item.icon as string} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
