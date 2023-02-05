import { TypeAnimation } from "react-type-animation";
import Social from "./Social";

const typeSequences = [
  "Hi, My name is Hung", // Types 'One'
  1000, // Waits 1s
  "I'm a web developer", // Deletes 'One' and types 'Two'
  2000, // Waits 2s
  "Welcome to my porfolio",
  2000, // Types 'Three' without deleting 'Two'
];

const Hero = () => {
  return (
    <section className="hero w-full flex justify-center">
      <div className="max-w-[450px] lg:max-w-[830px] min-h-screen xl:h-screen flex flex-col lg:flex-row lg:gap-[80px] items-center gap-4 ">
        <div className="w-[200px] h-[200px] rounded-avatar bg-avatar bg-center bg-cover shadow-avatar animate-avatar md:w-[300px] md:h-[300px]"></div>
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <h1 className="text-black text-[35px] font-montserrat font-extrabold dark:text-white">
            DO VIET HUNG
          </h1>
          <TypeAnimation
            sequence={typeSequences}
            wrapper="h2"
            speed={40}
            deletionSpeed={80}
            cursor={true}
            repeat={Infinity}
            className="text-black text-[24px] font-montserrat dark:text-white"
          />
          <p className="text-center font-medium font-montserrat lg:text-left">
            Creative Photographer based in New York and happy to travel all over
            Europe to capture photos.
          </p>
          <Social />
        </div>
      </div>
    </section>
  );
};

export default Hero;
