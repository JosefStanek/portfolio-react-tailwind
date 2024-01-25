import { FaCode } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion";
const projects: {
  name: string;
  img: string;
  github: string;
  render: string | undefined;
}[] = [
  {
    name: "css aboutme",
    img: "./css_img_projekt.webp",
    github: "https://github.com/JosefStanek/Project-Portfolio",
    render: "https://css-frontend.onrender.com/",
  },
  {
    name: "web portfolio",
    img: "./portfolio_img_projekt.webp",
    github: "https://github.com/JosefStanek/portfolio-react-tailwind",
    render: "https://portfolio-tsx-react.onrender.com",
  },
  {
    name: "databáze zaměstnanců",
    img: "./databáze_img_projekt.webp",
    github: "https://github.com/JosefStanek/database-react-project/tree/main",
    render: undefined,
  },
  {
    name: "tech finder",
    img: "./techfinder_img_projekt.webp",
    github: "https://github.com/JosefStanek/tech_finder",
    render: "https://mern-tech-finder-frontend.onrender.com/auth",
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
              key={project.github}
              className="text-center border-2 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: index * 0.2 }}
            >
              <h6 className="uppercase font-bold text-gray-700 py-4">
                {project.name}
              </h6>
              <img src={project.img} alt={project.name} loading="lazy" />
              <p className="py-4 uppercase flex justify-center gap-x-6 text-2xl ">
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
