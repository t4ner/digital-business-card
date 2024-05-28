import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [open, setOpen] = useState(true);
  
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-gradient-to-t from-emerald-300 to-green-700 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="/dashboard/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
       border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="/logo/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>

        <ul className="pt-10 space-y-4">
          <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ">
            <img src={"/dashboard/Chart_fill.png"} />
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 font-medium text-lg`}
            >
              <Link to="/">Anasayfa</Link>
            </span>
          </li>
          <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ">
            <img src={"/dashboard/User.png"} />
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 font-medium text-lg`}
            >
              Kartvizit güncelleme
            </span>
          </li>
          <li className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ">
            <img src={"/dashboard/Setting.png"} />
            <span
              className={`${
                !open && "hidden"
              } origin-left duration-200 font-medium text-lg`}
            >
              Ayarlar
            </span>
          </li>
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
}

export default Dashboard;
