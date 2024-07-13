import React, { useEffect, useState } from "react";
import instagram from "/socialMediaLogo/instagram.png";
import telegram from "/socialMediaLogo/telegram.png";
import twitter from "/socialMediaLogo/twitter.png";
import vCard from "vcf";
import axios from "axios";
import linkedin from "/staticThemePhoto/linkedin.webp";
import whatsapp from "/staticThemePhoto/what.webp";
import rehber from "/staticThemePhoto/rehber.png";
import email from "/staticThemePhoto/email.png";
import call from "/staticThemePhoto/call.png";
import website from "/staticThemePhoto/web.png";
import banner from "/staticThemePhoto/ttuna.jpg";

function Theme1() {
  const [themeInfo, setThemeInfo] = useState("");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = window.location.href; // Mevcut sayfa URL'sini al
        const username = url.split("/").pop(); // '/' karakterinden sonraki kısmı al

        const response = await axios.get(
          ` https://ecoqrcode.com/businessCard/getDigitalCardByLinkId?linkId=${username}`
        );
        setThemeInfo(response.data);

        if (response.data && response.data.linkId) {
          const photosResponse = await axios.get(
            `https://ecoqrcode.com/businessCard/getPhotosByLink?linkId=${response.data.linkId}`
          );
          setPhotos(photosResponse.data);
        }
      } catch (error) {}
    };
    fetchData();
  }, []);
  const downloadVCF = () => {
    if (!themeInfo) return;

    const { name, surname, email: emailAddress, phoneNumber1 } = themeInfo;
    const formattedPhoneNumber = phoneNumber1.replace(/\s/g, "");

    const vcfContent = generateVCF(
      `${name}`,
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
    return null;
  }
  const profilPhoto = photos.find((photo) => photo.name === "profilphoto");
  const bannerPhoto = photos.find((photo) => photo.name === "banner");
  return (
    <div>
      {themeInfo.themeId === 1 && (
        <div className="md:w-2/4 mx-auto">
          {/*banner start*/}
          <div>
            {bannerPhoto && (
              <img
                src={bannerPhoto.url}
                className="object-cover h-[180px] w-full"
                alt="Banner"
              />
            )}
          </div>
          {/* banner finish */}
          <div className="relative   bg-gray-100 h-[110px] w-full shadow-lg">
            <div className="absolute bottom-1/2 left-2">
              {profilPhoto && (
                <img
                  src={profilPhoto.url}
                  className="rounded-full object-cover w-28 h-28"
                  alt="Profil"
                />
              )}
            </div>
            <div className="mx-auto text-center pl-28">
              <h2 className="text-xl font-medium pt-3">
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

          {/* social media links start*/}
          <div className="mt-10 flex flex-wrap gap-y-10">
            <div className="basis-1/3">
              <a
                className="flex flex-col items-center"
                onClick={downloadVCF}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={rehber} className="w-16" />
                <span className="font-medium text-sm md:text-base mt-1">
                  Rehbere ekle
                </span>
              </a>
            </div>

            {themeInfo.email !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center"
                  target="_blank"
                  href={`mailto:${themeInfo.email}`}
                >
                  <img src={email} className="w-16" />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Email
                  </span>
                </a>
              </div>
            )}

            <div className="basis-1/3">
              <a
                className="flex flex-col items-center"
                target="_blank"
                href={`tel:${themeInfo.phoneNumber1}`}
              >
                {" "}
                <img src={call} className="w-16" />
                <span className="font-medium text-sm md:text-base mt-1">
                  Ara
                </span>
              </a>
            </div>

            {themeInfo.linkedin !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center"
                  target="_blank"
                  href={`https://www.linkedin.com/in/${themeInfo.linkedin}`}
                >
                  {" "}
                  <img src={linkedin} className="w-[62px]" />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Linkedin
                  </span>
                </a>
              </div>
            )}

            {themeInfo.whatsapp !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center "
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=9${themeInfo.whatsapp.replace(
                    /\s/g,
                    ""
                  )}`}
                >
                  <img src={whatsapp} className="w-16" />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Whatshapp
                  </span>
                </a>
              </div>
            )}

            {themeInfo.website !== "" && (
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center "
                  href={themeInfo.website}
                  target="_blank"
                >
                  <img src={website} className="w-16" />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Website
                  </span>
                </a>
              </div>
            )}
          </div>
          {/* social media links finish*/}
        </div>
      )}
      {themeInfo.themeId === 2 && (
        <div className="md:w-2/6 mx-auto px-3">
          {/* banner start */}
          <div className="flex items-center p-5 justify-between">
            {profilPhoto && (
              <img
                src={profilPhoto.url}
                className="rounded-full object-cover w-28 h-28"
                alt="Profil"
              />
            )}
            <div className="text-center pr-5 text-lg font-semibold">
              <h2 className="uppercase">{themeInfo.name}</h2>
              <h2 className="uppercase">{themeInfo.surname}</h2>
            </div>
          </div>
          {/* banner end */}

          {/* descriptin start */}
          <div className="border rounded-md shadow-lg border-zinc-500 text-center text-lg font-semibold  py-2">
            <p className="uppercase">{themeInfo.description}</p>
            <p className="uppercase text-zinc-500">{themeInfo.title}</p>
          </div>
          {/* description end */}

          {/* iletişim start */}
          <div className="border shadow-lg rounded-md border-zinc-500 text-center text-lg font-semibold  py-2 mt-5">
            <p>İLETİŞİM</p>
            <div className="flex mt-5">
              <div className="basis-1/3">
                <a
                  className="flex flex-col items-center"
                  onClick={downloadVCF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={rehber} className="w-16" />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Rehbere ekle
                  </span>
                </a>
              </div>

              {themeInfo.email !== "" && (
                <div className="basis-1/3">
                  <a
                    className="flex flex-col items-center"
                    target="_blank"
                    href={`mailto:${themeInfo.email}`}
                  >
                    <img src={email} className="w-16" />
                    <span className="font-medium text-sm md:text-base mt-1">
                      Email
                    </span>
                  </a>
                </div>
              )}

              {themeInfo.phoneNumber1 !== "" && (
                <div className="basis-1/3">
                  <a
                    className="flex flex-col items-center"
                    target="_blank"
                    href={`tel:${themeInfo.phoneNumber1}`}
                  >
                    {" "}
                    <img src={call} className="w-[67px]" />
                    <span className="font-medium text-sm md:text-base mt-0.5">
                      Ara
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
          {/* iletişim finish */}

          {/* social media start */}
          <div className="border shadow-lg rounded-md border-zinc-500 text-center text-lg font-semibold  py-2 my-5">
            <p>SOSYAL MEDYA</p>
            <div className="flex flex-wrap items-center mt-5 gap-y-5">
              {themeInfo.linkedin !== "" && (
                <div className="basis-1/3">
                  <a
                    className="flex flex-col items-center"
                    target="_blank"
                    href={`https://www.linkedin.com/in/${themeInfo.linkedin}`}
                  >
                    {" "}
                    <img src={linkedin} className="w-[62px]" />
                    <span className="font-medium text-sm md:text-base mt-1">
                      Linkedin
                    </span>
                  </a>
                </div>
              )}

              {themeInfo.whatsapp !== "" && (
                <div className="basis-1/3">
                  <a
                    className="flex flex-col items-center "
                    target="_blank"
                    href={`https://api.whatsapp.com/send?phone=9${themeInfo.whatsapp.replace(
                      /\s/g,
                      ""
                    )}`}
                  >
                    <img src={whatsapp} className="w-16" />
                    <span className="font-medium text-sm md:text-base mt-1">
                      Whatshapp
                    </span>
                  </a>
                </div>
              )}

              {themeInfo.instagram !== "" && (
                <div className="basis-1/3">
                  <a
                    className="flex flex-col items-center "
                    href={`https://www.instagram.com/${themeInfo.instagram}/`}
                    target="_blank"
                  >
                    <img src={instagram} className="w-[69px]" />
                    <span className="font-medium text-sm md:text-base">
                      Instagram
                    </span>
                  </a>
                </div>
              )}

              {themeInfo.twitter !== "" && (
                <div className="basis-1/3">
                  <a
                    className="flex flex-col items-center "
                    href={`https://x.com/${themeInfo.twitter}/`}
                    target="_blank"
                  >
                    <img src={twitter} className="w-16" />
                    <span className="font-medium text-sm md:text-base mt-1">
                      Twitter
                    </span>
                  </a>
                </div>
              )}

              {themeInfo.telegram !== "" && (
                <div className="basis-1/3 ">
                  <a
                    className="flex flex-col items-center "
                    href={`https://t.me/${themeInfo.telegram}/`}
                    target="_blank"
                  >
                    <img src={telegram} className="w-16" />
                    <span className="font-medium text-sm md:text-base mt-1">
                      Telegram
                    </span>
                  </a>
                </div>
              )}
              {themeInfo.website !== "" && (
                <div className="basis-1/3">
                  <a
                    className="flex flex-col items-center "
                    href={themeInfo.website}
                    target="_blank"
                  >
                    <img src={website} className="w-16" />
                    <span className="font-medium text-sm md:text-base mt-1">
                      Website
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
          {/* social media finish */}
        </div>
      )}
    </div>
  );
}

export default Theme1;
