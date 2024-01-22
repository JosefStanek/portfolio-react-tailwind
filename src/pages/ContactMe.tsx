import { EmailForm } from "../shared/EmailForm";
import { MdEmail } from "react-icons/md";
import { SocialLinks } from "../shared/footer/SocialLinks";
export const ContactMe: React.FC = () => {
  return (
    <section className="mx-8 md:mx-16 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 mb-8 ">
        <div>
          <h6 className=" uppercase text-3xl font-bold text-gray-700 mb-4">
            Pošli mi email.
          </h6>
          <p className="flex justify-start items-center gap-2">
            <span className="inline-block border-2   rounded-sm border-red-600 p-1 bg-red-600 text-white ">
              <MdEmail className="text-2xl " />
            </span>
            josef.stanek389@gmail.com
          </p>
          <h6 className=" uppercase text-sm font-bold text-gray-700 mt-6 mb-4">
            Sociální sítě
          </h6>
        </div>

        <EmailForm />
      </div>
      {/* <form
        onSubmit={sendEmail}
        className="flex flex-col gap-y-8 my-4 border-2 p-4 max-w-2xl mx-auto"
      >
        <div className="relative">
          <input
            type="text"
            id="name"
            className="border-b py-1 focus:outline-none focus:border-gray-500 focus:border-b-2 transition-colors peer w-full"
            autoComplete="off"
          ></input>
          <label
            htmlFor="name"
            className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-gray-500 transition-all"
          >
            Jméno
          </label>
        </div>
        <div className="relative">
          <input
            type="email"
            id="email"
            className="border-b py-1 focus:outline-none focus:border-gray-500 focus:border-b-2 transition-colors peer w-full"
            autoComplete="off"
          ></input>
          <label
            htmlFor="email"
            className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-gray-500 transition-all"
          >
            Email
          </label>
        </div>

        <div className="relative">
          <textarea
            id="message"
            className="border-b py-1 focus:outline-none focus:border-gray-500 focus:border-b-2 transition-colors peer w-full"
            autoComplete="off"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-gray-500 transition-all"
          >
            Zpráva
          </label>
        </div>
        <button
          type="submit"
          className="bg-gray-700 text-white py-4 uppercase font-bold"
        >
          odeslat
        </button>
      </form> */}
    </section>
  );
};
