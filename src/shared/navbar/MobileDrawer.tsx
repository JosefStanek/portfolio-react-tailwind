import { NavLink } from "react-router-dom";
export const MobileDrawer: React.FC = () => {
  return (
    <div className="absolute top-23 bg-gray-700 w-full z-50 md:hidden border-t-2">
      <div className=" uppercase flex flex-col gap-y-4 py-5 ">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? `px-4 bg-red-500 py-3 font-bold`
              : `px-4 py-3  hover:bg-red-400 font-bold`
          }
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
        >
          kontakt
        </NavLink>
      </div>
    </div>
  );
};
