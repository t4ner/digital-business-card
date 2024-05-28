import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import drought from "/drought/kuraklık3.png";

function SignIn() {
  // State'lerin tanımlanması
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
    username: "",
  });

  // Input değerlerinin değişimlerini takip eden fonksiyon
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submit işlemi
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Axios ile API'ye POST isteği gönderme
      const response = await axios.post(
        "http://178.128.207.116:8089/api/auth/signup",
        formData
      );
      console.log("Response:", response.data);
      // Başarılı mesajı gösterebilirsiniz
    } catch (error) {
      console.error("Error:", error);
      // Hata mesajını gösterebilirsiniz
    }
  };
  console.log(formData);
  return (
    <div className="h-screen">
      <Navbar />
      <div
        className="flex items-center justify-center"
        style={{
          backgroundImage: "url('/drought/kuraklık.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex py-20">
          <div className="hidden lg:flex rounded-l-xl items-center justify-center flex-1 bg-white text-black">
            <div className="max-w-md h-full text-center">
              <img
                src={drought}
                className="h-full rounded-l-lg"
                alt="drought"
              />
            </div>
          </div>

          <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center rounded-r-lg">
            <div className="max-w-md w-full p-6">
              <h1 className="text-3xl font-semibold mb-6 text-black text-center">
                Üye ol
              </h1>
              <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
                Digital kartvizit ile yeşil bir dünyaya adım at
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="mt-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    İsim
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="surname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Soyisim
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Kullanıcı ismi
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Şifre
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                  >
                    Üye ol
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
