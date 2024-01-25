import { EmailForm } from "../shared/EmailForm";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { motion } from "framer-motion";

export const ContactMe: React.FC = () => {
  return (
    <section className="mx-8 md:mx-16 py-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-8 gap-y-8 gap-x-8 lg:gap-x-16 ">
        {/* left */}
        <div className="flex flex-col">
          <h6 className="text-2xl font-bold uppercase">Napiš mi</h6>
          <div className="flex items-center gap-x-5 py-4">
            <MdEmail className="p-1 text-4xl   text-white bg-red-500" />
            <span> josef.stanek389@gmail.com </span>
          </div>
          <div className="flex items-center gap-x-5 py-4">
            <IoHome className="p-1 text-4xl   text-white bg-red-500" />
            <span> Praha </span>
          </div>

          <h6 className="text-md font-bold uppercase">Sociální sítě</h6>
          <div className="flex items-center gap-x-5 py-4">
            <a href="https://github.com/JosefStanek" target="_blank">
              <FaGithub className="p-1 text-4xl text-white bg-gray-700 hover:scale-150 hover:bg-gray-800 duration-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/josef-stan%C4%9Bk-21982922a/"
              target="_blank"
            >
              <FaLinkedin className="p-1 text-4xl text-white bg-gray-700 hover:scale-150 hover:bg-gray-800 duration-500" />
            </a>
            <a href="https://www.facebook.com/josef.destiny" target="_blank">
              <FaFacebook className="p-1 text-4xl text-white bg-gray-700 hover:scale-150 hover:bg-gray-800 duration-500" />
            </a>
          </div>
          <h6 className="text-md font-bold uppercase">Kde mě najdeš</h6>
          <motion.p
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5127.548798709221!2d14.42591779169431!3d50.01558355512736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9145480ac3ef%3A0x2600af105c20ffe1!2sKam%C3%BDk%2C%20142%2000%20Praha%2012!5e0!3m2!1scs!2scz!4v1705944450640!5m2!1scs!2scz"
              className="w-full h-48 py-4  sm:h-96  "
              loading="lazy"
              width="640"
              height="360"
            ></iframe>
          </motion.p>
        </div>
        {/* right */}
        <EmailForm />
      </div>
    </section>
  );
};
