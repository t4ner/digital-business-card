import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import classNames from "classnames";
import instagram from "/socialMediaLogo/instagram.svg";
import twitter from "/socialMediaLogo/twitter.svg";
import telegram from "/socialMediaLogo/telegram.svg";
import facebook from "/socialMediaLogo/facebook.svg";
import whatsapp from "/socialMediaLogo/whatsapp.svg";
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
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  console.log("image1", image1);
  console.log("image2", image2);
  console.log("image3", image3);
  console.log("image4", image4);

  return (
    <div>
      <Formik
        validationSchema={stepperValidation}
        initialValues={{
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

            if (file) {
              sendImageToServer(file, values.linkId, "profilphoto");
            }
          };

          const handleImage2Change = (event) => {
            const file = event.target.files[0];
            setImage2(file);
            if (file) {
              sendImageToServer(file, values.linkId, "banner");
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

            if (file) {
              sendImageToServer(file, values.linkId, values.name);
            }
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

          const submitHandle = async (e) => {
            const requestData = { ...values };
            delete requestData.step;
            delete requestData.lastStep;
            localStorage.setItem("email", values.email);
            try {
              const response = await axios.post(
                "http://178.128.207.116:8082/businessCard/createDigiCard",
                requestData
              );
              Swal.fire({
                icon: "success",
                title: "Başarılı!",
                text: "Kartınız başarıyla oluşturuldu!",
              });
              console.log("Success:", response.data);
            } catch (error) {
              console.error("Error:", error);
              console.log("er", requestData);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Bir hata oluştu. Lütfen tekrar deneyin.",
              });
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
          return (
            <Form className="p-7">
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
                      <span className="font-medium text-sky-500">Telegram</span>

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
                      <span className="font-medium text-blue-600">Discord</span>

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
                      <span className="font-medium text-sky-600">Facebook</span>

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
                      <span className="font-medium text-sky-600">Linkedin</span>

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
                <h3 className="text-lg font-medium text-zinc-700 ">Resimler</h3>
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
                        className="h-96 w-96 object-cover"
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
                        className=" h-96 w-96 object-cover"
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
                        className=" h-96 w-96 object-cover"
                      />
                    )}
                  </div>
                </div>
                <>
                  <header>
                    <h3 className="text-lg font-medium text-zinc-700 mb-2">
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
                <div className="grid grid-cols-2 gap-x-4 mt-5">
                  <div></div>
                  <button
                    type="button"
                    className="bg-emerald-600 w-28 justify-self-end text-white rounded h-10 text-sm disabled:opacity-50"
                    disabled={!isValid || !dirty}
                    onClick={submitHandle}
                  >
                    OLUŞTUR
                  </button>
                </div>
              </>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Stepper;
