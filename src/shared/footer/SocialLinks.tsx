import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const SocialLinks: React.FC = () => {
  return (
    <>
      <div className="flex justify-center gap-x-6  py-4 text-white text-2xl">
        <a
          href="https://www.facebook.com/josef.destiny"
          className="p-2 bg-red-500 rounded-md hover:bg-red-600 hover:scale-150 duration-500"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/josef-stan%C4%9Bk-21982922a/"
          className="p-2 bg-red-500 rounded-md  hover:bg-red-600 hover:scale-150 duration-500"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/JosefStanek"
          className="p-2 bg-red-500 rounded-md  hover:bg-red-600 hover:scale-150 duration-500"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
    </>
  );
};
