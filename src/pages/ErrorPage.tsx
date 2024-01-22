import { Link } from "react-router-dom";
export const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-y-7 my-32">
      <h1 className="text-center text-8xl ">4O4</h1>
      <p className="text-center text-2xl">Stránka nebyla nalezena.</p>
      <p className="text-center text-2xl ">
        Vrať se na
        <Link
          to="/"
          className="uppercase text-red-500 py-2 px-4 animate-bounce"
        >
          Hlavní stránku.
        </Link>
      </p>
    </div>
  );
};
