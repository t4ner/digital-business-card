import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { stepperValidation } from "./StepperValidation";
import classNames from "classnames";
import instagram from "/socialMediaLogo/instagram.svg";
import twitter from "/socialMediaLogo/twitter.svg";
import telegram from "/socialMediaLogo/telegram.svg";
import facebook from "/socialMediaLogo/facebook.svg";
import whatsapp from "/socialMediaLogo/whatsapp.svg";
import linkedin from "/socialMediaLogo/linkedin.svg";
import wechat from "/socialMediaLogo/wechat.svg";
import theme1 from "/themes/1.png";
import theme2 from "/themes/2.png";

function Stepper() {
  const [formValues, setFormValues] = useState({
    linkId: "",
    name: "",
    surname: "",
    title: "",
    description: "",
    email: "",
    twitter: "",
    instagram: "",
    themeId: 0,
    website: "",
    wechat: "",
    phoneNumber1: "",
    phoneNumber2: "",
    photoUrl1: "",
    photoUrl2: "",
    photoUrl3: "",
    photoUrl4: "",
    photoUrl5: "",
    whatsapp: "",
    linkedin: "",
    telegram: "",
    facebook: "",
    location: "",
  });

  const steps = [
    {
      step: 1,
      title: "Content",
    },
    {
      step: 2,
      title: "Design",
    },
    {
      step: 3,
      title: "Billing",
    },
  ];

  return (
    <div>
      <Formik
        validationSchema={stepperValidation}
        initialValues={{
          step: 1,
          lastStep: 3,
          name: "",
          surname: "",
          linkId: "",
          title: "",
          description: "",
          phoneNumber1: "",
          email: "",
          instagram: "",
          twitter: "",
          telegram: "",
          facebook: "",
          website: "",
          linkedin: "",
          whatshapp: "",
          wechat: "",
          website: "",
          location: "",
          photoUrl1: null,
          photoUrl2: null,
          photoUrl3: null,
          photoUrl4: null,
          //step1
        }}
        onSubmit={(values, actions) => {
          const formData = new FormData();
          Object.entries(values).forEach(([key, value]) => {
            if (key.startsWith("photoUrl")) {
              if (value instanceof File) {
                formData.append(key, value);
              }
            } else {
              formData.append(key, value);
            }
          });
          console.log(values);
        }}
      >
        {({ values, setFieldValue, isValid, dirty }) => {
          const prevHandle = (e) => {
            setFieldValue("step", values.step - 1);
          };
          const nextHandle = (e) => {
            setFieldValue("step", values.step + 1);
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
            <Form className="w-[600px] mx-auto mt-20">
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
                        "w-12 h-12 font-medium rounded-full mb-2 bg-zinc-200 flex items-center justify-center",
                        {
                          "bg-blue-200 text-blue-500":
                            values.step === step.step,
                          "bg-green-300 text-green-900":
                            values.step > step.step,
                          "bg-zinc-100 text-zinc-700":
                            values.step !== step.step,
                        }
                      )}
                    >
                      {step.step}
                    </div>
                    <div
                      className={classNames("font-medium", {
                        "text-blue-400": values.step === step.step,
                        "text-green-500": values.step > step.step,

                        "text-zinc-500": values.step !== step.step,
                      })}
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
                      Content
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
                        placeholder="Your Page URL"
                      />
                    </div>

                    <ErrorMessage
                      name="linkId"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="flex flex-col">
                      <Field name="name" className="input" placeholder="Name" />
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
                        placeholder="Surname"
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
                        placeholder="Title"
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
                        placeholder="Description"
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
                        placeholder="Phone Number"
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
                        placeholder="Email"
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
                        placeholder="Website"
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
                        placeholder="Location"
                      />
                      <ErrorMessage
                        name="location"
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
                            placeholder="Instagram"
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
                            placeholder="Twitter"
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
                            name="whatshapp"
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
                  <h3 className="text-lg font-medium text-zinc-700 ">Images</h3>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="flex flex-col">
                      <label htmlFor="photoUrl1" className="text-sm">
                        Profil Photo
                      </label>
                      <input
                        id="photoUrl1"
                        name="photoUrl1"
                        type="file"
                        accept="image/*"
                        onChange={(event) =>
                          setFieldValue(
                            "photoUrl1",
                            event.currentTarget.files[0]
                          )
                        }
                        className="input pt-1.5  mt-1"
                      />
                      {values.photoUrl1 && (
                        <img
                          src={URL.createObjectURL(values.photoUrl1)}
                          alt="Photo 1"
                          className=" h-40"
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="photoUrl2" className="text-sm">
                        Photo 2
                      </label>
                      <input
                        id="photoUrl2"
                        name="photoUrl2"
                        type="file"
                        accept="image/*"
                        onChange={(event) =>
                          setFieldValue(
                            "photoUrl2",
                            event.currentTarget.files[0]
                          )
                        }
                        className="input pt-1.5 mt-1"
                      />
                      {values.photoUrl2 && (
                        <img
                          src={URL.createObjectURL(values.photoUrl2)}
                          alt="Photo 2"
                          className="h-40"
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="photoUrl3" className="text-sm">
                        Photo 3
                      </label>
                      <input
                        id="photoUrl3"
                        name="photoUrl3"
                        type="file"
                        accept="image/*"
                        onChange={(event) =>
                          setFieldValue(
                            "photoUrl3",
                            event.currentTarget.files[0]
                          )
                        }
                        className="input pt-1.5 mt-1"
                      />
                      {values.photoUrl2 && (
                        <img
                          src={URL.createObjectURL(values.photoUrl3)}
                          alt="Photo 3"
                          className="h-40"
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="photoUrl4" className="text-sm">
                        Photo 4
                      </label>
                      <input
                        id="photoUrl4"
                        name="photoUrl4"
                        type="file"
                        accept="image/*"
                        onChange={(event) =>
                          setFieldValue(
                            "photoUrl4",
                            event.currentTarget.files[0]
                          )
                        }
                        className="input pt-1.5 mt-1"
                      />
                      {values.photoUrl4 && (
                        <img
                          src={URL.createObjectURL(values.photoUrl4)}
                          alt="Photo 4"
                          className="h-40"
                        />
                      )}
                    </div>
                  </div>
                </>
              )}
              {values.step === 2 && (
                <>
                  <header>
                    <h3 className="text-lg font-medium text-zinc-700 mb-2">
                      Design
                    </h3>
                  </header>
                  <span className="flex font-medium mb-2">Theme 1</span>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="flex mb-5 flex-col items-center">
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
                              "border-4 border-blue-500 rounded": values.themeId === 1,
                            })}
                          />
                          <img
                            src={theme2}
                            alt="Theme 2"
                            className={classNames("cursor-pointer", {
                              "border-4 border-blue-500 rounded": values.themeId === 1,
                            })}
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                  <span className="font-medium mb-4">Theme 2</span>
                  <div className="grid grid-cols-2 gap-2.5 mt-2">
                    <div className="flex mb-5 flex-col items-center">
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
                            src={theme1}
                            alt="Theme 1"
                            className={classNames("cursor-pointer w-full", {
                              "border-4 border-blue-500 rounded": values.themeId === 2,
                            })}
                          />
                          <img
                            src={theme2}
                            alt="Theme 2"
                            className={classNames("cursor-pointer", {
                              "border-4 border-blue-500 rounded": values.themeId === 2,
                            })}
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                </>
              )}

              {values.step === 3 && (
                <>
                  <header>
                    <h3 className="text-lg font-medium text-zinc-700 mb-2">
                      Billing
                    </h3>
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="flex flex-col">
                        <Field
                          name="about"
                          className="input"
                          placeholder="About"
                        />
                        <ErrorMessage
                          name="about"
                          component="small"
                          className=" text-xs text-red-600 mt-1"
                        />
                      </div>
                    </div>
                  </header>
                </>
              )}
              <div className="grid grid-cols-2 gap-x-4 mt-5">
                {(values.step > 1 && (
                  <button
                    onClick={prevHandle}
                    type="button"
                    className="bg-emerald-600 w-28 justify-self-start text-white rounded h-10 text-sm"
                  >
                    PREV
                  </button>
                )) || <div />}
                {(values.step === values.lastStep && (
                  <button
                    type="submit"
                    className="bg-emerald-600 w-28 justify-self-end text-white rounded h-10 text-sm disabled:opacity-50"
                    disabled={!isValid || !dirty}
                  >
                    SUBMIT
                  </button>
                )) || (
                  <button
                    onClick={nextHandle}
                    type="button"
                    className="bg-emerald-600 w-28 justify-self-end text-white rounded h-10 text-sm disabled:opacity-50"
                    disabled={!isValid || !dirty}
                  >
                    NEXT
                  </button>
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
