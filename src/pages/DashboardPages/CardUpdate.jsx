import React, { useEffect, useState } from "react";
import instagram from "/socialMediaLogo/instagram.svg";
import twitter from "/socialMediaLogo/twitter.svg";
import telegram from "/socialMediaLogo/telegram.svg";
import facebook from "/socialMediaLogo/facebook.svg";
import whatsapp from "/socialMediaLogo/whatsapp.svg";
import linkedin from "/socialMediaLogo/linkedin.svg";
import discord from "/socialMediaLogo/discord.svg";
import Swal from "sweetalert2";
import theme1 from "/themes/10.png";
import theme2 from "/themes/11.png";
import classNames from "classnames";
import wechat from "/socialMediaLogo/wechat.svg";
import axios from "axios";
import { Link } from "react-router-dom";
function CardUpdate() {
  const [emailPerson, setEmailPerson] = useState({});
  const [values, setValues] = useState({
    linkId: "",
    themeId: 0,
    name: "",
    surname: "",
    title: "",
    description: "",
    phoneNumber1: "",
    phoneNumber2: "",
    photo1: "",
    photo2: "",
    photo3: "",
    photo4: "",
    photo5: "",
    email: "",
    website: "",
    location: "",
    instagram: "",
    twitter: "",
    telegram: "",
    facebook: "",
    whatsapp: "",
    linkedin: "",
    discord: "",
    wechat: "",
    bankInformationList: [
      {
        iban: "",
        bankName: "",
        accountName: "",
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userEmail = localStorage.getItem("email");
        if (!userEmail) {
          return;
        }

        const response = await axios.get(
          ` https://ecoqrcode.com/businessCard/getDigitalCardByEmail?email=${userEmail}`
        );

        setEmailPerson(response.data);
        // Set each value individually
        setValues({
          linkId: response.data.linkId,
          name: response.data.name,
          surname: response.data.surname,
          title: response.data.title,
          themeId: response.data.themeId,
          description: response.data.description,
          phoneNumber1: response.data.phoneNumber1,
          phoneNumber2: response.data.phoneNumber2 || "",
          photo1: response.data.photo1 || "",
          photo2: response.data.photo2 || "",
          photo3: response.data.photo3 || "",
          photo4: response.data.photo4 || "",
          photo5: response.data.photo5 || "",
          email: response.data.email,
          website: response.data.website || "",
          location: response.data.location || "",
          instagram: response.data.instagram || "",
          twitter: response.data.twitter || "",
          telegram: response.data.telegram || "",
          facebook: response.data.facebook || "",
          whatsapp: response.data.whatsapp || "",
          linkedin: response.data.linkedin || "",
          discord: response.data.discord || "",

          wechat: response.data.wechat || "",
          bankInformationList: response.data.bankInformationList.map(
            (info) => ({
              iban: info.iban || "",
              bankName: info.bankName || "",
              accountName: info.accountName || "",
            })
          ),
        });
      } catch (error) {}
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.startsWith("bankInformationList")) {
      const [listIndex, fieldName] = name.match(/\[(\d+)\]\.(.+)/).slice(1);
      setValues((prevValues) => ({
        ...prevValues,
        bankInformationList: prevValues.bankInformationList.map((item, index) =>
          index === parseInt(listIndex)
            ? {
                ...item,
                [fieldName]: value,
              }
            : item
        ),
      }));
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const handleImage1Change = (event) => {
    const file = event.target.files[0];
    setImage1(file);
    // Call service for image 1
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

      const response = await axios.post(
        "https://ecoqrcode.com/businessCard/upload",
        formData
      );
    } catch (error) {}
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

  const [showInputDiscord, setShowInputDiscord] = useState(false);
  const showDiscord = () => {
    setShowInputDiscord(!showInputDiscord);
  };

  const [showInputWeChat, setShowInputWeChat] = useState(false);
  const showWeChat = () => {
    setShowInputWeChat(!showInputWeChat);
  };

  const handleChangeTheme1 = (e) => {
    const value = parseInt(e.target.value);
    setValues((prevValues) => ({
      ...prevValues,
      themeId: value,
    }));
  };
  const handleChangeTheme2 = (e) => {
    const value = parseInt(e.target.value);
    setValues((prevValues) => ({
      ...prevValues,
      themeId: value,
    }));
  };

  const sendDataToServer = async () => {
    try {
      const response = await axios.put(
        "https://ecoqrcode.com/businessCard/updateDigitalCard",
        values
      );

      Swal.fire({
        icon: "success",
        title: "Başarılı!",
        text: "Kartınız başarıyla güncellendi!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Bir hata oluştu. Lütfen tekrar deneyin.",
      });
    }
  };

  console.log("emailPerson", emailPerson)
  return (
    <>
      {values.linkId !== "" && (
        <div className="p-7">
          <header>
            <h3 className="text-lg font-medium text-zinc-700 mb-2">İçerik</h3>
          </header>
          <div className="flex flex-col w-full mb-3">
            <div className="flex items-center">
              <div
                disabled
                className="input text-gray-600 mr-0.5 bg-zinc-300 flex items-center justify-center"
              >
                linko.page/
              </div>
              <input
                name="linkId"
                disabled
                className="input text-gray-600 mr-0.5 bg-zinc-100 flex items-center justify-center w-full"
                placeholder="Sayfanızın URL'si"
                value={emailPerson.linkId}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            <div className="flex flex-col">
              <input
                name="name"
                className="input"
                placeholder="Ad"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="surname"
                className="input"
                placeholder="Soyad"
                value={values.surname}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="title"
                className="input"
                placeholder="Başlık"
                value={values.title}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="description"
                className="input"
                placeholder="Açıklama"
                value={values.description}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="phoneNumber1"
                className="input"
                placeholder="Telefon Numarası"
                value={values.phoneNumber1}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="email"
                disabled
                className="input text-gray-600 mr-0.5 bg-zinc-100 flex items-center justify-center"
                placeholder="E-posta"
                value={values.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <input
                name="website"
                className="input"
                placeholder="İnternet sitesi"
                value={values.website}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="location"
                className="input"
                placeholder="Konum"
                value={values.location}
                onChange={handleChange}
              />
            </div>
            {values.bankInformationList.map((bankInfo, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col">
                  <input
                    name={`bankInformationList[${index}].iban`}
                    className="input"
                    placeholder="IBAN"
                    value={bankInfo.iban}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name={`bankInformationList[${index}].bankName`}
                    className="input"
                    placeholder="Banka Adı"
                    value={bankInfo.bankName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name={`bankInformationList[${index}].accountName`}
                    className="input"
                    placeholder="Hesap Adı"
                    value={bankInfo.accountName}
                    onChange={handleChange}
                  />
                </div>
              </React.Fragment>
            ))}

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
                  <input
                    name="instagram"
                    className="input mt-3"
                    placeholder="Instagram"
                    value={values.instagram}
                    onChange={handleChange}
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
                  <input
                    name="twitter"
                    className="input mt-3"
                    placeholder="Twitter"
                    value={values.twitter}
                    onChange={handleChange}
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
                  <input
                    name="telegram"
                    className="input mt-3"
                    placeholder="Telegram"
                    value={values.telegram}
                    onChange={handleChange}
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
                  <input
                    name="facebook"
                    className="input mt-3"
                    placeholder="Facebook"
                    value={values.facebook}
                    onChange={handleChange}
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
                <span className="font-medium text-green-600">Whatshapp</span>

                <img src={whatsapp} className="w-6" />
              </button>
              {showInputWhatshapp && (
                <>
                  <input
                    name="whatsapp"
                    className="input mt-3"
                    placeholder="Whatshapp"
                    value={values.whatsapp}
                    onChange={handleChange}
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
                  <input
                    name="linkedin"
                    className="input mt-3"
                    placeholder="Linkedin"
                    value={values.linkedin}
                    onChange={handleChange}
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
                <span className="font-medium text-purple-600">Discord</span>

                <img src={discord} className="w-6" />
              </button>
              {showInputDiscord && (
                <>
                  <input
                    name="discord"
                    className="input mt-3"
                    placeholder="Discord"
                    value={values.discord}
                    onChange={handleChange}
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
                <span className="font-medium text-emerald-600">WeChat</span>

                <img src={wechat} className="w-6" />
              </button>
              {showInputWeChat && (
                <>
                  <input
                    name="wechat"
                    className="input mt-3"
                    placeholder="WeChat"
                    value={values.wechat}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
          </div>
          <hr className="mt-3" />
          <h3 className="text-lg font-medium text-zinc-700 ">Images</h3>
          <div className="grid md:grid-cols-2 gap-2.5">
            <div className="flex flex-col">
              <label htmlFor="photo1" className="text-sm">
                Profil Photo
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
                Photo 2
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
                Photo 3
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
                Photo 4
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

          <div className="mt-5">
            <header>
              <h3 className="text-lg font-medium text-zinc-700 mb-2">Design</h3>
            </header>
            <div className="flex gap-4 md:gap-8">
              <div>
                <span className="flex font-medium mb-2">Theme 1</span>
                <div className="flex mb-5 flex-col items-center md:pr-56 justify-center mx-auto  ">
                  <label>
                    <input
                      type="radio"
                      name="themeId"
                      value={1}
                      checked={values.themeId === 1}
                      onChange={handleChangeTheme1}
                      className="hidden"
                    />
                    <div className="flex gap-2">
                      <img
                        src={theme1}
                        alt="Theme 1"
                        className={classNames("cursor-pointer shadow-lg", {
                          "border-4 border-blue-500 rounded":
                            values.themeId === 1,
                        })}
                      />
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <span className="font-medium mb-4">Theme 2</span>
                <div className="flex mb-5 flex-col items-center md:pr-56 mt-2 md:mt-0">
                  <label>
                    <input
                      type="radio"
                      name="themeId"
                      value={2}
                      checked={values.themeId === 2}
                      onChange={handleChangeTheme2}
                      className="hidden"
                    />
                    <div className="flex gap-2">
                      <img
                        src={theme2}
                        alt="Theme 1"
                        className={classNames("cursor-pointer shadow-lg mt-2", {
                          "border-4 border-blue-500 rounded":
                            values.themeId === 2,
                        })}
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4 ">
              <div></div>
              <button
                onClick={sendDataToServer}
                type="submit"
                className="bg-emerald-600 w-28 justify-self-end text-white rounded h-10 text-sm disabled:opacity-50"
              >
                GÜNCELLE
              </button>
            </div>
          </div>
        </div>
      )}

      {values.linkId === "" && (
        <div
          className="flex items-center justify-center h-screen"
          style={{ backgroundImage: "url('/hero/hero.jpg')" }}
        >
          <div className="bg-green-300 border border-slate-499 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-1/2">
            <h1 className="text-3xl md:text-4xl text-white font-bold text-center mb-6">
              Güncelleme yapabilmeniz için önce kartvizit oluşturmanız gerekiyor
            </h1>

            <div className="text-center">
              <span className="text-white text-lg font-medium">
                Kartvizit oluşturmak için
                <Link
                  to="/dashboard/digital-business-card-create"
                  className="underline ml-1"
                >
                  tıklayınız
                </Link>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardUpdate;
