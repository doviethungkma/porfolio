import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="education font-montserrat px-6 mt-10 w-full"
      data-aos="zoom-in"
    >
      <h4 className="text-[20px] font-bold text-black dark:text-white mb-12">
        Experience
      </h4>
      <ul className="relative w-full">
        <li className="relative w-full pl-6">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="min-w-[180px] w-[180px] flex items-center justify-center h-10 bg-[rgba(0,0,0,0.05)] dark:bg-[rgba(255,255,255,0.065)] rounded-[50px] text-[#767676] dark:text-white">
              09/2017 - 04/2019
            </div>
            <div>
              <p className="text-black dark:text-white text-[16px] font-semibold">
                Viettel Business Solutions Corporation
              </p>
              <p>Fulltime internship information security</p>
              <p className="mt-4">
                - Perform information security review, assessment/testing of
                company's project
              </p>
              <p>
                - Support, troubleshoot and handle information security
                incidents.
              </p>
              <p>- Security vulnerability research.</p>
            </div>
          </div>
        </li>
        <li className="relative w-full pl-6 mt-4">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="min-w-[180px] w-[180px] flex items-center justify-center h-10 bg-[rgba(0,0,0,0.05)] dark:bg-[rgba(255,255,255,0.065)] rounded-[50px] text-[#767676] dark:text-white">
              11/2020 - 04/2021
            </div>
            <div>
              <p className="text-black dark:text-white text-[16px] font-semibold">
                Viettel Son La
              </p>
              <p>Sales staff for corporate customers</p>
              <p className="mt-4">
                - Selling and renewing information technology products for
                educational institutions, healthcare organizations, and
                businesses.
              </p>
              <p>
                - Supporting, user manual, and resolving issues related to the
                electronic tax system, social insurance, and electronic
                invoicing.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
