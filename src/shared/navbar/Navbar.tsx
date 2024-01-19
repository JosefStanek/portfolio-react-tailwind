import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className=" bg-gray-700 text-white">
      <div className=" flex justify-between items-center uppercase font-bold py-4 mx-16">
        <p>
          portfo<span className="text-blue-500">lio.</span>
        </p>
        <nav className="gap-x-4 hidden md:flex">
          <NavLink className={"hover:bg-red-500 px-5 py-2"} to={"/about"}>
            Profil
          </NavLink>
          <NavLink className={"hover:bg-red-500 px-5 py-2"} to={"/projects"}>
            Projekty
          </NavLink>
          <NavLink className={"hover:bg-red-500 px-5 py-2"} to={"/contact"}>
            Kontakt
          </NavLink>
        </nav>
        <button className="block md:hidden uppercase px-5 py-2 ">
          burger menu
        </button>
      </div>
    </header>
  );
};
