// import React, { useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
// import drought from "/drought/kuraklık3.png";

// function SignIn() {
//   // State'lerin tanımlanması
//   const [formData, setFormData] = useState({
//     email: "",
//     name: "",
//     surname: "",
//     password: "",
//     username: "",
//   });

//   // Input değerlerinin değişimlerini takip eden fonksiyon
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Form submit işlemi
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Axios ile API'ye POST isteği gönderme
//       const response = await axios.post(
//         "http://178.128.207.116:8089/api/auth/signup",
//         formData
//       );
//       console.log("Response:", response.data);
//       // Başarılı mesajı gösterebilirsiniz
//     } catch (error) {
//       console.error("Error:", error);
//       // Hata mesajını gösterebilirsiniz
//     }
//   };
//   console.log(formData);
//   return (
//     <div className="h-screen">
//       <Navbar />
//       <div
//         className="flex items-center justify-center"
//         style={{
//           backgroundImage: "url('/drought/kuraklık.jpg')",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//         }}
//       >
//         <div className="flex py-20">
//           <div className="hidden lg:flex rounded-l-xl items-center justify-center flex-1 bg-white text-black">
//             <div className="max-w-md h-full text-center">
//               <img
//                 src={drought}
//                 className="h-full rounded-l-lg"
//                 alt="drought"
//               />
//             </div>
//           </div>

//           <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center rounded-r-lg">
//             <div className="max-w-md w-full p-6">
//               <h1 className="text-3xl font-semibold mb-6 text-black text-center">
//                 Üye ol
//               </h1>
//               <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
//                 Digital kartvizit ile yeşil bir dünyaya adım at
//               </h1>

//               <form onSubmit={handleSubmit}>
//                 <div className="mt-4">
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     İsim
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
//                   />
//                 </div>

//                 <div className="mt-4">
//                   <label
//                     htmlFor="surname"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Soyisim
//                   </label>
//                   <input
//                     type="text"
//                     id="surname"
//                     name="surname"
//                     value={formData.surname}
//                     onChange={handleInputChange}
//                     className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
//                   />
//                 </div>

//                 <div className="mt-4">
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="text"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
//                   />
//                 </div>

//                 <div className="mt-4">
//                   <label
//                     htmlFor="username"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Kullanıcı ismi
//                   </label>
//                   <input
//                     type="text"
//                     id="username"
//                     name="username"
//                     value={formData.username}
//                     onChange={handleInputChange}
//                     className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
//                   />
//                 </div>

//                 <div className="mt-4">
//                   <label
//                     htmlFor="password"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Şifre
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
//                   />
//                 </div>

//                 <div>
//                   <button
//                     type="submit"
//                     className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
//                   >
//                     Üye ol
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default SignIn;

import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import drought from "/drought/kuraklık3.png";
function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
    username: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://178.128.207.116:8089/api/auth/signup",
        formData
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log(formData);
  return (
    <div>
      <Navbar />
      <div
        className="flex items-center justify-center h-screen  "
        style={{ backgroundImage: "url('/drought/kuraklık.jpg')" }}
      >
        <div className="bg-orange-300  border border-slate-499 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
          <h1 className="text-3xl md:text-4xl text-white font-bold text-center mb-6">
            Kayıt ol
          </h1>
          <div className="flex-col md:flex md:flex-row md:gap-10">
            <div className="relative my-4 pb-2">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="block w-72 py-1 pt-5  px-0  text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
              />
              <label
                htmlFor="name"
                className="absolute font-medium text-xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mt-1"
              >
                İsim
              </label>
            </div>
            <div className="relative my-4">
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                className="block w-72 py-1 pt-5 px-0  text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
              />
              <label
                htmlFor="surname"
                className="absolute font-medium text-xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mt-1"
              >
                Soyisim
              </label>
            </div>
          </div>
          <div className="flex-col md:flex md:flex-row md:gap-10">
            <div className="relative my-4">
              <input
                type="mail"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="block w-72 py-1 pt-5 px-0  text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
              />
              <label
                htmlFor="email"
                className="absolute font-medium text-xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mt-1"
              >
                Email
              </label>
            </div>
            <div className="relative my-4">
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="block w-72 py-1 pt-5 px-0  text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
              />
              <label
                htmlFor="username"
                className="absolute font-medium text-xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mt-1"
              >
                Kullanıcı ismi
              </label>
            </div>
          </div>

          <div className="relative my-4">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="block w-72 py-1 pt-5 px-0  text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
            />
            <label
              htmlFor="password"
              className="absolute font-medium text-xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-400 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mt-1"
            >
              Şifre
            </label>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full font-medium mb-4 text-lg mt-6 rounded-full bg-white text-orange-300 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
          >
            Kayıt Ol
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
