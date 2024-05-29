import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "/logo/logo.png";

const Header = () => {
  const email = localStorage.getItem("email");
  console.log("email", email);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-white  py-3">
      <nav className="flex justify-between items-center  z-50 w-[92%] mx-auto">
        <div className="text-green-300 text-4xl font-bold flex gap-2">
          <img src={logo} className="w-14 rounded-lg" />
          <Link to="/">ecoQr</Link>
        </div>
        <div
          className={`nav-links duration-500  md:static absolute bg-white md:min-h-fit min-h-full left-0 ${
            isMenuOpen ? "top-[11%]" : "top-[-100%]"
          } md:w-auto w-full flex px-5`}
        >
          <ul className="flex md:flex-row flex-col  md:hidden md:items-center md:gap-[4vw] gap-2 mt-5">
            <li>
              <Link
                className="hover:text-gray-500 block md:hidden font-semibold text-zinc-500"
                to="/dijital-kartvizit-satin-al"
              >
                DİJİTAL KARTVİZİT SATIN AL
              </Link>
            </li>
            {email && (
              <li>
                <Link
                  className="hover:text-gray-500 block md:hidden font-semibold text-zinc-500"
                  to="/dashboard/digital-business-card-update"
                >
                  ADMİN PANELİ
                </Link>
              </li>
            )}
            {email ? (
              <button className="bg-green-400 font-medium block md:hidden text-white px-5 py-2 rounded-full hover:bg-[#87acec] duration-500">
                <Link to="/">Çıkış yap</Link>
              </button>
            ) : (
              <>
                <button className="bg-purple-400 font-medium block md:hidden text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                  <Link to="/signIn">Üye ol</Link>
                </button>
                <button className="bg-green-400 font-medium block md:hidden text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                  <Link to="/login">Giriş yap</Link>
                </button>
              </>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Link
            className="hover:text-gray-500 hidden md:block font-semibold text-zinc-500 mr-4"
            to="/dijital-kartvizit-satin-al"
          >
            DİJİTAL KARTVİZİT SATIN AL
          </Link>

          {email && (
            <Link
              className="hover:text-gray-500 hidden md:block font-semibold text-zinc-500 mr-4"
              to="/dashboard/digital-business-card-update"
            >
              ADMİN PANELİ
            </Link>
          )}

          {email ? (
            <button className="bg-green-400 font-medium hidden md:block text-white px-5 py-2 rounded-full hover:bg-[#87acec] duration-500">
              <Link to="/">Çıkış yap</Link>
            </button>
          ) : (
            <>
              <button className="bg-purple-400 font-medium hidden md:block text-white px-5 py-2 rounded-full hover:bg-[#87acec] duration-500">
                <Link to="/signIn">Üye ol</Link>
              </button>
              <button className="bg-green-400 font-medium hidden md:block text-white px-5 py-2 rounded-full hover:bg-[#87acec] duration-500">
                <Link to="/login">Giriş yap</Link>
              </button>
            </>
          )}

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
