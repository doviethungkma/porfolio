import { demoType } from "../../../types/project";

type DemoPropsType = {
  demo: demoType;
};

const Demo = (props: DemoPropsType) => {
  const { demo } = props;
  return (
    <div className="responsibility mt-[30px]">
      <h2 className="text-[30px] text-black dark:text-white mb-[30px]">Demo</h2>
      <div className="w-full">
        <iframe
          width="100%"
          height="500"
          src={demo?.url}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Demo;
