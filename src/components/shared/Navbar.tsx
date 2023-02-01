import { Icon } from "@iconify/react";

type NavbarPropsType = {
  toggleDarkMode?: () => void;
  toggleSideBar?: () => void;
};

const Navbar = (props: NavbarPropsType) => {
  const { toggleDarkMode, toggleSideBar } = props;
  return (
    <nav className="w-full h-[70px] p-4 flex items-center justify-between border-b border-b-slate-100 bg-white dark:bg-navbar">
      <h2 className="text-black dark:text-white">MYPORFOLIO</h2>
      <div className="flex gap-4 items-center">
        <div
          className="p-2 rounded-[50%] bg-gray-500 opacity-70 cursor-pointer transition-all hover:opacity-100"
          onClick={toggleDarkMode}
        >
          {/* <Icon icon="bx:sun" className="text-[20px] text-white" /> */}
          <Icon icon="bx:moon" className="text-[20px] text-white" />
        </div>
        <div
          className="p-2 rounded-[50%] bg-gray-500 opacity-70 cursor-pointer transition-all hover:opacity-100"
          onClick={toggleSideBar}
        >
          <Icon icon="bx:menu" className="text-[20px] text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
