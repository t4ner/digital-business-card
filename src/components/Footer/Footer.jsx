import React from "react";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="rounded-lg shadow bg-emerald-200 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-bold whitespace-nowrap text-emerald-500">
              ecoQr
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className="">
              <a
                href="https://www.instagram.com/ecoqrcode.tr/"
                className="hover:underline flex items-center gap-2"
                target="_blank"
              >
                <FiInstagram className="text-xl" />
                <p>Instagram</p>
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            TTYazılım™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
