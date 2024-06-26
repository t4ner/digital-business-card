import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { stepperValidation } from "./StepperValidation";
import classNames from "classnames";
import instagram from "/socialMediaLogo/instagram.svg";
import twitter from "/socialMediaLogo/twitter.svg";
import telegram from "/socialMediaLogo/telegram.svg";
import facebook from "/socialMediaLogo/facebook.svg";
import whatsapp from "/socialMediaLogo/whatsapp.svg";
import discord from "/socialMediaLogo/discord.svg";
import linkedin from "/socialMediaLogo/linkedin.svg";
import wechat from "/socialMediaLogo/wechat.svg";
import theme1 from "/themes/3.png";
import theme2 from "/themes/4.png";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import DigitalCard from "../Digitalcard/DigitalCard";

function Stepper() {
  const [state, setState] = useState({
    xxx: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  console.log("image1", image1);
  console.log("image2", image2);
  console.log("image3", image3);
  console.log("image4", image4);
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const steps = [
    {
      step: 1,
      title: "İçerik",
    },
    {
      step: 2,
      title: "Tasarım",
    },
    {
      step: 3,
      title: "Faturalandırma",
    },
  ];

  return (
    <div>
      <Navbar />
      <DigitalCard />

      <Formik
        validationSchema={stepperValidation}
        initialValues={{
          step: 1,
          lastStep: 3,
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
          bankInformationList: [
            {
              iban: "",
              bankName: "",
              accountName: "",
            },
          ],
        }}
        onSubmit={(values, actions) => {
          console.log("values", values);
        }}
      >
        {({ values, setFieldValue, isValid, dirty }) => {
          const handleImage1Change = (event) => {
            const file = event.target.files[0];
            setImage1(file);
            // Call service for image 1
            if (file) {
              sendImageToServer(file, values.linkId, values.name);
            }
          };

          const handleImage2Change = (event) => {
            const file = event.target.files[0];
            setImage2(file);
            if (file) {
              sendImageToServer(file, values.linkId, values.name);
            }
          };

          const handleImage3Change = (event) => {
            const file = event.target.files[0];
            setImage3(file);
            if (file) {
              sendImageToServer(file, values.linkId, values.name);
            }
          };

          const handleImage4Change = (event) => {
            const file = event.target.files[0];
            setImage4(file);
            // Call service for image 4
            if (file) {
              sendImageToServer(file, values.linkId, values.name);
            }
          };
          const sendImageToServer = async (image, linkId, name) => {
            try {
              const formData = new FormData();
              formData.append("file", image);
              formData.append("linkId", values.linkId);
              formData.append("name", values.name);
              const jsonData = {
                file: image,
                linkId: values.linkId,
                name: values.name,
              };
              console.log("jsonData", jsonData);

              const response = await axios.post(
                "http://178.128.207.116:8083/businessCard/upload",
                formData
              );
              console.log("Image upload success:", response.data);
            } catch (error) {
              console.error("Image upload error:", error);
            }
          };
          const prevHandle2 = (e) => {
            setFieldValue("step", values.step - 1);
          };
          const prevHandle3 = (e) => {
            setFieldValue("step", values.step - 1);
          };
          const nextHandle1 = (e) => {
            setFieldValue("step", values.step + 1);
          };
          const nextHandle2 = () => {
            if (values.themeId) {
              setFieldValue("step", values.step + 1);
            } else {
              console.error("A theme must be selected.");
            }
          };
          const submitHandle = async (e) => {
            const requestData = { ...values };
            delete requestData.step;
            delete requestData.lastStep;
            console.log("values2", values);
            console.log("requestdata", requestData);

            try {
              const response = await axios.post(
                "http://178.128.207.116:8082/businessCard/createDigiCard",
                requestData
              );
              console.log("Success:", response.data);
            } catch (error) {
              console.error("Error:", error);
            }
          };

          const stepHandle = (step) => {
            setFieldValue("step", step);
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
          return (
            <Form className="w-full px-2 md:px-0 md:w-[650px] 2xl:w-[1000px] mx-auto mt-10 md:mt-20 mb-20">
              <header className="grid grid-cols-3 gap-x-2.5 py-2.5 border border-zinc-400 rounded-md mb-3">
                {steps.map((step) => (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => stepHandle(step.step)}
                    className="flex flex-col items-center justify-center"
                    disabled={values.step < step.step}
                  >
                    <div
                      className={classNames(
                        "w-10 h-10 md:w-12 md:h-12 font-medium rounded-full mb-2 bg-zinc-200 flex items-center justify-center",
                        {
                          "bg-blue-200 text-blue-500":
                            values.step === step.step,
                          "bg-green-400 text-white": values.step > step.step,
                          "bg-zinc-100 text-zinc-500":
                            values.step !== step.step,
                        }
                      )}
                    >
                      {step.step}
                    </div>
                    <div
                      className={classNames(
                        "font-medium text-sm md:text-base",
                        {
                          "text-blue-400": values.step === step.step,
                          "text-green-500": values.step > step.step,

                          "text-zinc-500": values.step !== step.step,
                        }
                      )}
                    >
                      {step.title}
                    </div>
                  </button>
                ))}
              </header>
              <header>
                <h3 className="text-lg font-medium text-zinc-700 mb-2">
                  {steps.title}
                </h3>
              </header>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    <div className="flex flex-col">
                      <Field name="name" className="input" placeholder="Ad" />
                      <ErrorMessage
                        name="name"
                        component="small"
                        className=" text-xs text-red-600 mt-1"
                      />
                    </div>
                    <div className="flex flex-col">
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
                    <div className="flex flex-col">
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
                    <div className="flex flex-col">
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
                    <div className="flex flex-col">
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
                    <div className="flex flex-col">
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

                    <div className="flex flex-col">
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
                    <div className="flex flex-col">
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
                    <div className="flex flex-col">
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
                    <div className="flex flex-col">
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
                    <div className="flex flex-col">
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
                    <div className="flex flex-col">
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
                    <div className="flex flex-col">
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
                    <div className="flex flex-col">
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
                    <div className="flex flex-col">
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
                    <div className="flex flex-col">
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
                    <div className="flex flex-col">
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
                    <div className="flex flex-col">
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
                    <div className="flex flex-col">
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
                  <hr className="mt-3" />
                  <h3 className="text-lg font-medium text-zinc-700 ">
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
                          className=" h-40"
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="photo2" className="text-sm">
                        Fotoğraf 2
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
                          className="h-40"
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="photo3" className="text-sm">
                        Fotoğraf 3
                      </label>
                      <input
                        id="photo3"
                        name="photo3"
                        type="file"
                        accept="image/*"
                        onChange={handleImage3Change}
                        className="input pt-1.5 mt-1"
                      />
                      {image3 && (
                        <img
                          src={URL.createObjectURL(image3)}
                          alt="Photo 3"
                          className="h-40"
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="photo4" className="text-sm">
                        Fotoğraf 4
                      </label>
                      <input
                        id="photo4"
                        name="photo4"
                        type="file"
                        accept="image/*"
                        onChange={handleImage4Change}
                        className="input pt-1.5 mt-1"
                      />
                      {image4 && (
                        <img
                          src={URL.createObjectURL(image4)}
                          alt="Photo 4"
                          className="h-40"
                        />
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 mt-5">
                    <div></div>
                    <button
                      onClick={nextHandle1}
                      type="button"
                      className="bg-emerald-600 w-28 justify-self-end text-white rounded h-10 text-sm disabled:opacity-50"
                      disabled={!isValid || !dirty}
                    >
                      İLERİ
                    </button>
                  </div>
                </>
              )}
              {values.step === 2 && (
                <>
                  <header>
                    <h3 className="text-lg font-medium text-zinc-700 mb-2">
                      Tasarım
                    </h3>
                  </header>
                  <div className="flex gap-2 md:gap-5">
                    <div>
                      <span className="flex font-medium mb-2">Tasarım 1</span>
                      <div className="flex border border-blue-200 shadow-lg rounded-lg mb-5 flex-col items-center">
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
                              className={classNames("cursor-pointer w-full", {
                                "border-2 border-blue-500 rounded":
                                  values.themeId === 1,
                              })}
                            />
                          </div>
                        </label>
                      </div>
                    </div>

                    <div>
                      <span className="font-medium mb-4">Tasarım 2</span>
                      <div className="flex border border-blue-200 shadow-lg rounded-lg mb-5 flex-col items-center mt-2">
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
                              className={classNames("cursor-pointer w-full", {
                                "border-2 border-blue-500 rounded":
                                  values.themeId === 2,
                              })}
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 ">
                    <button
                      onClick={prevHandle2}
                      type="button"
                      className="bg-emerald-600 w-28 justify-self-start text-white rounded h-10 text-sm"
                    >
                      GERİ
                    </button>
                    <button
                      onClick={nextHandle2}
                      type="button"
                      className={classNames(
                        "justify-self-end text-white rounded h-10 text-sm w-28 bg-emerald-600",
                        {
                          "opacity-50 cursor-default": values.themeId === 0,
                          "bg-emerald-600 cursor-pointer": values.themeId > 0, // Seçili tema için selected-theme sınıfını ekleyin
                        }
                      )}
                      disabled={!isValid || !dirty}
                    >
                      İLERİ
                    </button>
                  </div>
                </>
              )}

              {values.step === 3 && (
                <>
                  <h3 className="text-lg font-medium text-zinc-700 mb-2">
                    Billing
                  </h3>
                  <div>
                    <Cards
                      number={state.xxx}
                      expiry={state.expiry}
                      cvc={state.cvc}
                      name={state.name}
                      focused={state.focus}
                    />

                    <div className="grid grid-cols-2 gap-2.5 mt-5">
                      <input
                        type="text"
                        name="xxx"
                        placeholder="Card Number"
                        value={state.xxx}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        className="input"
                      />
                      <input
                        type="text"
                        name="name"
                        placeholder="Name Surname"
                        value={state.name}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        className="input"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2.5 mt-2">
                      <input
                        type="text"
                        name="expiry"
                        placeholder="Valid Thru"
                        value={state.expiry}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        className="input"
                      />
                      <input
                        type="text"
                        name="cvc"
                        placeholder="CVC"
                        value={state.cvc}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4  mt-5">
                    <button
                      onClick={prevHandle3}
                      type="button"
                      className="bg-emerald-600 w-28 justify-self-start text-white rounded h-10 text-sm"
                    >
                      GERİ
                    </button>
                    <button
                      type="button"
                      className="bg-emerald-600 w-28 justify-self-end text-white rounded h-10 text-sm disabled:opacity-50"
                      disabled={!isValid || !dirty}
                      onClick={submitHandle}
                    >
                      TAMAMLA
                    </button>
                  </div>
                </>
              )}
            </Form>
          );
        }}
      </Formik>
      <Footer />
    </div>
  );
}

export default Stepper;
