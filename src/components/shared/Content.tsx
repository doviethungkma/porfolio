import React from "react";
import Hero from "./Hero";

const Content = () => {
  return (
    <div className="w-full h-full min-h-screen bg-light-bg dark:bg-[#111] flex flex-col items-center py-[70px] xl:absolute xl:left-[300px] xl:w-[calc(100%-300px)]">
      <Hero />
    </div>
  );
};

export default Content;
