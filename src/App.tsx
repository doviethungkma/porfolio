import Sidebar from "./components/shared/Sidebar";
import Navbar from "./components/shared/Navbar";
import { useEffect, useState } from "react";
import Content from "./components/shared/Content";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isShowSideBar, setIsShowSideBar] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const toggleSidebar = () => {
    setIsShowSideBar(!isShowSideBar);
  };

  return (
    <div className={`${isDarkMode && "dark"} app relative flex flex-col `}>
      {windowWidth < 1200 && (
        <Navbar toggleDarkMode={toggleDarkMode} toggleSideBar={toggleSidebar} />
      )}
      {(isShowSideBar || windowWidth >= 1200) && <Sidebar />}
      <Content />
    </div>
  );
}

export default App;
