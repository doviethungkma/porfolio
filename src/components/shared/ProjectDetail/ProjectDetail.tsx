import { Icon } from "@iconify/react";
import { demoType, projectTypes } from "../../../types/project";
import Demo from "./Demo";
import Description from "./Description";
import Overview from "./Overview";
import Responsibility from "./Responsibility";

type ProjectDetailPropsType = {
  project: projectTypes;
  onClose: () => void;
};

const ProjectDetail = (props: ProjectDetailPropsType) => {
  const { project, onClose } = props;
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center projects-center z-50 w-screen h-screen">
      <div
        className="overlay w-full h-full bg-black opacity-50 absolute top-0 left-0 z-40"
        onClick={onClose}
      ></div>
      <div className="content relative w-[90%] max-w-[1000px] h-[90%] p-6 bg-white dark:bg-black overflow-y-scroll opacity-1 z-50">
        <Icon
          icon="bxs:x-circle"
          className="absolute  right-4 top-4 text-black dark:text-white text-[32px] cursor-pointer"
          onClick={onClose}
        />
        <Overview overview={project.overview} />
        <Responsibility responsibility={project.responsibility} />
        <Description description={project.description} />
        <Demo demo={project.demo as demoType} />
      </div>
    </div>
  );
};

export default ProjectDetail;
