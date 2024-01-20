import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
export const Navbar = () => {
  return (
    <header className=" bg-gray-700 text-white">
      <div className=" flex justify-between items-center uppercase font-bold py-4 mx-4 sm:mx-16 ">
        <p>
          portfo<span className="text-red-500">lio.</span>
        </p>
        <nav className="gap-x-4 hidden md:flex">
          <NavLink
            className={"hover:bg-red-500 px-5 py-2 duration-500"}
            to={"/about"}
          >
            Profil
          </NavLink>
          <NavLink
            className={"hover:bg-red-500 px-5 py-2 duration-500"}
            to={"/projects"}
          >
            Projekty
          </NavLink>
          <NavLink
            className={"hover:bg-red-500 px-5 py-2 duration-500"}
            to={"/contact"}
          >
            Kontakt
          </NavLink>
        </nav>
        <button className="text-2xl py-2 px-2 md:hidden hover:bg-red-500 border-collapse rounded-3xl duration-500 ">
          <IoMenu />
        </button>
      </div>
    </header>
  );
};
