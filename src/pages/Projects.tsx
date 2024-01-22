import { FaCode } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
export const Projects: React.FC = () => {
  return (
    <div className="mx-8 md:mx-16 pb-8">
      <h2 className="uppercase text-center text-2xl font-bold py-8 text-gray-700">
        Projekty
      </h2>

      <div className="grid grid-cols-1 gap-y-8 justify-center md:grid-cols-2 border-2 ">
        <div className="text-center  ">
          <img src="./portfolio-tsx.png" alt="" />
          <h6 className="uppercase font-bold text-gray-700">Web Portfolio</h6>
          <p className="py-4 uppercase flex justify-center gap-x-6 text-2xl">
            <a
              href="https://github.com/JosefStanek/portfolio-react-tailwind"
              target="_blank"
            >
              <FaCode />
            </a>
            <a href="https://portfolio-tsx-react.onrender.com">
              <FaPlayCircle />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
