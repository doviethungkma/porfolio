import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { projectTypes } from "../../types/project";
import { project } from "./../../data/project";
import ProjectDetail from "./ProjectDetail/ProjectDetail";

const Project = () => {
  const [isShowProjectModal, setIsShowProjectModal] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<projectTypes>();

  const onCloseModal = () => {
    setIsShowProjectModal(false);
    setActiveItem({} as projectTypes);
  };

  const onShowModal = (item: projectTypes) => {
    setIsShowProjectModal(true);
    setActiveItem(item);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="skill w-full max-w-[990px] font-montserrat mt-[70px]">
      <h2 className="mb-[70px] text-black dark:text-white text-[30px] font-montserrat font-extrabold capitalize">
        Project
      </h2>
      <div className="w-full flex flex-col gap-8">
        {project.map((item: projectTypes, index: number) => (
          <>
            <div
              className={`w-full flex flex-col md:flex-row bg-white dark:bg-black ${
                index % 2 === 1 && "md:flex-row-reverse"
              }`}
              key={index}
              data-aos="zoom-in"
            >
              <img
                src={item?.overview?.thumb}
                alt=""
                className="w-full md:w-1/2 max-w-full object-cover"
              />
              <div className="w-full p-4">
                <h4 className="text-[20px] font-bold text-black dark:text-white">
                  {item.overview?.name}
                </h4>
                <h5 className="text-black dark:text-white">
                  {item.overview?.role}
                </h5>
                <p>{item.overview?.short_description}</p>
                <ul>
                  {item.overview?.tech.map((tech: string, index: number) => (
                    <li key={index}>- {tech}</li>
                  ))}
                </ul>
                {item.isClickable && (
                  <button
                    className="px-[40px] py-[4px] bg-black dark:bg-white mt-10 hover:opacity-80 transition-all text-white dark:text-black"
                    onClick={() => onShowModal(item)}
                  >
                    Detail
                  </button>
                )}
              </div>
            </div>
            {isShowProjectModal && (
              <ProjectDetail
                project={activeItem as projectTypes}
                onClose={onCloseModal}
              />
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default Project;
