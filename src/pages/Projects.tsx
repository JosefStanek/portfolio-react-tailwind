import { FaCode } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

import { motion } from "framer-motion";

const projects: {
  name: string;
  img: string;
  github: string;
  render: string | undefined;
  overlay: { icon: any; color: string; title: string }[];
}[] = [
  {
    name: "css aboutme",
    img: "./css_img_projekt.webp",
    github: "https://github.com/JosefStanek/Project-Portfolio",
    render: "https://css-frontend.onrender.com/",
    overlay: [
      { icon: <FaHtml5 />, color: "text-red-500", title: "html" },
      { icon: <FaCss3 />, color: "text-blue-500", title: "css" },
    ],
  },
  {
    name: "web portfolio",
    img: "./portfolio_img_projekt.webp",
    github: "https://github.com/JosefStanek/portfolio-react-tailwind",
    render: "https://portfolio-tsx-react.onrender.com",
    overlay: [
      { icon: <FaHtml5 />, color: "text-red-500", title: "html" },
      { icon: <SiTailwindcss />, color: "text-blue-400", title: "tailwind" },
      { icon: <FaReact />, color: "text-blue-300", title: "react" },
    ],
  },
  {
    name: "databáze zaměstnanců",
    img: "./databáze_img_projekt.webp",
    github: "https://github.com/JosefStanek/database-react-project/tree/main",
    render: undefined,
    overlay: [
      { icon: <FaHtml5 />, color: "text-red-500", title: "html" },
      { icon: <SiMui />, color: "text-blue-500", title: "mui" },
      { icon: <FaReact />, color: "text-blue-300", title: "react" },
    ],
  },
  {
    name: "tech finder",
    img: "./techfinder_img_projekt.webp",
    github: "https://github.com/JosefStanek/tech_finder",
    render: "https://mern-tech-finder-frontend.onrender.com/auth",
    overlay: [
      { icon: <FaHtml5 />, color: "text-red-500", title: "html" },
      { icon: <SiMui />, color: "text-blue-500", title: "mui" },
      { icon: <FaReact />, color: "text-blue-300", title: "react" },
      { icon: <FaNodeJs />, color: "text-green-300", title: "node js" },
      { icon: <DiMongodb />, color: "text-green-500", title: "mongo db" },
    ],
  },
];

export const Projects: React.FC = () => {
  return (
    <div className="mx-8 md:mx-16 pb-8">
      <h2 className="uppercase text-center text-2xl font-bold py-8 text-gray-700">
        Projekty
      </h2>
      <div className="grid grid-cols-1 p-4 gap-y-8 gap-x-8 justify-center md:grid-cols-2">
        {projects.map((project, index) => {
          return (
            <motion.div
              className="text-center border-2 rounded-xl"
              key={project.github}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.4 }}
            >
              <div className="relative">
                <h6 className="uppercase font-bold text-gray-700 py-4">
                  {project.name}
                </h6>
                <img
                  src={project.img}
                  alt={project.name}
                  loading="lazy"
                  width="640"
                  height="360"
                />

                {/* overlay */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden gap-x-4 grid grid-cols-3 sm:flex sm:justify-center sm:gap-x-8 md:grid 2xl:flex  items-center bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-500 p-2 ">
                  {project.overlay.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`${item.color} flex flex-col  gap-2 items-center justify-center  p-2`}
                      >
                        <i className="text-4xl lg:text-6xl ">{item.icon}</i>
                        <p className="font-bold uppercase">{item.title}</p>
                      </div>
                    );
                  })}
                </div>
                {/* end of overlay */}
              </div>
              <p className="py-4 uppercase flex justify-center gap-x-6 text-2xl bg-gray-200">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-red-500 animate-pulse"
                >
                  <FaCode />
                </a>
                {project.render && (
                  <a
                    href={project.render}
                    className="hover:scale-150 duration-500 hover:text-red-500"
                    target="_blank"
                  >
                    <FaPlayCircle />
                  </a>
                )}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
