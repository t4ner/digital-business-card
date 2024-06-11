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
    <div className="mb-20 bg-purple-300">
       <ToastContainer />
      <div className="w-4/5 mx-auto flex justify-between gap-10 py-10">
        <div className="bg-white basis-1/3 p-5 rounded-lg">
          <h3 className="text-6xl font-bold p-3 from-green-600 via-purple-600 to-blue-600 bg-gradient-to-r bg-clip-text border-0 text-transparent">
            Bizimle iletişime geçin
          </h3>
          <div className="flex items-center gap-3 mt-8">
            <img src={instagram} />
            <span className="font-medium text-2xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text border-0 text-transparent">
              @ecoqrcode.tr
            </span>
          </div>
        </div>
        <div className="bg-white flex-1 p-5 rounded-lg">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex-col md:flex md:flex-row flex-wrap md:gap-10">
              <div className="relative my-4 pb-2">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Adınız"
                  className="block w-72 py-1 pt-5  px-0 placeholder:text-black font-medium  text-purple-500 bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-purple-500 focus:border-purple-600 peer"
                />
              </div>

              <div className="relative my-4 pb-2">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Mail adresiniz"
                  className="block w-72 py-1 pt-5  px-0 placeholder:text-black font-medium  text-purple-500 bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-purple-500 focus:border-purple-600 peer"
                />
              </div>

              <div className="relative my-4 pb-2">
                <input
                  type="text"
                  id="name"
                  name="user_telephone"
                  placeholder="Telefon Numaranız"
                  className="block w-72 py-1 pt-5  px-0 placeholder:text-black font-medium  text-purple-500 bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-purple-500 focus:border-purple-600 peer"
                />
              </div>

              <div className="relative my-4 pb-2">
                <textarea
                  rows={1}
                  cols={1}
                  name="message"
                  placeholder="Mesajınız..."
                  className="block w-72 py-1 pt-5  px-0 placeholder:text-black font-medium  text-purple-500 bg-transparent border-0 border-b-2 border-black appearance-none dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:text-purple-500 focus:border-purple-600 peer"
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
