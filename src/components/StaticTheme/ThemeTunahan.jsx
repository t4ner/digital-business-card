import React, { useEffect, useState } from "react";
import profil from "/staticThemePhoto/tunahan.jpeg";
import linkedin from "/staticThemePhoto/linkedin.webp";
import whatsapp from "/staticThemePhoto/what.webp";
import rehber from "/staticThemePhoto/rehber.png";
import email from "/staticThemePhoto/email.png";
import call from "/staticThemePhoto/call.png";
import website from "/staticThemePhoto/website.png";
import axios from "axios";
import banner from "/staticThemePhoto/ttuna.jpg";

function Theme1() {
  const [themeInfo, setThemeInfo] = useState(null); // Başlangıçta null olarak atayın

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://178.128.207.116:8082/businessCard/getDigitalCardByLinkId?linkId=tunahancakil"
        );
        setThemeInfo(response.data);
      } catch (error) {
        console.error("Veri alınırken bir hata oluştu:", error.message);
      }
    };
    fetchData();
  }, []);

  // themeInfo null veya undefined ise varlık kontrolü yapın
  const telephoneNumber = themeInfo?.phoneNumber1.replace(/\s/g, '');
  console.log(telephoneNumber);

  if (!themeInfo) {
    return null; // themeInfo yüklenene kadar null döndürün veya yüklenme göstergesi ekleyin
  }

  return (
    <div>
      <div className="md:w-1/4 mx-auto">
        <div>
          <img src={banner} className="object-cover h-[140px] w-full" />
        </div>
        <div className="relative flex  bg-gray-100 h-[110px] w-full shadow-lg">
          <div className="absolute bottom-1/2 left-2">
            <img src={profil} className="rounded-full w-28 h-28" />
          </div>
          <div className="mx-auto text-center pl-28 mt-3">
            <h2 className="text-xl font-medium">
              {themeInfo.name} {themeInfo.surname}
            </h2>
            <h4 className="text-lg font-medium text-gray-600">
              {themeInfo.description}
            </h4>
            <h4 className="text-lg font-medium text-gray-600">
              {themeInfo.title}
            </h4>
          </div>
        </div>

        <div className="flex flex-wrap justify-around mt-10 gap-x-14 gap-y-10">
          <div>
            <a href={`mailto:${themeInfo.email}`} target="_blank">
              <img src={email} className="w-16" alt="Mail" />
            </a>
          </div>{" "}
          <div>
            <a href={`tel:${telephoneNumber}`} target="_blank">
              <img src={rehber} className="w-16" alt="Rehber" />
            </a>
          </div>{" "}
          <div>
            <a href="https://tr.linkedin.com/in/tunahan-cakil" target="_blank">
              <img src={linkedin} className="w-16" alt="LinkedIn" />
            </a>
          </div>
          <div>
            <a
              href={`https://api.whatsapp.com/send?phone=9${telephoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} className="w-16" alt="WhatsApp" />
            </a>
          </div>
          <div>
            <a href={`tel:${telephoneNumber}`} target="_blank">
              <img src={call} className="w-16" alt="Telefon" />
            </a>
          </div>{" "}
          <div>
            <a href={themeInfo.website} target="_blank">
              <img src={website} className="w-16" alt="Website" />
            </a>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Theme1;
