import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const SocialLinks: React.FC = () => {
  return (
    <>
      <div className="flex justify-center gap-x-6  py-4 text-white text-2xl">
        <a
          href="#"
          className="p-2 bg-red-500 rounded-md hover:bg-red-600 hover:scale-150 duration-500 "
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          className="p-2 bg-red-500 rounded-md  hover:bg-red-600 hover:scale-150 duration-500 "
        >
          <FaLinkedin />
        </a>
        <a
          href="#"
          className="p-2 bg-red-500 rounded-md  hover:bg-red-600 hover:scale-150 duration-500"
        >
          <FaGithub />
        </a>
      </div>
    </>
  );
};
