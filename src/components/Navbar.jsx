import React, { useState } from "react";
import { IoMenu, IoClose, IoStorefront } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "/logo/logo3.png";
import { FaCreditCard, FaUser } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/login");
  };
  return (
    <header className="md:pt-5 py-2">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="text-emerald-500 font-bold flex gap-2">
          <a href="/">
            <img src={logo2} className="w-64  rounded-lg pt-1" />
          </a>
        </div>
        <div
          className={`nav-links duration-500  md:static absolute z-50 bg-white md:min-h-fit min-h-full left-0 ${
            isMenuOpen ? "top-[100px]" : "top-[-100%]"
          } md:w-auto w-full flex px-5`}
        >
          <ul className="flex md:flex-row flex-col z-50  md:hidden md:items-center md:gap-[4vw] gap-2 mt-5">
            <li>
              {/* <Link
                className="hover:text-gray-500 block md:hidden font-semibold text-zinc-500"
                to="/dijital-kartvizit-satin-al"
              >
                DİJİTAL KARTVİZİT SATIN AL
              </Link> */}
            </li>

            {email && (
              <li>
                <Link
                  className="flex items-center gap-x-3 md:hidden font-medium "
                  to="/dashboard/digital-business-card-update"
                >
                  <FaCreditCard size={20} /> Kartvizit İşlemleri
                </Link>
              </li>
            )}
            {email ? (
              <>
                <button
                  onClick={handleLogout}
                  className="font-medium block md:hidden  py-2 rounded-full duration-500"
                >
                  <Link to="/" className="flex items-center gap-x-3">
                    <FaUser size={18} /> Çıkış yap
                  </Link>
                </button>
              </>
            ) : (
              <>
                {/* <button className="bg-orange-300 font-medium block md:hidden text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                  <Link to="/signIn">Üye ol</Link>
                </button> */}

                <button className=" font-medium block md:hidden text-black px-5 py-2 rounded-full ">
                  <Link className="flex items-center gap-x-3" to="/login">
                    {" "}
                    <FaUser size={18} /> <span>Giriş yap</span>
                  </Link>
                </button>
              </>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          {/* <Link
            className="hover:text-gray-500 hidden md:block font-semibold text-zinc-500 mr-4"
            to="/dijital-kartvizit-satin-al"
          >
            DİJİTAL KARTVİZİT SATIN AL
          </Link> */}

          {email && (
            <Link
              className="hidden md:flex items-center gap-x-3 font-medium text-white mr-4"
              to="/dashboard/digital-business-card-update"
            >
              <FaCreditCard size={20} className="text-white" />
              Kartvizit İşlemleri
            </Link>
          )}

          {email ? (
            <button
              onClick={handleLogout}
              className=" font-medium hidden md:block text-white px-5 py-2 rounded-full  duration-500"
            >
              <Link className="flex items-center gap-x-2">
                <FaUser size={18} />
                Çıkış Yap
              </Link>
            </button>
          ) : (
            <>
              {/* <button className="bg-orange-300 font-medium hidden md:block text-white px-5 py-2 rounded-full hover:bg-[#87acec] duration-500">
                <Link to="/signIn">Üye ol</Link>
              </button> */}
              <button className="font-medium hidden md:block text-white px-5 py-2 rounded-full  duration-500">
                <Link to="/login" className="flex items-center gap-x-3">
                  {" "}
                  <FaUser size={18} />
                  Giriş Yap
                </Link>
              </button>
            </>
          )}

          {isMenuOpen ? (
            <IoClose
              onClick={toggleMenu}
              className="text-3xl cursor-pointer md:hidden mt-2"
            />
          ) : (
            <IoMenu
              onClick={toggleMenu}
              className="text-3xl cursor-pointer md:hidden mt-2"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
