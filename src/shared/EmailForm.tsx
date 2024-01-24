import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { SlEnvolopeLetter } from "react-icons/sl";
import { useForm } from "react-hook-form";
interface Inputs {
  name: string;
  email: string;
  message: string;
}
export const EmailForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const sendEmail = (data: Inputs) => {
    const serviceId: string = import.meta.env.VITE_SERVICE_ID;
    const templateId: string = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey: string = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_name: "Web Wizard",
      message: data.message,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        console.log(res);
        reset({
          name: "",
          email: "",
          message: "",
        });
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
      onSubmit={handleSubmit(sendEmail)}
      className="flex flex-col border-2 py-6 px-10 gap-y-6 lg:gap-y-12 "
    >
      <i className="py-2 font-bold uppercase hidden mx-auto lg:inline-block lg:text-6xl">
        <SlEnvolopeLetter />
      </i>
      <h6 className="py-2 font-bold uppercase ">Pošli zprávu přímo</h6>

      <div className="flex flex-col w-full">
        <label className={errors.name ? `text-red-500` : `"text-gray-700`}>
          Jméno
        </label>
        <input
          {...register("name", {
            required: "Jméno nesmí být prázdné",
          })}
          type="text"
          name="name"
          className={
            errors.name
              ? `border-b py-1 focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors peer`
              : `border-b py-1 focus:outline-none focus:border-gray-700 focus:border-b-2 transition-colors peer`
          }
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="flex flex-col">
        <label className={errors.email ? `text-red-500` : `"text-gray-700`}>
          Email
        </label>
        <input
          {...register("email", {
            required: "Email nesmí být prazdný",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Zadejte platný email.",
            },
          })}
          type="email"
          name="email"
          className={
            errors.email
              ? `border-b py-1 focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors peer`
              : `border-b py-1 focus:outline-none focus:border-gray-700 focus:border-b-2 transition-colors peer`
          }
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="flex flex-col">
        <label className={errors.message ? `text-red-500` : `"text-gray-700`}>
          Zpráva
        </label>
        <textarea
          {...register("message", { required: "Prosím zadej zprávu" })}
          name="message"
          className={
            errors.message
              ? `border-b py-1 focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors peer`
              : `border-b py-1 focus:outline-none focus:border-gray-700 focus:border-b-2 transition-colors peer`
          }
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
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
