import React from "react";
import logo from "/logo/footerLogo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer
      style={{
        backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)",
      }}
      className="shadow mt-20"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <img src={logo} className="h-12" alt="ecoQr Logo" />
          <ul className="flex flex-wrap justify-center md:justify-start  mb-6 mt-3 lg:mt-0 text-sm font-medium text-white sm:mb-0 ">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Anasayfa
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ecoqrcode.tr/"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-white text-center ">
          © 2024 <span>ecoQr™</span>. Tüm Hakları Saklıdır.
        </span>
        <span className="block text-sm text-white text-center mt-2">
          ecoQr, {" "}
          <a href="https://ttyazilim.com.tr/" target="_blank">
            <strong>TTYazılım</strong>
          </a>{" "}
          ürünüdür.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
