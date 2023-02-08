import lg_img from "../../assets/images/lg_img.jpg";
import { shortInfor, studyInfor } from "./../../data/shortInfor";
import Education from "./Education";
import Experience from "./Experience";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section
      className="about w-full max-w-[990px] font-montserrat  "
      data-aos="fade-up"
    >
      <h2 className="mb-[70px] text-black dark:text-white text-[30px] font-montserrat font-extrabold capitalize">
        About me
      </h2>
      <img
        src={lg_img}
        alt="lg_img"
        className="w-full h-auto object-cover mb-9"
      />
      <div className="pb-5 border-b border-border-color">
        <h3 className="text-[22px] text-black dark:text-white font-bold bounceInDown">
          Do Viet Hung
        </h3>
        <p className="dark:text-txt-gray">Web Developer</p>
      </div>
      <div className="py-5 border-b border-border-color" data-aos="fade-up">
        <p className="dark:text-txt-gray">
          Hi, my name is Adriano Smith and I began using WordPress when it first
          began. I’ve spent most of my waking hours for the last ten years
          designing, programming and operating WordPress sites.
        </p>
        <br />
        <p className="dark:text-txt-gray">
          One of my specialties is taking an idea from scratch and creating a
          full-fledged platform. I go beyond to produce sites with a unique,
          outstanding, contemporary look-and-feel. With extensive knowledge of
          web mechanics, I’m able to optimize complex integrations to require
          little-to-no maintenance while running on their own for years.
        </p>
      </div>
      <div
        className="flex flex-col justify-between md:flex-row py-5 border-b border-border-color"
        data-aos="fade-up"
      >
        <ul>
          {shortInfor.map((item, index) => (
            <li key={index}>
              <span className="min-w-[100px] inline-block mr-2 text-black dark:text-white capitalize">
                {item.title}
              </span>
              <span className="dark:text-txt-gray">{item.value}</span>
            </li>
          ))}
        </ul>
        <ul>
          {studyInfor.map((item, index) => (
            <li key={index}>
              <span className="min-w-[100px] inline-block mr-2 text-black dark:text-white capitalize">
                {item.title}
              </span>
              <span className="dark:text-txt-gray">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="px-[40px] py-[11px] bg-black dark:bg-white mt-10 hover:opacity-80 transition-all text-white dark:text-black"
        data-aos="fade-up"
      >
        Download CV
      </button>
      <div className="flex flex-col justify-between py-5 border-b border-border-color bg-white dark:bg-black mt-[100px]">
        <Education />
        <Experience />
      </div>
    </section>
  );
};

export default About;
