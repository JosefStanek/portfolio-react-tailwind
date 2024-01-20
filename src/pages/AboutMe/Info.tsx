import { FaArrowCircleDown } from "react-icons/fa";

export const Info: React.FC = () => {
  return (
    <section className="lg:w-1/2 lg:mx-auto">
      <h2 className="text-center uppercase font-bold text-gray-700 text-2xl py-5">
        Info
      </h2>
      <div className="flex flex-col gap-y-4">
        <div>
          <h6>
            Věk: <span>29</span>
          </h6>
          <h6>
            Bydliště: <span>Praha</span>
          </h6>
          <h6>
            Nástup: <span>ihned</span>
          </h6>
        </div>
        <p className="mb-5">
          S vášní pro práci s kódem a láskou k programování webových stránek
          hledám stále nové výzvy a pracovní příležitosti. Mým cílem je spojit
          technické dovednosti s tvůrčím designem, abych vytvářel moderní a
          uživatelsky přívětivé webové stránky. Sleduji aktuální trendy v
          oblasti webového vývoje a neustále se vzdělávám, abych byl schopen
          nabídnout inovativní a efektivní řešení.
        </p>
      </div>

      <p className="flex justify-center my-6 text-red-500 text-4xl">
        <FaArrowCircleDown className="animate-bounce" />
      </p>
    </section>
  );
};
