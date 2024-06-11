import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import instagram from "/socialMediaLogo/instagram.svg";
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
    <div className="md:mb-20 mb-10 md:bg-purple-300">
      <ToastContainer />
      <div className="md:w-4/5 mx-auto flex-col md:flex md:flex-row justify-between gap-10 md:py-10">
        <div className="bg-white basis-full md:basis-1/3 md:p-5 rounded-lg">
          <h3 className="text-2xl md:text-6xl font-bold p-1 from-green-600 via-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text border-0 text-transparent">
            Bizimle iletişime geçin
          </h3>
          <div className="flex items-center md:gap-3 gap-1  md:mt-8">
            <img src={instagram} />
            <span className="font-medium text-lg md:text-2xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text border-0 text-transparent">
              @ecoqrcode.tr
            </span>
          </div>
        </div>
        <div className="bg-white flex-1 px-2 md:p-5 rounded-lg">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex-col md:flex md:flex-row flex-wrap md:gap-10">
              <div className="relative my-2 md:my-4 pb-2">
                <input
                  type="text"
                  required
                  name="user_name"
                  placeholder="Adınız"
                  className="block w-full md:w-72 py-1 pt-5  px-0 placeholder:text-black font-medium  text-purple-500 bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-purple-500 focus:border-purple-600 peer"
                />
              </div>

              <div className="relative my-2 md:my-4 pb-2">
                <input
                  type="email"
                  required
                  name="user_email"
                  placeholder="Mail adresiniz"
                  className="block w-full md:w-72 py-1 pt-5  px-0 placeholder:text-black font-medium  text-purple-500 bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-purple-500 focus:border-purple-600 peer"
                />
              </div>

              <div className="relative my-2 md:my-4 pb-2">
                <input
                  type="text"
                  required
                  id="name"
                  name="user_telephone"
                  placeholder="Telefon Numaranız"
                  className="block w-full md:w-72 py-1 pt-5  px-0 placeholder:text-black font-medium  text-purple-500 bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-purple-500 focus:border-purple-600 peer"
                />
              </div>

              <div className="relative my-2 md:my-4 pb-2">
                <input
                  required
                  name="message"
                  placeholder="Mesajınız..."
                  className="block w-full md:w-72 py-1 pt-5 placeholder:text-base px-0 placeholder:text-black font-medium  text-purple-500 bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-purple-500 focus:border-purple-600 peer"
                />
              </div>

              <button
                type="submit"
                className="font-medium border-2 border-purple-600 rounded-lg px-4 py-2 text-black"
              >
                {" "}
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
