import { Link } from "react-router-dom";
export const FooterNavigation: React.FC = () => {
  return (
    <ul className="flex justify-center items-center gap-x-4 pt-8 uppercase text-white">
      <Link to={"/about"}>Profil</Link>
      <Link to={"/projects"}>Projekty</Link>
      <Link to={"/contact"}>Kontakt</Link>
    </ul>
  );
};
