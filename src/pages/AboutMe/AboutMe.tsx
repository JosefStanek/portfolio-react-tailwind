import { FaArrowCircleDown } from "react-icons/fa";
import { Info } from "./Info";
import { Skills } from "./Skills";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CvButton } from "../../shared/CvButton";
export const AboutMe: React.FC = () => {
  return (
    <div className="mx-10 md:mx-14">
      {/* hero section */}
      <section>
        <div className="flex flex-col justify-center md:flex-row md:justify-center  items-center py-10 text-center gap-y-10  gap-x-10 md:gap-x-20 mt-24 ">
          {/* left */}
          <motion.div
            className="text-left flex flex-col gap-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl  font-bold text-gray-700 uppercase">
              Josef Staněk
            </h1>
            <h2 className="uppercase md:text-3xl">Front-End Developer</h2>
            <div className="flex gap-x-5 ">
              <button className="bg-red-500 font-bold text-white uppercase px-6 py-2 hover:scale-110 duration-500">
                <Link to={"/contact"}> kontaktuj mě</Link>
              </button>
              <CvButton />
            </div>
          </motion.div>
          {/* right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <img
              className="relative rounded-2xl w-96 h-auto lg:w-auto border-red-500 border-8 "
              src="./portret.webp"
              alt="portret"
              width="640"
              height="360"
              loading="lazy"
            />
          </motion.div>
        </div>
        <p className="flex justify-center my-6 text-red-500 text-4xl">
          <FaArrowCircleDown className="animate-bounce" />
        </p>
      </section>
      {/* info section */}
      <Info />
      {/* skills section */}
      <Skills />
    </div>
  );
};
