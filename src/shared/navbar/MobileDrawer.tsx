import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
interface mobileProps {
  mobileDrawer: boolean;
  closeDrawer: () => void;
}
export const MobileDrawer: React.FC<mobileProps> = ({
  mobileDrawer,
  closeDrawer,
}) => {
  return (
    <AnimatePresence>
      {mobileDrawer && (
        <motion.div
          className="absolute top-23 bg-gray-700 w-full z-50 md:hidden border-t-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className=" uppercase flex flex-col gap-y-4 py-5 ">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? `px-4 bg-red-500 py-3 font-bold`
                  : `px-4 py-3  hover:bg-red-400 font-bold`
              }
              onClick={closeDrawer}
            >
              profil
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? `px-4  bg-red-500 py-3 font-bold`
                  : `px-4 py-3 hover:bg-red-400 font-bold`
              }
              onClick={closeDrawer}
            >
              projekty
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? `px-4  bg-red-500 py-3 font-bold`
                  : `px-4 py-3  hover:bg-red-400 font-bold`
              }
              onClick={closeDrawer}
            >
              kontakt
            </NavLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
