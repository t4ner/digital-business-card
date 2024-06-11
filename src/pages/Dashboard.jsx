import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-gradient-to-t from-emerald-300 to-green-700 p-5  pt-8 relative duration-300`}
      >
        {" "}
        <img
          src="/dashboard/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
       border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 w-12 md:w-auto pr-2 md:pr-0 items-center">
          <Link to="/">
            <img
              src="/logo/logo.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
          </Link>
        </div>
        <ul className="pt-10 space-y-4">
          <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-base items-center gap-x-4 ">
            <Link to="/">
              {" "}
              <img src={"/dashboard/Chart_fill.png"} />
            </Link>
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 font-medium md:text-lg`}
            >
              <Link to="/">Anasayfa</Link>
            </span>
          </li>
          <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-base items-center gap-x-4 ">
            <Link to="digital-business-card-update" className="w-10 md:w-auto">
              <img src={"/dashboard/User.png"} />
            </Link>
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 font-medium md:text-lg`}
            >
              <Link to="digital-business-card-update">
                Kartvizit güncelleme
              </Link>
            </span>
          </li>
          <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-base items-center gap-x-4 ">
            <Link to="setting">
              <img src={"/dashboard/Setting.png"} />
            </Link>
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 font-medium md:text-lg`}
            >
              <Link to="setting">Ayarlar</Link>
            </span>
          </li>
        </ul>
      </div>
      <div className=" flex-1 ">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
