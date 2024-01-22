import emailjs from "@emailjs/browser";
import { SlEnvolopeLetter } from "react-icons/sl";
import { useState } from "react";
import { toast } from "react-toastify";

export const EmailForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      return;
    }
    const serviceId: string = import.meta.env.VITE_SERVICE_ID;
    const templateId: string = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey: string = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Web Wizard",
      message: message,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        console.log(res);
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Odeslání proběhlo v pořádku", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Něco se pokazilo, opakujte prosím později.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <form
      onSubmit={sendEmail}
      className="flex flex-col border-2 py-6 px-10 gap-y-6 lg:gap-y-12 "
    >
      <i className="py-2 font-bold uppercase hidden mx-auto lg:inline-block lg:text-6xl">
        <SlEnvolopeLetter />
      </i>
      <h6 className="py-2 font-bold uppercase ">Pošli zprávu přímo</h6>

      <div className="flex flex-col w-full">
        <label className="text-gray-700">Jméno</label>
        <input
          type="text"
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-b py-1 focus:outline-none focus:border-gray-700 focus:border-b-2 transition-colors peer"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-700">Email</label>
        <input
          type="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-b py-1 focus:outline-none focus:border-gray-700 focus:border-b-2 transition-colors peer"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-700">Zpráva</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border-b py-1 focus:outline-none focus:border-gray-700 focus:border-b-2 transition-colors peer"
        />
      </div>
      <button
        type="submit"
        className="bg-gray-700 text-white uppercase py-4 px-6 font-bold hover:bg-gray-600"
      >
        odeslat
      </button>
    </form>
  );
};
