import React, { useEffect, useState } from "react";
import instagram from "/socialMediaLogo/instagram.svg";
import twitter from "/socialMediaLogo/twitter.svg";
import telegram from "/socialMediaLogo/telegram.svg";
import facebook from "/socialMediaLogo/facebook.svg";
import whatsapp from "/socialMediaLogo/whatsapp.svg";
import linkedin from "/socialMediaLogo/linkedin.svg";
import theme1 from "/themes/3.png";
import theme2 from "/themes/4.png";
import classNames from "classnames";
import wechat from "/socialMediaLogo/wechat.svg";
import axios from "axios";
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
    wechat: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://178.128.207.116:8082/businessCard/getDigitalCardByEmail?email=tunahancakil@gmail.com"
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
          phoneNumber2: "",
          photo1: "",
          photo2: "",
          photo3: "",
          photo4: "",
          photo5: "",
          email: response.data.email,
          website: response.data.website,
          location: response.data.location,
          instagram: response.data.instagram,
          twitter: response.data.twitter,
          telegram: response.data.telegram,
          facebook: response.data.facebook,
          whatsapp: response.data.whatsapp,
          linkedin: response.data.linkedin,
          wechat: response.data.wechat,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log("emailPerson", emailPerson);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
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
  console.log("values", values);
  const sendDataToServer = async () => {
    try {
      const response = await axios.put(
        "http://178.128.207.116:8082/businessCard/updateDigitalCard",
        values
      );
      console.log("Response:", response.data);
      console.log("value", values);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  console.log("values", values);
  return (
    <div className="p-7">
      <header>
        <h3 className="text-lg font-medium text-zinc-700 mb-2">Content</h3>
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
            placeholder="Your Page URL"
            value={emailPerson.linkId}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        <div className="flex flex-col">
          <input
            name="name"
            className="input"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <input
            name="surname"
            className="input"
            placeholder="Surname"
            value={values.surname}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <input
            name="title"
            className="input"
            placeholder="Title"
            value={values.title}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <input
            name="description"
            className="input"
            placeholder="Description"
            value={values.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <input
            name="phoneNumber1"
            className="input"
            placeholder="Phone Number"
            value={values.phoneNumber1}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <input
            name="email"
            disabled
            className="input text-gray-600 mr-0.5 bg-zinc-100 flex items-center justify-center"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <input
            name="website"
            className="input"
            placeholder="Website"
            value={values.website}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <input
            name="location"
            className="input"
            placeholder="Location"
            value={values.location}
            onChange={handleChange}
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

      <>
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
                    className={classNames("cursor-pointer ", {
                      "border-4 border-blue-500 rounded": values.themeId === 1,
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
                    className={classNames("cursor-pointer ", {
                      "border-4 border-blue-500 rounded": values.themeId === 2,
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
      </>
    </div>
  );
}

export default CardUpdate;
