import React from "react";
import logo from "/natureImage/nature1.jpg";
import logo1 from "/natureImage/nature2.jpg";
import logo2 from "/natureImage/nature3.jpg";
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

function Theme2() {
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
            <h3 className="font-semibold ">TUNAHAN ÇAKIL</h3>
            <p className=" font-medium">AJAN SMİTH</p>
            <p className=" font-medium ">CEO</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-around p-1 w-full gap-1 pt-3 ">
          <div className="flex w-[160px] items-center justify-center px-3 border-2   border-violet-300 rounded-xl gap-1">
            <img src={instagram} className="w-10" />
            <p className="text-sm font-medium">INSTAGRAM</p>
          </div>
          <div className="flex w-[160px] items-center justify-center px-3 border-2 border-violet-300 rounded-xl gap-1">
            <img src={whatsapp} className="w-10" />
            <p className="text-sm font-medium">WHATSAPP</p>
          </div>
          <div className="flex w-[160px] items-center justify-center px-3 border-2 border-violet-300 rounded-xl gap-1">
            <img src={facebook} className="w-10" />
            <p className="text-sm font-medium">FACEBOOK</p>
          </div>
          <div className="flex w-[160px]  items-center justify-center px-3 border-2 border-violet-300 rounded-xl gap-1">
            <img src={telegram} className="w-10" />
            <p className="text-sm font-medium">TELEGRAM</p>
          </div>
          <div className="flex w-[160px]  items-center justify-center px-3 border-2 border-violet-300 rounded-xl gap-1">
            <img src={twitter} className="w-10" />
            <p className="text-sm font-medium">TWITTER</p>
          </div>
          <div className="flex w-[160px]  items-center justify-center px-3 border-2 border-violet-300 rounded-xl gap-1">
            <img src={linkedin} className="w-10" />
            <p className="text-sm font-medium">LİNKEDİN</p>
          </div>
          <div className="flex w-[160px]  items-center justify-center px-3 border-2 border-violet-300 rounded-xl gap-1">
            <img src={gmail} className="w-10" />
            <p className="text-sm font-medium">GMAİL</p>
          </div>
          <div className="flex w-[160px]  items-center justify-center px-3 border-2 border-violet-300 rounded-xl gap-1">
            <img src={wechat} className="w-10" />
            <p className="text-sm font-medium">WECHAT</p>
          </div>
          <div className="flex w-[160px]  items-center justify-center px-3 border-2 border-violet-300 rounded-xl gap-1">
            <img src={call} className="w-10" />
            <p className="text-sm font-medium">TELEPHONE</p>
          </div>

          <div className="flex w-[160px]  items-center justify-center px-3 border-2 border-violet-300 rounded-xl gap-1">
            <img src={website} className="w-10" />
            <p className="text-sm font-medium">WEBSITE</p>
          </div>
          <div className="flex w-[160px]  items-center justify-center px-3 border-2 border-violet-300 rounded-xl gap-1">
            <img src={maps} className="w-10" />
            <p className="text-sm font-medium">MAPS</p>
          </div>
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

export default Theme2;
