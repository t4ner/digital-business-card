import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-white mt-2">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="text-green-300 text-4xl font-bold">greenCode</div>
        <div
          className={`nav-links duration-500  md:static absolute bg-white md:min-h-fit min-h-full left-0 ${
            isMenuOpen ? "top-[9%]" : "top-[-100%]"
          } md:w-auto w-full flex px-5`}
        >
          <ul className="flex md:flex-row flex-col  md:hidden md:items-center md:gap-[4vw] gap-2 mt-5">
            <li>
              <a
                className="hover:text-gray-500 block md:hidden font-semibold text-zinc-500"
                to="/"
              >
                DİJİTAL KARTVİZİT SATIN AL
              </a>
            </li>
            <li>
              <button className="bg-purple-400 block md:hidden text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                Üye ol
              </button>
            </li>
            <li>
              <button className="bg-green-400 block md:hidden text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                Giriş yap
              </button>
            </li>{" "}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <a
            className="hover:text-gray-500 hidden md:block font-semibold text-zinc-500 mr-4"
            href="#"
          >
            DİJİTAL KARTVİZİT SATIN AL
          </a>
          <button className="bg-purple-400 hidden md:block text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
            Üye ol
          </button>
          <button className="bg-green-400 hidden md:block text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
            Giriş yap
          </button>

          {isMenuOpen ? (
            <IoClose
              onClick={toggleMenu}
              className="text-3xl cursor-pointer md:hidden"
            />
          ) : (
            <IoMenu
              onClick={toggleMenu}
              className="text-3xl cursor-pointer md:hidden"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
