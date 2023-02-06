import React from "react";
import Skill from "../Skill";
import About from "./About";
import Hero from "./Hero";

const Content = () => {
  return (
    <div className="w-full h-auto px-4 bg-light-bg dark:bg-[#111] flex flex-col items-center py-[70px] xl:absolute xl:left-[300px] xl:w-[calc(100%-300px)]">
      <Hero />
      <About />
      <Skill />
    </div>
  );
};

export default Content;
