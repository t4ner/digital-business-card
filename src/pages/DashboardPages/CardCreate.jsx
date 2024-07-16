import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import classNames from "classnames";
import instagram from "/socialMediaLogo/instagram.svg";
import twitter from "/socialMediaLogo/twitter.svg";
import telegram from "/socialMediaLogo/telegram.svg";
import facebook from "/socialMediaLogo/facebook.svg";
import whatsapp from "/socialMediaLogo/whatsapp.svg";
import ciceksepeti from "/socialMediaLogo/ciceksepeti.png";
import discord from "/socialMediaLogo/discord.svg";
import linkedin from "/socialMediaLogo/linkedin.svg";
import wechat from "/socialMediaLogo/wechat.svg";
import theme1 from "/themes/10.png";
import Swal from "sweetalert2";
import theme2 from "/themes/11.png";
import axios from "axios";
import { stepperValidation } from "./StepperValidation";

function Stepper() {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [catalog, setCatalog] = useState("");
  const [digitalCardId, setDigitalCardId] = useState("");

  console.log(digitalCardId, "digitalCardId");
  return (
    <div>
      <Formik
        validationSchema={stepperValidation}
        initialValues={{
          step: 1,
          // step 1
          linkId: "",
          title: "",
          description: "",
          name: "",
          surname: "",
          phoneNumber1: "",
          phoneNumber2: "",
          instagram: "",
          linkedin: "",
          website: "",
          twitter: "",
          facebook: "",
          location: "",
          whatsapp: "",
          wechat: "",
          telegram: "",
          themeId: 0,
          email: "",
          discord: "",
          whatsappBusiness: "",
          cicekSepeti: "",
          sahibinden: "",
          trendyol: "",
          hepsiburada: "",
          //step2
          bankInformationList: [
            {
              iban: "",
              bankName: "",
              accountName: "",
            },
            {
              iban: "",
              bankName: "",
              accountName: "",
            },
            {
              iban: "",
              bankName: "",
              accountName: "",
            },
            {
              iban: "",
              bankName: "",
              accountName: "",
            },
            {
              iban: "",
              bankName: "",
              accountName: "",
            },
          ],
          invoiceInformationList: [
            {
              title: "",
              address: "",
              taxNumber: "",
              taxOffice: "",
            },
          ],
          warrantOfAttorneyDtoList: [
            {
              title: "",
              address: "",
              citizenId: "",
              registerNo: "",
              barAssociation: "",
            },
          ],
        }}
        onSubmit={(values, actions) => {}}
      >
        {({ values, setFieldValue, isValid, dirty }) => {
          const prevHandle = (e) => {
            setFieldValue("step", values.step - 1);
          };
          const nextHandle = async (e) => {
            setFieldValue("step", values.step + 1);
            if (image1) {
              sendImageToServer(image1, values.linkId, "profilphoto");
            }
            if (image2) {
              sendImageToServer(image2, values.linkId, "banner");
            }
            if (catalog) {
              sendImageToServer(catalog, values.linkId, "catalog");
            }
            const requestData = { ...values };
            delete requestData.step;
            delete requestData.bankInformationList;
            delete requestData.invoiceInformationList;
            delete requestData.warrantOfAttorneyDtoList;

            console.log("requestData", requestData);
            localStorage.setItem("email", values.email);
            const token = localStorage.getItem("token");
            console.log(token, "token");
            const headers = {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            };
            try {
              const response = await axios.post(
                "https://ecoqrcode.com/businessCard/createDigiCard",
                requestData,
                { headers: headers }
              );
              setDigitalCardId(response.data.digitalCardId);
              Swal.fire({
                icon: "success",
                title: "Başarılı!",
                text: "Kartınız başarıyla oluşturuldu!",
              });
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Bir hata oluştu. Lütfen tekrar deneyin.",
              });
            }
          };

          console.log(values);
          const handleImage1Change = (event) => {
            const file = event.target.files[0];
            setImage1(file);
          };

          const handleImage2Change = (event) => {
            const file = event.target.files[0];
            setImage2(file);
          };

          const handleCatalog = (event) => {
            const file = event.target.files[0];
            setCatalog(file);
          };

          const sendImageToServer = async (image, linkId, name) => {
            try {
              const formData = new FormData();
              formData.append("file", image);
              formData.append("linkId", values.linkId);
              formData.append("name", name);
              const jsonData = {
                file: image,
                linkId: values.linkId,
                name: name,
              };
              const token = localStorage.getItem("token");
              const headers = {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              };

              const response = await axios.post(
                "https://ecoqrcode.com/businessCard/upload",
                formData,
                { headers }
              );
              console.log("Yükleme başarılı:", response.data);
            } catch (error) {
              console.error(
                "Yükleme hatası:",
                error.response ? error.response.data : error.message
              );
              Swal.fire({
                icon: "error",
                title: "Hata",
                text: "PDF dokümanı yüklenemedi.",
              });
            }
          };

          const submitHandle = async (e) => {
            e.preventDefault(); // Prevent default form submission

            // Prepare bank information with digitalCardId
            const bankInformation = values.bankInformationList
              .filter(
                (bankInfo) =>
                  bankInfo.iban && bankInfo.bankName && bankInfo.accountName
              )
              .map((bankInfo) => ({
                ...bankInfo, // Spread existing bank info
                digitalCardId: digitalCardId, // Add digitalCardId
              }));

            console.log("bankInformation", bankInformation);

            // Prepare warrant of attorney with digitalCardId
            const warrantOfAttorney = values.warrantOfAttorneyDtoList
              .filter(
                (warrant) =>
                  warrant.title && warrant.address && warrant.citizenId // Add other necessary checks
              )
              .map((warrant) => ({
                ...warrant, // Spread existing warrant info
                digitalCardId: digitalCardId, // Add digitalCardId
              }));

            console.log("warrantOfAttorney", warrantOfAttorney);

            // Prepare invoice information with digitalCardId
            const invoiceInformation = values.invoiceInformationList
              .filter(
                (invoice) =>
                  invoice.title &&
                  invoice.address &&
                  invoice.taxNumber &&
                  invoice.taxOffice // Add other necessary checks
              )
              .map((invoice) => ({
                ...invoice, // Spread existing invoice info
                digitalCardId: digitalCardId, // Add digitalCardId
              }));

            console.log("invoiceInformation", invoiceInformation);

            const token = localStorage.getItem("token");
            const headers = {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            };

            try {
              // Post bank information
              const bankResponse = await axios.post(
                "https://ecoqrcode.com/bankInformation/createBankInformation",
                bankInformation,
                { headers }
              );
              console.log("Bank Response:", bankResponse.data);
              // Handle success for bank information

              // Post warrant of attorney
              const warrantResponse = await axios.post(
                "https://ecoqrcode.com/warrantOfAttorney/createWarrantOfAttorney",
                warrantOfAttorney,
                { headers }
              );
              console.log("Warrant Response:", warrantResponse.data);
              // Handle success for warrant of attorney

              // Post invoice information
              const invoiceResponse = await axios.post(
                "https://ecoqrcode.com/invoiceInformation/createInvoiceInformation", // Update this URL as needed
                invoiceInformation,
                { headers }
              );
              console.log("Invoice Response:", invoiceResponse.data);
              // Handle success for invoice information
            } catch (error) {
              console.error("Error:", error);
              // Handle error (e.g., show an error message)
            }
          };

          const [showInputInstagram, setShowInputInstagram] = useState(false);
          const showInstagram = () => {
            setShowInputInstagram(!showInputInstagram);
          };
          const [showInputX, setShowInputX] = useState(false);
          const showX = () => {
            setShowInputX(!showInputX);
          };
          const [showInputTelegram, setShowInputTelegram] = useState(false);
          const showTelegram = () => {
            setShowInputTelegram(!showInputTelegram);
          };
          const [showInputDiscord, setShowInputDiscord] = useState(false);
          const showDiscord = () => {
            setShowInputDiscord(!showInputDiscord);
          };
          const [showInputFacebook, setShowInputFacebook] = useState(false);
          const showFacebook = () => {
            setShowInputFacebook(!showInputFacebook);
          };
          const [showInputWhatshapp, setShowInputWhatshapp] = useState(false);
          const showWhatshapp = () => {
            setShowInputWhatshapp(!showInputWhatshapp);
          };
          const [showInputLinkedin, setShowInputLinkedin] = useState(false);
          const showLinkedin = () => {
            setShowInputLinkedin(!showInputLinkedin);
          };
          const [showInputWeChat, setShowInputWeChat] = useState(false);
          const showWeChat = () => {
            setShowInputWeChat(!showInputWeChat);
          };

          const [showInputWhatsappBusiness, setShowWhatsappBusiness] =
            useState(false);
          const showWhatsappBusiness = () => {
            setShowWhatsappBusiness(!showInputWhatsappBusiness);
          };
          const [showInputCiceksepeti, setShowInputCiceksepeti] =
            useState(false);
          const showCiceksepeti = () => {
            setShowInputCiceksepeti(!showInputCiceksepeti);
          };

          const [showInputSahibinden, setShowInputSahibinden] = useState(false);
          const showSahibinden = () => {
            setShowInputSahibinden(!showInputSahibinden);
          };

          const [showInputTrendyol, setShowInputTrendyol] = useState(false);
          const showTrendyol = () => {
            setShowInputTrendyol(!showInputTrendyol);
          };

          const [showInputHepsiburada, setShowInputHepsiburada] =
            useState(false);
          const showHepsiburada = () => {
            setShowInputHepsiburada(!showInputHepsiburada);
          };
          const [showInputBank, setShowInputBank] = useState(false);
          const handleBank = () => {
            setShowInputBank(!showInputBank);
          };

          const [showInputBank2, setShowInputBank2] = useState(false);
          const handleBank2 = () => {
            setShowInputBank2(!showInputBank2);
          };

          const [showInputBank3, setShowInputBank3] = useState(false);
          const handleBank3 = () => {
            setShowInputBank3(!showInputBank3);
          };

          const [showInputBank4, setShowInputBank4] = useState(false);
          const handleBank4 = () => {
            setShowInputBank4(!showInputBank4);
          };

          return (
            <Form className="p-7">
              {values.step === 1 && (
                <>
                  <header>
                    <h3 className="text-lg font-medium text-zinc-700 mb-2">
                      İçerik
                    </h3>
                  </header>
                  <div className="flex flex-col w-full mb-3">
                    <div className="flex items-center">
                      <div
                        disabled
                        className="input text-gray-600 mr-0.5 bg-zinc-300 flex items-center justify-center"
                      >
                        linko.page/
                      </div>
                      <Field
                        name="linkId"
                        className="input w-full"
                        placeholder="Sayfanızın URL'si"
                      />
                    </div>

                    <ErrorMessage
                      name="linkId"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="md:flex md:flex-row flex-wrap space-y-3 ">
                    <div className="flex pt-3 flex-col md:basis-1/2 md:pr-1.5">
                      <Field name="name" className="input" placeholder="Ad" />
                      <ErrorMessage
                        name="name"
                        component="small"
                        className=" text-xs text-red-600 mt-1"
                      />
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                      <Field
                        name="surname"
                        className="input"
                        placeholder="Soyad"
                      />
                      <ErrorMessage
                        name="surname"
                        component="small"
                        className=" text-xs text-red-600 mt-1"
                      />
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                      <Field
                        name="title"
                        className="input"
                        placeholder="Meslek"
                      />
                      <ErrorMessage
                        name="title"
                        component="small"
                        className=" text-xs text-red-600 mt-1"
                      />
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                      <Field
                        name="description"
                        className="input"
                        placeholder="Açıklama"
                      />
                      <ErrorMessage
                        name="description"
                        component="small"
                        className=" text-xs text-red-600 mt-1"
                      />
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                      <Field
                        name="phoneNumber1"
                        className="input"
                        placeholder="Telefon numarası"
                      />
                      <ErrorMessage
                        name="phoneNumber1"
                        component="small"
                        className=" text-xs text-red-600 mt-1"
                      />
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                      <Field
                        name="email"
                        className="input"
                        placeholder="E-posta"
                      />
                      <ErrorMessage
                        name="email"
                        component="small"
                        className=" text-xs text-red-600 mt-1"
                      />
                    </div>

                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                      <Field
                        name="website"
                        className="input"
                        placeholder="İnternet sitesi"
                      />
                      <ErrorMessage
                        name="website"
                        component="small"
                        className=" text-xs text-red-600 mt-1"
                      />
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                      <Field
                        name="location"
                        className="input"
                        placeholder="Konum"
                      />
                      <ErrorMessage
                        name="location"
                        component="small"
                        className=" text-xs text-red-600 mt-1"
                      />
                    </div>

                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                      <button
                        type="button"
                        onClick={showInstagram}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded"
                      >
                        <span className="font-medium bg-gradient-to-l from-[#d61313] to-[#e2a127] text-transparent bg-clip-text">
                          Instagram
                        </span>

                        <img src={instagram} className="w-6 text-red-400" />
                      </button>
                      {showInputInstagram && (
                        <>
                          <Field
                            name="instagram"
                            className="input mt-3"
                            placeholder="Instagram kullanıcı adı"
                          />
                        </>
                      )}
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                      <button
                        type="button"
                        onClick={showX}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                      >
                        <span className="font-medium">Twitter</span>

                        <img src={twitter} className="w-6 text-red-400" />
                      </button>
                      {showInputX && (
                        <>
                          <Field
                            name="twitter"
                            className="input mt-3"
                            placeholder="Twitter kullanıcı adı"
                          />
                        </>
                      )}
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                      <button
                        type="button"
                        onClick={showTelegram}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded"
                      >
                        <span className="font-medium text-sky-500">
                          Telegram
                        </span>

                        <img src={telegram} className="w-6" />
                      </button>
                      {showInputTelegram && (
                        <>
                          <Field
                            name="telegram"
                            className="input mt-3"
                            placeholder="Telegram"
                          />
                        </>
                      )}
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                      <button
                        type="button"
                        onClick={showDiscord}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded"
                      >
                        <span className="font-medium text-blue-600">
                          Discord
                        </span>

                        <img src={discord} className="w-6" />
                      </button>
                      {showInputDiscord && (
                        <>
                          <Field
                            name="discord"
                            className="input mt-3"
                            placeholder="Discord"
                          />
                        </>
                      )}
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                      <button
                        type="button"
                        onClick={showFacebook}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                      >
                        <span className="font-medium text-sky-600">
                          Facebook
                        </span>

                        <img src={facebook} className="w-6" />
                      </button>
                      {showInputFacebook && (
                        <>
                          <Field
                            name="facebook"
                            className="input mt-3"
                            placeholder="Facebook"
                          />
                        </>
                      )}
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                      <button
                        type="button"
                        onClick={showWhatshapp}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                      >
                        <span className="font-medium text-green-600">
                          Whatshapp
                        </span>

                        <img src={whatsapp} className="w-6" />
                      </button>
                      {showInputWhatshapp && (
                        <>
                          <Field
                            name="whatsapp"
                            className="input mt-3"
                            placeholder="Whatshapp"
                          />
                        </>
                      )}
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                      <button
                        type="button"
                        onClick={showLinkedin}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                      >
                        <span className="font-medium text-sky-600">
                          Linkedin
                        </span>

                        <img src={linkedin} className="w-6" />
                      </button>
                      {showInputLinkedin && (
                        <>
                          <Field
                            name="linkedin"
                            className="input mt-3"
                            placeholder="Linkedin"
                          />
                        </>
                      )}
                    </div>

                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                      <button
                        type="button"
                        onClick={showWhatsappBusiness}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                      >
                        <span className="font-medium text-green-600">
                          Whatshapp Business
                        </span>

                        <img src={whatsapp} className="w-6" />
                      </button>
                      {showInputWhatsappBusiness && (
                        <>
                          <Field
                            name="whatsappBusiness"
                            className="input mt-3"
                            placeholder="Whatshapp Business"
                          />
                        </>
                      )}
                    </div>

                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                      <button
                        type="button"
                        onClick={showCiceksepeti}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                      >
                        <span className="font-medium text-blue-700">
                          Çiçek Sepeti
                        </span>

                        <img src={ciceksepeti} className="w-6" />
                      </button>
                      {showInputCiceksepeti && (
                        <>
                          <Field
                            name="cicekSepeti"
                            className="input mt-3"
                            placeholder="Çiçek Sepeti"
                          />
                        </>
                      )}
                    </div>

                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                      <button
                        type="button"
                        onClick={showSahibinden}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-[9px] rounded "
                      >
                        <span className="font-medium text-yellow-300">
                          Sahibinden
                        </span>
                      </button>
                      {showInputSahibinden && (
                        <>
                          <Field
                            name="sahibinden"
                            className="input mt-3"
                            placeholder="Sahibinden"
                          />
                        </>
                      )}
                    </div>

                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                      <button
                        type="button"
                        onClick={showTrendyol}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                      >
                        <span className="font-medium text-orange-500">
                          Trendyol
                        </span>
                      </button>
                      {showInputTrendyol && (
                        <>
                          <Field
                            name="trendyol"
                            className="input mt-3"
                            placeholder="Trendyol"
                          />
                        </>
                      )}
                    </div>

                    <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                      <button
                        type="button"
                        onClick={showHepsiburada}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
                      >
                        <span className="font-medium text-orange-500">
                          Hepsiburada
                        </span>
                      </button>
                      {showInputHepsiburada && (
                        <>
                          <Field
                            name="hepsiburada"
                            className="input mt-3"
                            placeholder="Hepsiburada"
                          />
                        </>
                      )}
                    </div>
                    <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                      <button
                        type="button"
                        onClick={showWeChat}
                        className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded"
                      >
                        <span className="font-medium text-emerald-600">
                          WeChat
                        </span>

                        <img src={wechat} className="w-6" />
                      </button>
                      {showInputWeChat && (
                        <>
                          <Field
                            name="wechat"
                            className="input mt-3"
                            placeholder="WeChat"
                          />
                        </>
                      )}
                    </div>
                  </div>
                  <hr className="mt-8" />
                  <h3 className="text-lg font-medium text-zinc-700 mt-4 md:mt-8">
                    Resimler
                  </h3>
                  <div className="grid md:grid-cols-2 gap-2.5">
                    <div className="flex flex-col">
                      <label htmlFor="photo1" className="text-sm">
                        Profil Fotoğrafı
                      </label>
                      <input
                        id="photo1"
                        name="photo1"
                        type="file"
                        accept="image/*"
                        onChange={handleImage1Change}
                        className="input pt-1.5  mt-1"
                      />
                      {image1 && (
                        <img
                          src={URL.createObjectURL(image1)}
                          alt="Photo 1"
                          className=" h-96 w-96 object-cover"
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="photo2" className="text-sm">
                        Banner
                      </label>
                      <input
                        id="photo2"
                        name="photo2"
                        type="file"
                        accept="image/*"
                        onChange={handleImage2Change}
                        className="input pt-1.5 mt-1"
                      />
                      {image2 && (
                        <img
                          src={URL.createObjectURL(image2)}
                          alt="Photo 2"
                          className="h-96 w-96 object-cover"
                        />
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="catalog" className="text-sm">
                        Katalog
                      </label>
                      <input
                        id="catalog"
                        name="catalog"
                        type="file"
                        accept="application/pdf"
                        onChange={handleCatalog}
                        className="input pt-1.5 mt-1"
                      />
                      {catalog && <p>{catalog.name}</p>}
                    </div>
                  </div>

                  <>
                    <hr className="mt-8" />
                    <header>
                      <h3 className="text-lg font-medium text-zinc-700 mt-5 md:mt-8 mb-2">
                        Tasarım
                      </h3>
                    </header>
                    <div className="flex gap-2 md:gap-5">
                      <div>
                        <span className="flex font-medium mb-2">Tasarım 1</span>
                        <div className="flex  md:pr-56  rounded-lg mb-5 flex-col items-center">
                          <label>
                            <input
                              type="radio"
                              name="selectedTheme"
                              value="1"
                              checked={values.themeId === 1}
                              onChange={() => setFieldValue("themeId", 1)}
                              className="hidden"
                            />
                            <div className="flex gap-2">
                              <img
                                src={theme1}
                                alt="Theme 1"
                                className={classNames(
                                  "cursor-pointer w-full shadow-lg",
                                  {
                                    "border-2 border-blue-500 rounded":
                                      values.themeId === 1,
                                  }
                                )}
                              />
                            </div>
                          </label>
                        </div>
                      </div>

                      <div>
                        <span className="font-medium mb-4">Tasarım 2</span>
                        <div className="flex md:pr-56  rounded-lg mb-5 flex-col items-center mt-2">
                          <label>
                            <input
                              type="radio"
                              name="selectedTheme"
                              value="1"
                              checked={values.themeId === 2}
                              onChange={() => setFieldValue("themeId", 2)}
                              className="hidden"
                            />
                            <div className="flex gap-2">
                              <img
                                src={theme2}
                                alt="Theme 1"
                                className={classNames(
                                  "cursor-pointer w-full shadow-lg",
                                  {
                                    "border-2 border-blue-500 rounded":
                                      values.themeId === 2,
                                  }
                                )}
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </>
                </>
              )}
              {values.step === 2 && (
                <div className="md:flex md:flex-row flex-wrap space-y-3 ">
                  <div className="font-medium text-zinc-600 text-sm w-full pt-3">
                    BANKA BİLGİLERİ - 1
                  </div>

                  <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                    <Field
                      name="bankInformationList[0].iban"
                      className="input"
                      placeholder="IBAN"
                    />
                    <ErrorMessage
                      name="bankInformationList[0].iban"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                    <Field
                      name="bankInformationList[0].bankName"
                      className="input"
                      placeholder="Banka ismi"
                    />
                    <ErrorMessage
                      name="bankInformationList[0].bankName"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                    <Field
                      name="bankInformationList[0].accountName"
                      className="input"
                      placeholder="Hesap adı"
                    />
                    <ErrorMessage
                      name="bankInformationList[0].accountName"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className=" flex-col md:basis-1/2 opacity-0"></div>

                  <button
                    type="button"
                    onClick={handleBank}
                    className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center"
                  >
                    BANKA BİLGİSİ EKLE +
                  </button>
                  <div className=" flex-col md:basis-1/2 opacity-0"></div>

                  {showInputBank && (
                    <>
                      <div className="font-medium text-zinc-600 text-sm w-full pt-3">
                        BANKA BİLGİLERİ - 2
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                        <Field
                          name="bankInformationList[1].iban"
                          className="input"
                          placeholder="IBAN"
                        />
                        <ErrorMessage
                          name="bankInformationList[1].iban"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                        <Field
                          name="bankInformationList[1].bankName"
                          className="input"
                          placeholder="Banka ismi"
                        />
                        <ErrorMessage
                          name="bankInformationList[1].bankName"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                        <Field
                          name="bankInformationList[1].accountName"
                          className="input"
                          placeholder="Hesap adı"
                        />
                        <ErrorMessage
                          name="bankInformationList[1].accountName"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className=" flex-col md:basis-1/2 opacity-0"></div>
                      <button
                        type="button"
                        onClick={handleBank2}
                        className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center"
                      >
                        BANKA BİLGİSİ EKLE +
                      </button>
                    </>
                  )}

                  <div className=" flex-col md:basis-1/2 opacity-0"></div>

                  {showInputBank2 && (
                    <>
                      <div className="font-medium text-zinc-600 text-sm w-full pt-3">
                        BANKA BİLGİLERİ - 3
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                        <Field
                          name="bankInformationList[2].iban"
                          className="input"
                          placeholder="IBAN"
                        />
                        <ErrorMessage
                          name="bankInformationList[2].iban"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                        <Field
                          name="bankInformationList[2].bankName"
                          className="input"
                          placeholder="Banka ismi"
                        />
                        <ErrorMessage
                          name="bankInformationList[2].bankName"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                        <Field
                          name="bankInformationList[2].accountName"
                          className="input"
                          placeholder="Hesap adı"
                        />
                        <ErrorMessage
                          name="bankInformationList[2].accountName"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className=" flex-col md:basis-1/2 opacity-0"></div>
                      <button
                        type="button"
                        onClick={handleBank3}
                        className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center"
                      >
                        BANKA BİLGİSİ EKLE +
                      </button>
                    </>
                  )}

                  <div className=" flex-col md:basis-1/2 opacity-0"></div>

                  {showInputBank3 && (
                    <>
                      <div className="font-medium text-zinc-600 text-sm w-full pt-3">
                        BANKA BİLGİLERİ - 4
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                        <Field
                          name="bankInformationList[3].iban"
                          className="input"
                          placeholder="IBAN"
                        />
                        <ErrorMessage
                          name="bankInformationList[3].iban"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                        <Field
                          name="bankInformationList[3].bankName"
                          className="input"
                          placeholder="Banka ismi"
                        />
                        <ErrorMessage
                          name="bankInformationList[3].bankName"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                        <Field
                          name="bankInformationList[3].accountName"
                          className="input"
                          placeholder="Hesap adı"
                        />
                        <ErrorMessage
                          name="bankInformationList[3].accountName"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className=" flex-col md:basis-1/2 opacity-0"></div>
                      <button
                        type="button"
                        onClick={handleBank4}
                        className="font-medium text-zinc-600 text-sm py-1 px-2 border-zinc-700 rounded-md border flex items-center justify-center"
                      >
                        BANKA BİLGİSİ EKLE +
                      </button>
                    </>
                  )}

                  <div className=" flex-col md:basis-1/2 opacity-0"></div>

                  {showInputBank4 && (
                    <>
                      <div className="font-medium text-zinc-600 text-sm w-full pt-3">
                        BANKA BİLGİLERİ - 5
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                        <Field
                          name="bankInformationList[4].iban"
                          className="input"
                          placeholder="IBAN"
                        />
                        <ErrorMessage
                          name="bankInformationList[4].iban"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                        <Field
                          name="bankInformationList[4].bankName"
                          className="input"
                          placeholder="Banka ismi"
                        />
                        <ErrorMessage
                          name="bankInformationList[4].bankName"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                        <Field
                          name="bankInformationList[4].accountName"
                          className="input"
                          placeholder="Hesap adı"
                        />
                        <ErrorMessage
                          name="bankInformationList[4].accountName"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                      <div className=" flex-col md:basis-1/2 opacity-0"></div>
                    </>
                  )}
                  <div className=" flex-col md:basis-1/2 opacity-0"></div>
                  <div className="font-medium text-zinc-600 text-sm w-full pt-3">
                    FATURA BİLGİLERİ
                  </div>
                  {/* invoice */}

                  <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                    <Field
                      name="invoiceInformationList[0].title"
                      className="input"
                      placeholder="Firma Ünvanı"
                    />
                    <ErrorMessage
                      name="invoiceInformationList[0].title"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                    <Field
                      name="invoiceInformationList[0].address"
                      className="input"
                      placeholder="Adres"
                    />
                    <ErrorMessage
                      name="invoiceInformationList[0].address"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                    <Field
                      name="invoiceInformationList[0].taxNumber"
                      className="input"
                      placeholder="Vergi Numarası"
                    />
                    <ErrorMessage
                      name="invoiceInformationList[0].taxNumber"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                    <Field
                      name="invoiceInformationList[0].taxOffice"
                      className="input"
                      placeholder="Vergi Dairesi"
                    />
                    <ErrorMessage
                      name="invoiceInformationList[0].taxOffice"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>

                  {/* invoice */}
                  <div className="font-medium text-zinc-600 text-sm w-full pt-10">
                    VEKALET BİLGİLERİ
                  </div>
                  {/* warrantOfAttorneyDtoListk */}
                  <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                    <Field
                      name="warrantOfAttorneyDtoList[0].title"
                      className="input"
                      placeholder="Vekalet başlığı"
                    />
                    <ErrorMessage
                      name="warrantOfAttorneyDtoList[0].title"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                    <Field
                      name="warrantOfAttorneyDtoList[0].address"
                      className="input"
                      placeholder="Adres"
                    />
                    <ErrorMessage
                      name="warrantOfAttorneyDtoList[0].address"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                    <Field
                      name="warrantOfAttorneyDtoList[0].citizenId"
                      className="input"
                      placeholder="TC Kimlik Numarası"
                    />
                    <ErrorMessage
                      name="warrantOfAttorneyDtoList[0].citizenId"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col md:basis-1/2 md:pl-1.5">
                    <Field
                      name="warrantOfAttorneyDtoList[0].registerNo"
                      className="input"
                      placeholder="Kayıt Numarası"
                    />
                    <ErrorMessage
                      name="warrantOfAttorneyDtoList[0].registerNo"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col md:basis-1/2 md:pr-1.5">
                    <Field
                      name="warrantOfAttorneyDtoList[0].barAssociation"
                      className="input"
                      placeholder="Baro"
                    />
                    <ErrorMessage
                      name="warrantOfAttorneyDtoList[0].barAssociation"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className=" flex-col md:basis-1/2 hidden md:block md:opacity-0"></div>
                  {/* warrantOfAttorneyDtoListk */}
                </div>
              )}
              <div className="grid grid-cols-2 gap-x-4 mt-4">
                {values.step === 1 && (
                  <>
                    <div />
                    <button
                      onClick={nextHandle}
                      type="button"
                      className="bg-emerald-600 w-28 disabled:opacity-50 justify-self-end text-white rounded h-10 text-sm"
                    >
                      İLERİ
                    </button>
                  </>
                )}
                {values.step === 2 && (
                  <>
                    <button
                      onClick={prevHandle}
                      type="button"
                      className="bg-emerald-600 w-28 justify-self-start text-white rounded h-10 text-sm"
                    >
                      GERİ
                    </button>
                    <button
                      type="button"
                      onClick={submitHandle}
                      className="bg-emerald-600 w-28 disabled:opacity-50 justify-self-end text-white rounded h-10 text-sm"
                      disabled={!isValid || !dirty}
                    >
                      TAMAMLA
                    </button>
                  </>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Stepper;
