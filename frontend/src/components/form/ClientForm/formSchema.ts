import { Yup } from "../../../utils/Yup";

export const clientSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  phoneNumber: Yup.string().required(),
  contactPhoneNumber: Yup.string(),
  cep: Yup.string()
    .required()
    .max(8)
    .min(8)
    .test({
      test: (value, ctx) => {
        if (
          ctx.parent.address ||
          ctx.parent.district ||
          ctx.parent.city ||
          ctx.parent.uf
        ) {
          return true;
        }
        return false;
      },
      message: "CEP invalido",
    }),
  address: Yup.string().required(),
  district: Yup.string().required(),
  city: Yup.string().required(),
  uf: Yup.string().required(),
});
