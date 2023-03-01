import { descriptionType } from "../../../types/project";

type descriptionPropsType = {
  description: descriptionType;
};

const Description = (props: descriptionPropsType) => {
  const { description } = props;
  return (
    <div className="website_function mt-[30px]">
      <h2 className="text-[26px] text-black dark:text-white mb-[30px]">
        Website functionality
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <img
            src={description.admin?.thumb}
            alt=""
            className="w-full aspect-video object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <ul className="w-full">
            <li className="text-black dark:text-white  text-[18px] mb-4">
              Admin page
            </li>
            {description.admin?.content &&
              description.admin.content.map((item: string, index: number) => (
                <li key={index}>- {item}</li>
              ))}
          </ul>
        </div>
      </div>
      <div
        className={`flex flex-col md:flex-row ${
          description.client?.thumb ? " md:flex-row-reverse" : ""
        } gap-6 mt-[60px]`}
      >
        {description.client?.thumb && (
          <div className="w-full md:w-1/2">
            <img
              src={description.client?.thumb}
              alt=""
              className="w-full aspect-video md:w-1/2 object-cover"
            />
          </div>
        )}
        <div className="w-full md:w-1/2">
          <ul>
            <li className="text-black dark:text-white text-[18px] mb-4">
              Client page
            </li>
            {description.client?.content &&
              description.client.content.map((item: string, index: number) => (
                <li key={index}>- {item}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Description;
