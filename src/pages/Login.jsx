import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import login from "/login/login.png";

function Login() {
  // State'lerin tanımlanması
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

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
        "http://178.128.207.116:8089/api/auth/login",
        {
          usernameOrEmail: formData.email,
          password: formData.password,
        }
      );
      console.log("response", response);
      // Giriş başarılıysa JWT token'i alınır
      const token = response.data.token;

      // JWT token'i decode edilir
      const decodedToken = jwtDecode(token);
      console.log("decodedToken", decodedToken);

      localStorage.setItem("token", token);
      localStorage.setItem("email", decodedToken.sub);

      // Decode edilen token kullanıcı bilgilerini içerir
      console.log("Decoded Token:", decodedToken);

      // Decode edilen token bilgileri ile kullanıcı tarafından girilen bilgileri karşılaştırma
      if (decodedToken.sub === formData.email) {
        // Giriş bilgileri doğruysa giriş yapılır
        console.log("Giriş başarılı");
        // Başarılı mesajı gösterebilirsiniz
        setError(null);
      } else {
        // Giriş bilgileri yanlışsa hata mesajı gösterilir
        setError("Kullanıcı adı veya şifre yanlış");
      }
    } catch (error) {
      console.error("Error:", error);
      // Hata mesajını gösterebilirsiniz
      setError("Kullanıcı adı veya şifre yanlış");
    }
  };

  return (
    <div className="h-screen">
      <Navbar />
      <div
        className="flex items-center justify-center"
        style={{
          backgroundImage: "url('/banner/banner.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex mb-20 mt-20">
          <div className="hidden lg:flex rounded-l-xl items-center justify-center flex-1 bg-white text-black">
            <div className="max-w-md text-center ">
              <img src={login} alt="login" />
            </div>
          </div>

          <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center rounded-r-lg">
            <div className="max-w-md w-full p-6">
              <h1 className="text-3xl font-semibold mb-6 text-black text-center">
                Giriş yap
              </h1>
              <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
                Digital kartvizit ile yeşil bir dünya
              </h1>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
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

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
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
                    Giriş Yap
                  </button>
                </div>
              </form>
              {error && <p className="text-red-500 text-center">{error}</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
