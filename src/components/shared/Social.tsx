import { Icon } from "@iconify/react";

const Social = () => {
  return (
    <div className="social flex gap-4">
      <Icon
        icon="bxl:github"
        className="text-[24px] text-black dark:text-white"
      />
      <Icon
        icon="bxl:linkedin-square"
        className="text-[24px] text-black dark:text-white"
      />
      <Icon
        icon="bxl:facebook"
        className="text-[24px] text-black dark:text-white"
      />
      <Icon
        icon="bxl:twitter"
        className="text-[24px] text-black dark:text-white"
      />
    </div>
  );
};

export default Social;
