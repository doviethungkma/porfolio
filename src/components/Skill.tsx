import { Icon } from "@iconify/react";
import { hardSkill, skills } from "../data/skill";
import { softSkill } from "./../data/skill";

type skillTypes = {
  icon: string;
  value: string;
};

const Skill = () => {
  return (
    <section className="skill w-full max-w-[990px] font-montserrat mt-[70px]">
      <h2 className="mb-[70px] text-black dark:text-white text-[30px] font-montserrat font-extrabold capitalize">
        Skill
      </h2>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {skills.map((item: skillTypes, index: number) => (
          <div
            className="w-full flex items-center justify-center h-[100px]"
            title={item.value}
            key={index}
          >
            <Icon icon={item.icon} className="text-[60px]" />
          </div>
        ))}
      </div>
      <div className="flex gap-8 flex-col lg:flex-row bg-white dark:bg-black mt-[70px] p-6">
        <div className="hardskill w-full">
          <h4 className="text-black dark:text-white text-[18px]">Hardskill</h4>
          <ul className="mt-4">
            {hardSkill.map((item: string, index: number) => (
              <li className="py-2">- {item}</li>
            ))}
          </ul>
        </div>
        <div className="softskill w-full">
          <h4 className="text-black dark:text-white text-[18px]">Softskill</h4>
          <ul className="mt-4">
            {softSkill.map((item: string, index: number) => (
              <li className="py-2">- {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skill;
