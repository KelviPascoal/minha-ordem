import { Yup } from "../../../utils/Yup";

export const clientSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  phoneNumber: Yup.string()
    .required()
    .test({
      test: (value) => {
        if (!!value && value.includes("_")) {
          return false;
        }
        return true;
      },
    }),
  contactPhoneNumber: Yup.string().test({
    test: (value) => {
      if (!!value && value.includes("_")) {
        return false;
      }
      return true;
    },
  }),
  cep: Yup.string()
    .required()
    .test({
      test: (value, ctx) => {
        if (
          !ctx.parent.address ||
          !ctx.parent.district ||
          !ctx.parent.city ||
          !ctx.parent.uf ||
          (!!value && value.includes("_"))
        ) {
          return false;
        }
        return true;
      },
      message: "CEP invalido",
    }),
  address: Yup.string().required(),
  district: Yup.string().required(),
  city: Yup.string().required(),
  uf: Yup.string().required(),
});
