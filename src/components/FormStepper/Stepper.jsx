import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { stepperValidation } from "./StepperValidation";
import classNames from "classnames";
import Navbar from "../Navbar/Navbar";
import DigitalCard from "../Digitalcard/DigitalCard";

function Stepper() {
  const steps = [
    {
      step: 1,
      title: "Kartvizit tipi",
    },
    {
      step: 2,
      title: "Faturalandırma ",
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
          //step-1
          name: "",
          surname: "",

          //step-2
          age: "",
          job: "",
          about: "",
        }}
        onSubmit={(values, actions) => {}}
      >
        {({ values, setFieldValue, isValid, dirty }) => {
          const prevHandle = (e) => {
            setFieldValue("step", values.step - 1);
          };
          const nextHandle = (e) => {
            setFieldValue("step", values.step + 1);
          };
          return (
            <Form className="w-[1000px] py-4 mx-auto mt-10">
              <header className="grid grid-cols-2 gap-x-8 border border-zinc-400 rounded-md mb-4">
              {steps.map((step) => (
                  <button className="flex flex-col items-center justify-center  py-2">
                    <div
                      className={classNames(
                        "w-14 h-14 font-semibold rounded-full flex items-center justify-center border border-zinc-500",
                        {
                          "bg-green-200 text-green-700":
                            values.step === step.step,
                          "bg-zinc-100 text-zinc-700":
                            values.step !== step.step,
                        }
                      )}
                    >
                      {step.step}
                    </div>
                    <div className="text-zinc-600 font-medium mt-2">
                      {step.title}
                    </div>
                  </button>
                ))}
              </header>

              {values.step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  <span className="font-medium">Kartvizit Tipi</span>
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
                </div>
              )}

              {values.step === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  <span className="font-medium">Ödeme ve faturalandırma</span>
                  <div className="flex flex-col">
                    <Field name="age" className="input" placeholder="Age" />
                    <ErrorMessage
                      name="age"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <Field name="job" className="input" placeholder="Job" />
                    <ErrorMessage
                      name="job"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <Field name="about" className="input" placeholder="About" />
                    <ErrorMessage
                      name="about"
                      component="small"
                      className="block text-xs text-red-600 mt-1"
                    />
                  </div>
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
                      disabled={!isValid || !dirty}
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
                      type="submit"
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
