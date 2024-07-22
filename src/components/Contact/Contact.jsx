import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pi7fqld", "template_pbhc8yg", form.current, {
        publicKey: "4z5ni50PSFSjcxbaE",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("E-posta başarıyla gönderildi!");
        },
        (error) => {
          toast.error("E-posta gönderirken bir hata oluştu!");
        }
      );
  };
  return (
    <section id="contact" className="mb-20 mt-20 flex-col justify-center px-4">
      <ToastContainer />
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-white shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
        <div className="text-white relative px-4 py-10 bg-emerald-200 shadow-lg rounded-3xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-xl md:text-3xl font-medium">
              Bizimle iletişime geçin!
            </h1>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input
              className="shadow border-none text-sm md:text-base mb-4 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              required
              name="user_name"
              placeholder="Adınız"
            />

            <input
              className="shadow mb-4 border-none text-sm md:text-base appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              required
              name="user_email"
              placeholder="Mail adresiniz"
            />

            <input
              className="shadow mb-4 border-none text-sm md:text-base appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              required
              id="name"
              name="user_telephone"
              placeholder="Telefon Numaranız"
            />

            <textarea
              className="shadow mb-4 min-h-0 border-none text-sm md:text-base appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              name="message"
              placeholder="Mesajınız..."
              style={{ height: "121px" }}
            />

            <div className="flex justify-between">
              <button
                className="shadow bg-white text-emerald-600 text-sm md:text-base font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Gönder ➤
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
