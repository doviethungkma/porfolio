import { Link } from "react-router-dom";
import { project } from "../../../data/project";
import { AccountType, demoType, LinkType } from "../../../types/project";

type DemoPropsType = {
  demo?: demoType[];
  link?: LinkType[];
  account?: AccountType[];
};

const Demo = (props: DemoPropsType) => {
  const { demo, link, account } = props;
  console.log(demo);
  return (
    <div className="responsibility mt-[30px]">
      <h2 className="text-[26px] text-black dark:text-white mb-[30px]">Demo</h2>
      <div className="w-full flex gap-6">
        {demo &&
          demo.map((item: demoType, index: number) => (
            <div className="flex flex-col w-full">
              <iframe
                width="100%"
                className="aspect-video"
                src={item?.url}
                title="YouTube video player"
                allowFullScreen
              ></iframe>
              <h3 className="text-black dark:text-white mt-4 text-center">
                {item.title}
              </h3>
            </div>
          ))}
      </div>
      <h2 className="text-[26px] text-black dark:text-white mt-[30px] mb-[30px]">
        Link
      </h2>
      <div>
        <ul>
          {link &&
            link.map((item: LinkType, index: number) => (
              <li>
                <span className="text-black dark:text-white">
                  {item.title}:
                </span>{" "}
                <a
                  href={item.url}
                  target="_blank"
                  className="hover:text-black dark:hover:text-white cursor-pointer transition-all duration-700"
                >
                  {" "}
                  {item.url}
                </a>
              </li>
            ))}
        </ul>
      </div>
      <h2 className="text-[26px] text-black dark:text-white mt-[30px] mb-[30px]">
        Account
      </h2>
      <div>
        <ul>
          {account &&
            account.map((item: AccountType, index: number) => (
              <li>
                {item.role && (
                  <span className="text-black dark:text-white">
                    {item.role} role:{" "}
                  </span>
                )}
                <span>{item.username}</span> <span>/{item.password}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Demo;
