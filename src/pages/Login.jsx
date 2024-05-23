import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import login from "/login/login.png";
function Login() {
  return (
    <div className=" h-screen ">
      <Navbar />
      <div
        className=" flex items-center justify-center  "
        style={{
          backgroundImage: "url('/banner/banner.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class="flex mb-20 mt-20 ">
          <div class="hidden lg:flex  rounded-l-xl items-center justify-center flex-1 bg-white text-black">
            <div class="max-w-md text-center ">
              <img src={login} alt="" />
            </div>
          </div>

          <div class="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center rounded-r-lg">
            <div class="max-w-md w-full p-6">
              <h1 class="text-3xl font-semibold mb-6 text-black text-center">
                Giriş yap
              </h1>
              <h1 class="text-sm font-semibold mb-6 text-gray-500 text-center">
                Digital kartvizit ile yeşil bir dünya
              </h1>
              <div class="mt-4 flex flex-col lg:flex-row items-center justify-between"></div>

              <form action="#" method="POST" class="space-y-4">
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    class="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                  >
                    Giriş Yap
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

export default Login;
