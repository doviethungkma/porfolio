import Sidebar from "./components/shared/Sidebar";
import Main from "./components/shared/Main";
import Navbar from "./components/shared/Navbar";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isShowSideBar, setIsShowSideBar] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const toggleSidebar = () => {
    setIsShowSideBar(!isShowSideBar);
  };

  return (
    <div className={`${isDarkMode && "dark"} app relative flex flex-col `}>
      <Navbar toggleDarkMode={toggleDarkMode} toggleSideBar={toggleSidebar} />
      {isShowSideBar && <Sidebar />}
      <Main />
    </div>
  );
}

export default App;
