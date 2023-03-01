import { overviewTypes } from "../../../types/project";

type OverviewPropsType = {
  overview: overviewTypes;
};

const Overview = (props: OverviewPropsType) => {
  const { overview } = props;
  return (
    <div className="overview mt-[70px]">
      <h2 className="text-[26px] text-black dark:text-white mb-[30px]">
        Overview
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={overview.thumb}
          alt=""
          className="w-full md:w-1/2 max-w-full object-cover"
        />
        <div className="w-full">
          <h4 className="text-[20px] font-bold text-black dark:text-white">
            {overview.name}
          </h4>
          <h5 className="text-black dark:text-white">{overview.role}</h5>
          <p>{overview.short_description}</p>
          <ul>
            {overview.tech.map((tech: string, index: number) => (
              <li key={index}>- {tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Overview;
