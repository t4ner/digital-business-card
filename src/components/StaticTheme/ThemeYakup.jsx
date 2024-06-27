import React from "react";
import logo from "/staticThemePhoto/yakup.jpeg";
import logo1 from "/staticThemePhoto/yakup2.jpeg";
import logo2 from "/staticThemePhoto/yakup3.jpeg";

import instagram from "/socialMediaLogo/instagram.svg";
import facebook from "/socialMediaLogo/facebook.svg";
import linkedin from "/socialMediaLogo/linkedin.svg";
import telegram from "/socialMediaLogo/telegram.svg";
import twitter from "/socialMediaLogo/twitter.svg";
import whatsapp from "/socialMediaLogo/whatsapp.svg";
import wechat from "/socialMediaLogo/wechat.svg";
import gmail from "/socialMediaLogo/gmail2.svg";
import website from "/socialMediaLogo/website.svg";
import maps from "/socialMediaLogo/maps.svg";
import call from "/socialMediaLogo/call.svg";

function ThemeYakup() {
  

  return (
    <div className="bg-zinc-350 py-2 flex p-2 justify-center ">
      <div className=" bg-white rounded-xl md:w-1/3 flex flex-col items-center justify-center space-y-1  shadow-[0_0px_50px_-15px_rgba(0,0,0,.9)] shadow-green-600">
        <div className="flex items-center space-x-10">
          <div className="mb-3 mt-2 w-32 h-32">
            <img
              src={logo}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="text-center">
            <h3 className="font-semibold ">YAKUP ŞAMİL ÖĞÜT</h3>
            <p className=" font-medium">SALES MANAGER</p>
            <p className=" font-medium ">ECOQR</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 ">
          <div>
            <a href="https://www.instagram.com/yakupsamilogut/" target="_blank">
              <img src={instagram} className="w-16" />
            </a>
          </div>
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=05446694422"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} className="w-16" alt="WhatsApp" />
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} className="w-16" alt="Facebook" />
            </a>
          </div>
          <div>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={telegram} className="w-16" alt="Telegram" />
            </a>
          </div>
          <div>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} className="w-16" alt="Twitter" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} className="w-16" alt="LinkedIn" />
            </a>
          </div>
      
          <div>
            <a href="mailto:yakupsamilogut@gmail.com" target="_blank">
              <img src={gmail} className="w-16" alt="Mail" />
            </a>
          </div>{" "}
          <div>
            <a href="tel:+905446694422">
              <img src={call} className="w-16" />
            </a>
          </div>{" "}
          <div>
            <a
              href="https://maps.google.com/?q=ttyazilim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={maps} className="w-16" alt="Haritalar" />
            </a>
          </div>
          <div>
            <a href="https://www.leonindustry.com" target="_blank">
              {" "}
              <img src={website} className="w-16" />
            </a>
          </div>{" "}
        </div>
        <div className="w-full space-y-2 px-2 ">
          <div className="w-full h-60 mt-5">
            <img src={logo1} className="h-full object-cover w-full rounded-md" />
          </div>
          <div className="w-full h-60">
            <img
              src={logo2}
              className="h-full object-cover w-full rounded-md"
            />
          </div>
          <div className="w-full h-60">
            <img
              src={logo}
              className="h-full object-cover w-full rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeYakup;
