import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import drought from "/drought/kuraklık3.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div
        className="flex items-center justify-center h-screen  "
        style={{ backgroundImage: "url('/drought/kuraklık.jpg')" }}
      >
        <div className="bg-orange-300  border border-slate-499 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
          <h1 className="text-3xl md:text-4xl text-white font-bold text-center mb-6">
            Kayıt ol
          </h1>
          <Formik
            initialValues={{
              email: "",
              name: "",
              surname: "",

              username: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Geçerli bir email adresi girin")
                .required("Email alanı boş bırakılamaz"),
              name: Yup.string().required("İsim alanı boş bırakılamaz"),
              surname: Yup.string().required("Soyisim alanı boş bırakılamaz"),

              username: Yup.string().required(
                "Kullanıcı adı alanı boş bırakılamaz"
              ),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const response = await axios.post(
                  "http://178.128.207.116:8089/api/auth/signup",
                  values
                );
                navigate("/login");
              } catch (error) {}
              setSubmitting(false);
            }}
          >
            <Form>
              <div className="flex-col md:flex md:flex-row md:gap-10">
                <div className="relative my-4 pb-2">
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="İsim"
                    className="block w-72 py-1 pt-5  px-0 placeholder:text-white font-medium  text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm font-medium pt-1"
                  />
                </div>
                <div className="relative my-4">
                  <Field
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder="Soyisim"
                    className="block w-72 py-1 pt-5 px-0 placeholder:text-white font-medium text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
                  />
                  <ErrorMessage
                    name="surname"
                    component="div"
                    className="text-red-500 text-sm font-medium pt-1"
                  />
                </div>
              </div>
              <div className="flex-col md:flex md:flex-row md:gap-10">
                <div className="relative my-4">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="block w-72 py-1 pt-5 px-0 placeholder:text-white font-medium text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm font-medium pt-1"
                  />
                </div>
                <div className="relative my-4">
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Kullanıcı Adı"
                    className="block w-72 py-1 pt-5 px-0 placeholder:text-white font-medium text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-sm font-medium pt-1"
                  />
                </div>
              </div>
              <p className="text-white text-lg font-medium mt-4 w-[300px]">
                Şifreniz, kayıt olduğunuz e-posta hesabınıza iletilecektir
              </p>
              <button
                type="submit"
                className="w-full font-medium mb-4 text-lg mt-6 rounded-full bg-white text-orange-300 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
              >
                Kayıt Ol
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
