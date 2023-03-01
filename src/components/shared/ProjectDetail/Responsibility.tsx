type responsibilityPropsType = {
  responsibility: string[];
};

const Responsibility = (props: responsibilityPropsType) => {
  const { responsibility } = props;
  return (
    <div className="responsibility mt-[30px]">
      <h2 className="text-[26px] text-black dark:text-white mb-[30px]">
        Responsibility
      </h2>
      <div className="w-full">
        <ul>
          {responsibility.map((item: string, index: number) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Responsibility;
