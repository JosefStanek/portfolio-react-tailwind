import { FaArrowCircleUp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoVue } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
export const Skills: React.FC = () => {
  return (
    <section className="lg:w-1/2 lg:mx-auto">
      <h2 className="text-center uppercase font-bold text-gray-700 text-2xl py-5">
        Technologie
      </h2>
      <p className="py-5">
        Jako hlavní pracovní nástroj považuji React JS. Pracuji s ním již
        nějakou dobu a v rámci front-end vývoje mi velmi vyhovuje. Je to velmi
        flexibilní knihovna s velkou podporou komunity a s mnoha balíčky pro
        široké využití.Nejsou mi cizí balíčky jako je Framer-Motion, Redux,
        React-Router-Dom, React-Query, React-Hook-Form, MUI, Toustify či Axios.
        Kromě Reactu používám i jiné technologie jako je:
      </p>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-y-6 pt-6 pb-5">
        <div className="flex flex-col justify-center items-center ">
          <FaHtml5 />
          <span>HTML</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaCss3 />
          <span>CSS</span>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <IoLogoJavascript />
          <span>Javascript</span>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <SiTypescript />
          <span>TypeScript</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <SiTailwindcss />
          <span>Tailwind</span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <FaNodeJs />
          <span>Node JS</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <DiMongodb />
          <span>Mongo DB</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <IoLogoVue />
          <span>Vue</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaReact />
          <span>React</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaGitAlt />
          <span>Git</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <SiMui />
          <span>MUI</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <TbBrandReactNative />
          <span>React Native</span>
        </div>
      </div>

      <p className="flex justify-center my-6 text-red-500 text-4xl">
        <FaArrowCircleUp className="animate-bounce" />
      </p>
    </section>
  );
};
