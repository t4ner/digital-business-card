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
  // title: Yup.string().when("step", {
  //   is: 1,
  //   then: (schema) => schema.required(),
  // }),
  // description: Yup.string().when("step", {
  //   is: 1,
  //   then: (schema) => schema.required(),
  // }),
  phoneNumber1: Yup.number()
    .min(11)
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point"),

  email: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required().email(),
  }),
  // website: Yup.string().when("step", {
  //   is: 1,
  //   then: (schema) => schema.required(),
  // }),
  // location: Yup.string().when("step", {
  //   is: 1,
  //   then: (schema) => schema.required(),
  // }),
  bankInformationList: Yup.array().of(
    Yup.object().shape({
      iban: Yup.number()
        .typeError("That doesn't look like a IBAN")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point"),
      bankName: Yup.string(),
      accountName: Yup.string(),
    })
  ),
  themeId: Yup.string().when("step", {
    is: 2,
    then: (schema) => schema.required(),
  }),
});
