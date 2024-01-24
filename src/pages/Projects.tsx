import { FaCode } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

// const projects: {
//   name: string;
//   img: string;
//   github: string;
//   render: string;
// }[] = [
//   {
//     name: "css aboutme",
//     img: "./css_img_projekt.png",
//     github: "https://github.com/JosefStanek/Project-Portfolio",
//     render: "https://css-frontend.onrender.com/",
//   },
// ];

export const Projects: React.FC = () => {
  return (
    <div className="mx-8 md:mx-16 pb-8">
      <h2 className="uppercase text-center text-2xl font-bold py-8 text-gray-700">
        Projekty
      </h2>

      <div className="grid grid-cols-1 p-4 gap-y-8 gap-x-8 justify-center md:grid-cols-2  ">
        <div className="text-center border-2 rounded-xl">
          <h6 className="uppercase font-bold text-gray-700 py-4">
            CSS ABOUTME
          </h6>
          <img src="./css_img_projekt.png" alt="" />
          <p className="py-4 uppercase flex justify-center gap-x-6 text-2xl ">
            <a
              href="https://github.com/JosefStanek/Project-Portfolio"
              target="_blank"
              className="text-red-500 animate-pulse"
            >
              <FaCode />
            </a>
            <a
              href="https://css-frontend.onrender.com/"
              className="hover:scale-150 duration-500 hover:text-red-500"
              target="_blank"
            >
              <FaPlayCircle />
            </a>
          </p>
        </div>
        <div className="text-center border-2 rounded-xl">
          <h6 className="uppercase font-bold text-gray-700 py-4">
            Web Portfolio
          </h6>
          <img src="./portfolio_img_projekt.png" alt="" />
          <p className="py-4 uppercase flex justify-center gap-x-6 text-2xl ">
            <a
              href="https://github.com/JosefStanek/portfolio-react-tailwind"
              target="_blank"
              className="text-red-500 animate-pulse"
            >
              <FaCode />
            </a>
            <a
              href="https://portfolio-tsx-react.onrender.com"
              className="hover:scale-150 duration-500 hover:text-red-500"
              target="_blank"
            >
              <FaPlayCircle />
            </a>
          </p>
        </div>

        <div className="text-center border-2 rounded-xl">
          <h6 className="uppercase font-bold text-gray-700 py-4">
            Databáze Zaměstnanců
          </h6>
          <img src="./databáze_img_projekt.png" alt="" />
          <p className="py-4 uppercase flex justify-center gap-x-6 text-2xl ">
            <a
              href="https://github.com/JosefStanek/database-react-project/tree/main"
              target="_blank"
              className="text-red-500 animate-pulse"
            >
              <FaCode />
            </a>
          </p>
        </div>

        <div className="text-center border-2 rounded-xl ">
          <h6 className="uppercase font-bold text-gray-700 py-4">
            tech finder
          </h6>
          <img src="./techfinder_img_projekt.png" alt="" />
          <p className="py-4 uppercase flex justify-center gap-x-6 text-2xl ">
            <a
              href="https://github.com/JosefStanek/tech_finder"
              target="_blank"
              className="text-red-500 animate-pulse"
            >
              <FaCode />
            </a>
            <a
              href="https://mern-tech-finder-frontend.onrender.com/auth"
              className="hover:scale-150 duration-500 hover:text-red-500"
              target="_blank"
            >
              <FaPlayCircle />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
