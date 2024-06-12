import React from "react";
import logo from "/natureImage/nature1.webp";
import logo1 from "/natureImage/nature2.webp";
import logo2 from "/natureImage/nature3.webp";
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

function Theme1() {
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
          <div>
            <h3 className="font-semibold ">TANER DÖKMETAŞ</h3>
            <p className=" font-medium">DEVELOPER</p>
            <p className=" font-medium ">DESCRIPTION</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 ">
          <div>
            <img src={instagram} className="w-16" />
          </div>
          <div>
            <img src={whatsapp} className="w-16" />
          </div>
          <div>
            <img src={facebook} className="w-16" />
          </div>
          <div>
            <img src={telegram} className="w-16" />
          </div>
          <div>
            <img src={twitter} className="w-16" />
          </div>
          <div>
            <img src={linkedin} className="w-16" />
          </div>
          <div>
            <img src={wechat} className="w-16" />
          </div>
          <div>
            <img src={gmail} className="w-16" />
          </div>{" "}
          <div>
            <img src={call} className="w-16" />
          </div>{" "}
          <div>
            <img src={maps} className="w-16" />
          </div>
          <div>
            <img src={website} className="w-16" />
          </div>{" "}
        </div>
        <div className="w-full space-y-2 px-2 ">
          <div className="w-full h-60 mt-5">
            <img src={logo} className="h-full object-cover w-full rounded-md" />
          </div>
          <div className="w-full h-60">
            <img
              src={logo1}
              className="h-full object-cover w-full rounded-md"
            />
          </div>
          <div className="w-full h-60">
            <img
              src={logo2}
              className="h-full object-cover w-full rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme1;
