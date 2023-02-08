import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="education font-montserrat px-6" data-aos="zoom-in">
      <h4 className="text-[20px] font-bold text-black dark:text-white mb-12">
        Education
      </h4>
      <ul className="relative w-full">
        <li className="relative w-full pl-6">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="min-w-[180px] w-[180px] flex items-center justify-center h-10 bg-[rgba(0,0,0,0.05)] dark:bg-[rgba(255,255,255,0.065)] rounded-[50px] text-[#767676] dark:text-white">
              2013-2019
            </div>
            <div className="flex-grow">
              <p className="text-black dark:text-white text-[16px] font-semibold">
                Academy of cryptography techniques
              </p>
              <p>Engineer Degree</p>
              <p>2.71/4</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Education;
