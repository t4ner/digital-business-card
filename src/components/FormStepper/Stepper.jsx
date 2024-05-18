import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { stepperValidation } from "../StepperValidation";
import classNames from "classnames";

function Stepper() {
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
          //step1
          name: "",
          surname: "",

          //step2
          age: "",
          job: "",

          //step3
          about: "",
        }}
        onSubmit={(values, actions) => {
          console.log("values", values);
        }}
      >
        {({ values, setFieldValue, isValid, dirty }) => {
          const prevHandle = (e) => {
            setFieldValue("step", values.step - 1);
          };
          const nextHandle = (e) => {
            setFieldValue("step", values.step + 1);
          };
          return (
            <Form className="w-[600px] mx-auto mt-20">
              <header className="grid grid-cols-3 gap-x-2.5 py-2.5 border border-zinc-400 rounded-md mb-5">
                {steps.map((step) => (
                  <button className="flex flex-col items-center justify-center">
                    <div
                      className={classNames(
                        "w-12 h-12 rounded-full mb-2 bg-zinc-200 flex items-center justify-center",
                        {
                          "bg-green-200 text-green-900":
                            values.step === step.step,
                          "bg-zinc-100 text-zinc-700":
                            values.step !== step.step,
                        }
                      )}
                    >
                      {step.step}
                    </div>
                    <div
                      className={classNames("font-medium", {
                        "text-green-300": values.step === step.step,
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
                  STEP {values.step}
                </h3>
              </header>
              {values.step === 1 && (
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
                </div>
              )}
              {values.step === 2 && (
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="flex flex-col">
                    <Field name="age" className="input" placeholder="Age" />
                    <ErrorMessage
                      name="age"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <Field name="job" className="input" placeholder="Job" />
                    <ErrorMessage
                      name="job"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                </div>
              )}
              {values.step === 3 && (
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="flex flex-col">
                    <Field name="about" className="input" placeholder="About" />
                    <ErrorMessage
                      name="about"
                      component="small"
                      className=" text-xs text-red-600 mt-1"
                    />
                  </div>
                </div>
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
