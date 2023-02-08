import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
    const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

    console.log(publicKey);

    form.current &&
      emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section
      className="skill w-full max-w-[990px] font-montserrat mt-[70px]"
      data-aos="zoom-in"
    >
      <h2 className="mb-[70px] text-black dark:text-white text-[30px] font-montserrat font-extrabold capitalize">
        Contact me
      </h2>
      <div className="flex flex-col gap-4 lg:flex-row">
        <ul className="w-full  lg:w-1/2">
          <li className="flex gap-4 items-center py-2">
            <Icon icon="bx:phone" className="text-[24px] dark:text-white" />
            <p className="text-[16px] dark:text-white">0352773054</p>
          </li>
          <li className="flex gap-4 items-center py-2">
            <Icon icon="bx:home" className="text-[24px] dark:text-white" />
            <p className="text-[16px] dark:text-white">
              Tong Lanh - Thuan Chau - Son La
            </p>
          </li>
          <li className="flex gap-4 items-center py-2">
            <Icon icon="bx:envelope" className="text-[24px] dark:text-white" />
            <p className="text-[16px] dark:text-white">
              doviethung1995@gmail.com
            </p>
          </li>
        </ul>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 w-full"
        >
          <div className="flex gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="w-1/2 px-[15px] py-[10px] text-[13px] bg-transparent border border-[rgba(0,0,0,.2)] dark:border-[rgba(255,255,255,.2)] text-black dark:text-white"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="w-1/2 px-[15px] py-[10px] text-[13px] bg-transparent border border-[rgba(0,0,0,.2)] dark:border-[rgba(255,255,255,.2)] text-black dark:text-white"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            className="h-[120px] px-[15px] py-[10px] text-[13px] bg-transparent border border-[rgba(0,0,0,.2)] dark:border-[rgba(255,255,255,.2)] text-black dark:text-white"
          />
          <button
            type="submit"
            value="Send"
            className="self-start px-[40px] py-[10px] bg-black dark:bg-white  text-white dark:text-black transition-all hover:opacity-80"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
