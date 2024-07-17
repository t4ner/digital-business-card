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
import qrcode from "/socialMediaLogo/qr-code.png";
import invoice from "/socialMediaLogo/bill.png";
import warrant from "/socialMediaLogo/document.png";
import share from "/socialMediaLogo/share.png";
import credit from "/socialMediaLogo/credit-card.png";
import { TbInvoice } from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa6";
import { GoShareAndroid } from "react-icons/go";
import { MdOutlineQrCode } from "react-icons/md";
import { GrCatalog, GrDocumentText, GrGallery } from "react-icons/gr";
import { IoCloseSharp, IoDocumentTextOutline } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiGalleryLine } from "react-icons/ri";
import Swal from "sweetalert2";

function Theme1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gallerys.length);
  };

  const prevPhoto = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + gallerys.length) % gallerys.length
    );
  };

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const [themeInfo, setThemeInfo] = useState("");
  const [digitalCardId, setDigitalCardId] = useState("");
  const [bankaInformation, setBankaInformation] = useState("");
  const [invoiceInformation, setInvoiceInformation] = useState("");
  const [warrantInformation, setWarrantInformation] = useState("");
  const [catalogInformation, setCatalogInformation] = useState("");

  const [photos, setPhotos] = useState([]);
  const [gallerys, setGallerys] = useState([]);
  const urlToShare = `https://ecoqrcode.com/${themeInfo.linkId}`;
  const handleShare = () => {
    // URL'yi kopyala
    navigator.clipboard
      .writeText(urlToShare)
      .then(() => {
        // SweetAlert2 ile bilgi mesajı göster
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "URL KOPYALANDI!",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            title: "swal-title",
          },
        });
      })
      .catch((error) => {
        console.error("Kopyalama işlemi sırasında bir hata oluştu:", error);
      });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = window.location.href;
        const username = url.split("/").pop();

        const response = await axios.get(
          ` https://ecoqrcode.com/businessCard/getDigitalCardByLinkId?linkId=${username}`
        );
        setThemeInfo(response.data);
        setDigitalCardId(response.data.id);

        if (response.data && response.data.linkId) {
          const photosResponse = await axios.get(
            `https://ecoqrcode.com/businessCard/getPhotosByLink?linkId=${response.data.linkId}`
          );
          setPhotos(photosResponse.data);
        }

        if (response.data && response.data.linkId) {
          console.log("geldi galeriye");
          const galleryResponse = await axios.get(
            `https://ecoqrcode.com/businessCard/getGalleryPhotosByLink?linkId=${response.data.linkId}`
          );
          setGallerys(galleryResponse.data);
        }

        if (response.data && response.data.id) {
          const bankInformationResponse = await axios.get(
            `https://ecoqrcode.com/bankInformation/getBankInformationDigitalCardId?digitalCardId=${response.data.id}`
          );
          setBankaInformation(bankInformationResponse.data);
        }
        if (response.data && response.data.id) {
          const invoiceInformationResponse = await axios.get(
            `https://ecoqrcode.com/invoiceInformation/getInvoiceInformationByDigitalCardId?digitalCardId=${response.data.id}`
          );
          setInvoiceInformation(invoiceInformationResponse.data);
        }
        if (response.data && response.data.id) {
          const warrantInformationResponse = await axios.get(
            `https://ecoqrcode.com/warrantOfAttorney/getWarrantOfAttorneyByDigitalCardId?digitalCardId=${response.data.id}`
          );
          setWarrantInformation(warrantInformationResponse.data);
        }
        if (response.data && response.data.id) {
          const catalogInformationResponse = await axios.get(
            `https://ecoqrcode.com/businessCard/getCatalogByLink?linkId=${response.data.linkId}`
          );
          setCatalogInformation(catalogInformationResponse.data);
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
  const qrCode = photos.find((photo) => photo.name === "QRCode.png");

  return (
    <div>
      <div className="flex justify-between px-2 py-4">
        <div>
          <button
            className="py-1 rounded flex items-center justify-center"
            onClick={() => toggleSection("qrcode")}
          >
            <MdOutlineQrCode className="text-2xl" />
            <div className="text-sm font-semibold">QR Code</div>
          </button>
        </div>
        <div>
          <button
            className="py-1 rounded flex items-center justify-center"
            onClick={handleShare}
          >
            <GoShareAndroid className="text-2xl" />
            <div className="text-sm font-semibold">Paylaş</div>
          </button>
        </div>
      </div>
      {themeInfo.themeId === 1 && (
        <div className="md:w-2/4 mx-auto">
          {/*banner start*/}
          <div>
            {bannerPhoto && (
              <img
                src={bannerPhoto.url}
                className="object-cover h-[220px] w-full"
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

      <div>
        <footer className="fixed bottom-0 left-0 w-full bg-emerald-600 text-white  flex justify-around items-start">
          <button
            className="py-1 rounded  basis-1/5 flex flex-col items-center justify-center"
            onClick={() => toggleSection("banka")}
          >
            <FaRegCreditCard className="text-2xl" />
            <div className="text-xs font-medium">Banka Bilgileri</div>
          </button>
          <button
            className="py-1 rounded text-xs font-medium basis-1/5 flex flex-col items-center justify-center"
            onClick={() => toggleSection("fatura")}
          >
            <TbInvoice className="text-2xl" />
            Fatura Bilgileri
          </button>
          <button
            className="py-1 rounded text-xs font-medium basis-1/5 flex flex-col items-center justify-center"
            onClick={() => toggleSection("galeri")}
          >
            <RiGalleryLine className="text-2xl" />
            Galeri
          </button>

          <button
            className="py-1 rounded text-xs font-medium basis-1/5 flex flex-col items-center justify-center"
            onClick={() => toggleSection("katalog")}
          >
            <GrCatalog className="text-2xl" />
            Katalog
          </button>

          <button
            className="py-1 rounded text-xs font-medium basis-1/5 flex flex-col items-center justify-center"
            onClick={() => toggleSection("vekalet")}
          >
            <IoDocumentTextOutline className="text-2xl" />
            Vekalet Bilgileri
          </button>
        </footer>

        {openSection === "banka" && (
          <div
            className={`fixed bottom-0 left-0 w-full bg-white p-2 border-t transition-transform duration-500 ${
              openSection === "banka" ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <button
              className="flex w-full justify-end  text-white px-2 rounded"
              onClick={() => setOpenSection(null)}
            >
              <IoCloseSharp className="bg-red-600 rounded-md text-2xl  flex-end" />
            </button>
            <div>
              {bankaInformation.map((bank) => {
                return (
                  <div className="space-y-2 py-1" key={bank.iban}>
                    <div className="font-semibold">{bank.iban}</div>
                    <div className="font-medium text-sm">{bank.bankName}</div>
                    <div className="font-medium text-sm">
                      {bank.accountName}
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {openSection === "fatura" && (
          <div
            className={`fixed bottom-0 left-0 w-full bg-white p-2 border-t transition-transform duration-500 ${
              openSection === "fatura" ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <button
              className="flex w-full justify-end  text-white px-2 rounded"
              onClick={() => setOpenSection(null)}
            >
              <IoCloseSharp className="bg-red-600 rounded-md text-2xl  flex-end" />
            </button>
            <div>
              {invoiceInformation.map((invoice) => {
                return (
                  <div className="space-y-2 py-1" key={invoice.title}>
                    <div className="font-semibold">{invoice.title}</div>
                    <div className="font-medium text-sm">
                      Tax numarası: {invoice.taxNumber}
                    </div>
                    <div className="font-medium text-sm">
                      Tax ofisi: {invoice.taxOffice}
                    </div>
                    <div className="font-medium text-sm">
                      Adres: {invoice.address}
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {openSection === "vekalet" && (
          <div
            className={`fixed bottom-0 left-0 w-full bg-white p-2 border-t transition-transform duration-500 ${
              openSection === "vekalet" ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <button
              className="flex w-full justify-end  text-white px-2 rounded"
              onClick={() => setOpenSection(null)}
            >
              <IoCloseSharp className="bg-red-600 rounded-md text-2xl  flex-end" />
            </button>
            <div>
              {warrantInformation.map((warrant) => {
                return (
                  <div className="space-y-2 py-1" key={warrant.title}>
                    <div className="font-semibold">{warrant.title}</div>
                    <div className="font-medium text-sm">
                      {warrant.citizenId}
                    </div>
                    <div className="font-medium text-sm">
                      {warrant.registerNo}
                    </div>
                    <div className="font-medium text-sm">
                      {warrant.barAssociation}
                    </div>
                    <div className="font-medium text-sm">
                      Adres: {warrant.address}
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {openSection === "katalog" && (
          <div
            className={`fixed bottom-0 left-0 w-full bg-white p-2 border-t transition-transform duration-500 ${
              openSection === "katalog" ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <button
              className="flex w-full justify-end  text-white px-2 rounded"
              onClick={() => setOpenSection(null)}
            >
              <IoCloseSharp className="bg-red-600 rounded-md text-2xl  flex-end" />
            </button>
            <div>
              {catalogInformation.map((catalog) => {
                return (
                  <div className="space-y-2 py-1" key={catalog.name}>
                    <a
                      href={catalog.url}
                      target="_blank"
                      className="font-medium text-sm"
                    >
                      <div className="font-semibold">{catalog.name}</div>
                    </a>

                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {openSection === "galeri" && (
          <div
            className={`fixed bottom-0 left-0 w-full bg-white p-2 border-t transition-transform duration-500 ${
              openSection === "galeri" ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <button
              className="flex w-full justify-end  text-white px-2 pb-2 rounded"
              onClick={() => setOpenSection(null)}
            >
              <IoCloseSharp className="bg-red-600 rounded-md text-2xl  flex-end" />
            </button>
            <div className="flex items-center">
              <button onClick={prevPhoto} className="p-2">
                <FaArrowLeft />
              </button>
              <div className="flex-grow">
                <div>
                  {gallerys.map((gallery, index) => {
                    return (
                      index === currentIndex && (
                        <img
                          key={index}
                          src={gallery.url}
                          className="w-full h-76 object-cover rounded-md"
                          alt=""
                        />
                      )
                    );
                  })}
                </div>
              </div>
              <button onClick={nextPhoto} className="p-2">
                <FaArrowRight />
              </button>
            </div>
          </div>
        )}

        {openSection === "qrcode" && (
          <div
            className={`fixed bottom-0 left-0 w-full bg-white p-2 border-t transition-transform duration-500 ${
              openSection === "qrcode" ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <button
              className="flex w-full justify-end  text-white px-2 pb-2 rounded"
              onClick={() => setOpenSection(null)}
            >
              <IoCloseSharp className="bg-red-600 rounded-md text-2xl  flex-end" />
            </button>
            <div className="flex items-center">
              <div className="flex-grow">
                <div>
                  <img
                    src={qrCode.url}
                    className="w-full h-68 p-5 object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Theme1;
