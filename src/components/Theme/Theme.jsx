import React, { useEffect, useState } from "react";
import instagram from "/socialMediaLogo/instagram.png";
import telegram from "/socialMediaLogo/telegram.png";
import twitter from "/socialMediaLogo/twitter.png";
import cat from "/socialMediaLogo/cat.png";
import gallery from "/socialMediaLogo/gallerys.svg";
import warrant from "/socialMediaLogo/warrant.svg";
import doc from "/socialMediaLogo/docum.svg";
import vCard from "vcf";
import axios from "axios";
import linkedin from "/staticThemePhoto/linkedin.webp";
import whatsapp from "/staticThemePhoto/what.webp";
import rehber from "/staticThemePhoto/rehber.png";
import email from "/staticThemePhoto/email.png";
import call from "/staticThemePhoto/call.png";
import website from "/socialMediaLogo/webs.png";
import ImageGallery from "react-image-gallery";
import { FaCreditCard, FaQrcode } from "react-icons/fa6";
import { IoCloseSharp, IoDocument } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight, FaShareAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import "ldrs/quantum";
import { GrCatalog } from "react-icons/gr";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Theme1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const gallerys1 = [
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    },
    // Diğer resim URL'leri
  ];

  const [isBankaBilgileriOpen, setIsBankaBilgileriOpen] = useState(false);

  const toggleBankaBilgileri = () => {
    setIsBankaBilgileriOpen(!isBankaBilgileriOpen);
    setIsVekaletBilgileriOpen(false);
    setIsGaleriBilgileriOpen(false);
    setIsKatalogBilgileriOpen(false);
    setIsFaturaBilgileriOpen(false);
    setIsQrcodeBilgileriOpen(false);
  };
  const [isVekaletBilgileriOpen, setIsVekaletBilgileriOpen] = useState(false);

  const toggleVekaletBilgileri = () => {
    setIsVekaletBilgileriOpen(!isVekaletBilgileriOpen);
    setIsGaleriBilgileriOpen(false);
    setIsKatalogBilgileriOpen(false);
    setIsFaturaBilgileriOpen(false);
    setIsBankaBilgileriOpen(false);
    setIsQrcodeBilgileriOpen(false);
  };
  const [isGaleriBilgileriOpen, setIsGaleriBilgileriOpen] = useState(false);

  const toggleGaleriBilgileri = () => {
    setIsGaleriBilgileriOpen(!isGaleriBilgileriOpen);
    setIsKatalogBilgileriOpen(false);
    setIsFaturaBilgileriOpen(false);
    setIsBankaBilgileriOpen(false);
    setIsVekaletBilgileriOpen(false);
    setIsQrcodeBilgileriOpen(false);
  };

  const [isKatalogBilgileriOpen, setIsKatalogBilgileriOpen] = useState(false);

  const toggleKatalogBilgileri = () => {
    setIsKatalogBilgileriOpen(!isKatalogBilgileriOpen);
    setIsFaturaBilgileriOpen(false);
    setIsBankaBilgileriOpen(false);
    setIsVekaletBilgileriOpen(false);
    setIsGaleriBilgileriOpen(false);
    setIsQrcodeBilgileriOpen(false);
  };

  const [isFaturaBilgileriOpen, setIsFaturaBilgileriOpen] = useState(false);

  const toggleFaturaBilgileri = () => {
    setIsFaturaBilgileriOpen(!isFaturaBilgileriOpen);
    setIsBankaBilgileriOpen(false);
    setIsVekaletBilgileriOpen(false);
    setIsGaleriBilgileriOpen(false);
    setIsKatalogBilgileriOpen(false);
    setIsQrcodeBilgileriOpen(false);
  };

  const [isQrcodeBilgileriOpen, setIsQrcodeBilgileriOpen] = useState(false);

  const toggleQrcodeBilgileri = () => {
    setIsQrcodeBilgileriOpen(!isQrcodeBilgileriOpen);
    setIsBankaBilgileriOpen(false);
    setIsFaturaBilgileriOpen(false);
    setIsVekaletBilgileriOpen(false);
    setIsGaleriBilgileriOpen(false);
    setIsKatalogBilgileriOpen(false);
  };
  const [themeInfo, setThemeInfo] = useState("");
  const [digitalCardId, setDigitalCardId] = useState("");
  const [bankaInformation, setBankaInformation] = useState("");
  const [invoiceInformation, setInvoiceInformation] = useState("");
  const [warrantInformation, setWarrantInformation] = useState("");
  const [catalogInformation, setCatalogInformation] = useState("");
  const [loading, setLoading] = useState(true);
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
      } catch (error) {
      } finally {
        setLoading(false); // Veri yüklendiğinde loading'i kapat
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <l-quantum size="110" speed="1.75" color="green"></l-quantum>
      </div>
    );
  }
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
  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("IBAN başarıyla panoya kopyalandı:", text);
        // Kullanıcıya başarılı bildirimi göster
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "IBAN KOPYALANDI!",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            title: "swal-title",
          },
        });
      })
      .catch((err) => {
        console.error("IBAN kopyalanırken hata oluştu:", err);
        // Kullanıcıya hata bildirimi göster
        Swal.fire({
          icon: "error",
          title: "Kopyalama Başarısız!",
          text: "IBAN bilgisi kopyalanırken bir hata oluştu. Lütfen tekrar deneyin.",
          confirmButtonText: "Tamam",
        });
      });
  }
  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + gallerys.length) % gallerys.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % gallerys.length;
    setCurrentIndex(newIndex);
  };

  console.log("gallerys", gallerys);
  return (
    <div className="md:w-2/4 mx-auto">
      <div className="flex justify-between px-2 py-2">
        <div>
          <button
            className="py-1 rounded flex items-center justify-center"
            onClick={toggleQrcodeBilgileri}
          >
            <FaQrcode className="text-xl mr-1" />
            <div className="text-sm font-semibold">QR Code</div>
          </button>
        </div>
        <div>
          <button
            className="py-1 rounded flex items-center justify-center"
            onClick={handleShare}
          >
            <FaShareAlt className="text-xl mr-1" />
            <div className="text-sm font-semibold">Paylaş</div>
          </button>
        </div>
      </div>
      {themeInfo.themeId === 1 && (
        <div className="">
          {/*banner start*/}
          <div className="h-[210px] w-full">
            {bannerPhoto && (
              <img
                src={bannerPhoto.url}
                className="object-fill h-full w-full"
                alt="Banner"
              />
            )}
          </div>
          {/* banner finish */}
          <div className="relative bg-zinc-200 h-auto py-4 w-full shadow-lg">
            <div className="absolute bottom-1/2 left-2">
              {profilPhoto && (
                <img
                  src={profilPhoto.url}
                  className="rounded-full object-cover w-28 h-28"
                  alt="Profil"
                />
              )}
            </div>
            <div className="mx-auto text-center pl-28 ">
              <h2 className="text-xl font-medium ">
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
                <img
                  src={rehber}
                  className="w-[56px] h-[56px] drop-shadow-[0px_0px_6px_rgba(0,0,0,1)]"
                />
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
                  <img
                    src={email}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_6px_rgba(0,0,0,1)]"
                  />
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
                <img
                  src={call}
                  className="w-[56px] h-[56px] drop-shadow-[0px_0px_6px_rgba(0,0,0,1)]"
                />
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
                  <img
                    src={linkedin}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_6px_rgba(0,0,0,1)]"
                  />
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
                  <img
                    src={whatsapp}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_6px_rgba(0,0,0,1)]"
                  />
                  <span className="font-medium text-sm md:text-base mt-1">
                    Whatshapp
                  </span>
                </a>
              </div>
            )}

            {themeInfo.website !== "" && (
              <div className="basis-1/3 ">
                <a
                  className="flex flex-col items-center"
                  href={themeInfo.website}
                  target="_blank"
                >
                  <img
                    src={website}
                    className="w-[56px] h-[56px] drop-shadow-[0px_0px_6px_rgba(0,0,0,1)]"
                  />
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
        <footer className="footer flex items-center justify-around">
          <div>
            <button
              className="banka-button flex flex-col items-center justify-center  text-xs font-medium"
              onClick={toggleBankaBilgileri}
            >
              <FaCreditCard className="text-2xl pb-1" />
              <span className="pt-1">Banka</span>
            </button>

            <div
              className={`banka-bilgileri p-5 border bg-white shadow-xl ${
                isBankaBilgileriOpen ? "open" : ""
              }`}
            >
              <div>
                {bankaInformation.map((bank) => {
                  return (
                    <div className="space-y-2 py-1" key={bank.iban}>
                      <div className="font-semibold">{bank.iban}</div>
                      <div className="font-medium text-sm">{bank.bankName}</div>
                      <div className="font-medium text-sm">
                        {bank.accountName}
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="px-3 py-1 bg-emerald-600 text-white rounded-md text-xs font-medium focus:outline-none"
                          onClick={() => copyToClipboard(bank.iban)}
                        >
                          IBAN'I KOPYALA
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <button
              className="banka-button flex flex-col items-center justify-center  text-xs font-medium"
              onClick={toggleGaleriBilgileri}
            >
              <img src={gallery} className="w-[32px] pt-1" />
              <p className="mb-2">Galeri</p>
            </button>

            <div
              className={`banka-bilgileri ${
                isGaleriBilgileriOpen ? "open" : ""
              }`}
            >
              {/* galeri */}
              <div className="h-[300px] w-full m-auto relative group overflow-hidden">
                {gallerys.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={`Image ${index}`}
                    className={`w-full h-full rounded-2xl absolute top-0 left-0 transition-opacity duration-500 ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      zIndex: index === currentIndex ? 1 : 0,
                    }}
                  />
                ))}
                <div
                  className="absolute top-1/2 transform -translate-y-1/2 left-2 text-2xl rounded-full bg-black/20 text-white cursor-pointer z-10"
                  onClick={prevSlide}
                >
                  <BsChevronCompactLeft size={30} />
                </div>
                <div
                  className="absolute top-1/2 transform -translate-y-1/2 right-2 text-2xl rounded-full bg-black/20 text-white cursor-pointer z-10"
                  onClick={nextSlide}
                >
                  <BsChevronCompactRight size={30} />
                </div>
              </div>
              {/* galeri */}
            </div>
          </div>

          <div>
            <button
              className="banka-button flex flex-col items-center justify-center  text-xs font-medium"
              onClick={toggleKatalogBilgileri}
            >
              <GrCatalog size={24} className="  text-black" />
              Katalog
            </button>

            <div
              className={`banka-bilgileri p-5 border bg-white shadow-xl ${
                isKatalogBilgileriOpen ? "open" : ""
              }`}
            >
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
          </div>

          <div>
            <button
              className="banka-button flex flex-col items-center justify-center  text-xs font-medium"
              onClick={toggleFaturaBilgileri}
            >
              <img src={doc} className="w-[29px]" />
              Fatura
            </button>

            <div
              className={`banka-bilgileri p-5 border bg-white shadow-xl ${
                isFaturaBilgileriOpen ? "open" : ""
              }`}
            >
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
          </div>
          <div>
            <button
              className="banka-button flex flex-col items-center justify-center  text-xs font-medium"
              onClick={toggleVekaletBilgileri}
            >
              <IoDocument className="text-[29px]" />
              Vekalet
            </button>

            <div
              className={`banka-bilgileri p-5 border bg-white shadow-xl ${
                isVekaletBilgileriOpen ? "open" : ""
              }`}
            >
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
          </div>
          <div
            className={`banka-bilgileri p-5 border bg-white shadow-xl ${isQrcodeBilgileriOpen ? "open" : ""}`}
          >
            <div className="flex items-center">
              <div className="flex-grow">
                <div className=" md:h-[600px] 2xl:h-[700px] w-full ">
                  <img
                    src={qrCode.url}
                    className="w-full h-full p-5 object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Theme1;
