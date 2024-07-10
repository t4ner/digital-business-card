import React, { useEffect, useState } from "react";
import vCard from "vcf";
import axios from "axios";

import profil from "/staticThemePhoto/tunahan.jpeg";
import linkedin from "/staticThemePhoto/linkedin.webp";
import whatsapp from "/staticThemePhoto/what.webp";
import rehber from "/staticThemePhoto/rehber.png";
import email from "/staticThemePhoto/email.png";
import call from "/staticThemePhoto/call.png";
import website from "/staticThemePhoto/website.png";
import banner from "/staticThemePhoto/ttuna.jpg";

function Theme1() {
  const [themeInfo, setThemeInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://178.128.207.116:8082/businessCard/getDigitalCardByLinkId?linkId=tunahancakil"
        );
        setThemeInfo(response.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const downloadVCF = () => {
    if (!themeInfo) return; // Eğer themeInfo henüz yüklenmediyse işlem yapmayın

    const { name, surname, email: emailAddress, phoneNumber1 } = themeInfo;
    const formattedPhoneNumber = phoneNumber1.replace(/\s/g, "");

    const vcfContent = generateVCF(
      `${name} Cakil`,
      emailAddress,
      formattedPhoneNumber
    );

    const blob = new Blob([vcfContent], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "contact.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateVCF = (name, email, phone) => {
    const vcard = new vCard();
    vcard.add("fn", name);
    vcard.add("email", email);
    vcard.add("tel", phone);

    return vcard.toString();
  };

  if (!themeInfo) {
    return null; // themeInfo yüklenene kadar null döndürün veya yüklenme göstergesi ekleyin
  }

  return (
    <div className="md:w-1/4 mx-auto">
      <div>
        <img
          src={banner}
          className="object-cover h-[140px] w-full"
          alt="Banner"
        />
      </div>
      <div className="relative flex  bg-gray-100 h-[110px] w-full shadow-lg">
        <div className="absolute bottom-1/2 left-2">
          <img src={profil} className="rounded-full w-28 h-28" alt="Profil" />
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

      <div className="flex-col flex-wrap  mt-10 space-y-10">
        <div className="flex gap-x-14 justify-around">
          <div>
            <a
              href={`mailto:${themeInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={email} className="w-16" alt="Mail" />
            </a>
          </div>
          <div>
            <a onClick={downloadVCF} target="_blank" rel="noopener noreferrer">
              <img src={rehber} className="w-16" alt="Rehber" />
            </a>
          </div>
          <div>
            <a
              href={`https://tr.linkedin.com/in/tunahan-cakil`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} className="w-16" alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="flex gap-x-14 justify-around">
          <div>
            <a
              href={`https://api.whatsapp.com/send?phone=9${themeInfo.phoneNumber1.replace(
                /\s/g,
                ""
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} className="w-16" alt="WhatsApp" />
            </a>
          </div>
          <div>
            <a
              href={`tel:${themeInfo.phoneNumber1}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={call} className="w-16" alt="Telefon" />
            </a>
          </div>
          <div>
            <a
              href={themeInfo.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={website} className="w-16" alt="Website" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme1;
