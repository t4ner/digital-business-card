import * as Yup from "yup";

export const stepperValidation = Yup.object().shape({
  linkId: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required(),
  }),
  name: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required(),
  }),
  surname: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required(),
  }),
  title: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required(),
  }),
  description: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required(),
  }),
  phoneNumber1: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required(),
  }),
  email: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required(),
  }),
  themeId: Yup.string().when("step", {
    is: 2, 
    then: (schema) => schema.required(),
  }),
 
});
