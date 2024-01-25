import { Link } from "react-router-dom";
export const FooterNavigation: React.FC = () => {
  return (
    <ul className="flex justify-center items-center gap-x-4 pt-8 uppercase text-white">
      <Link
        to={"/about"}
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
          })
        }
      >
        Profil
      </Link>
      <Link
        to={"/projects"}
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
          })
        }
      >
        Projekty
      </Link>
      <Link
        to={"/contact"}
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
          })
        }
      >
        Kontakt
      </Link>
    </ul>
  );
};
