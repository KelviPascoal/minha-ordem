import { Yup } from "../../../utils/Yup";

export const clientSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  contactPhoneNumber: Yup.string(),
  cep: Yup.string().required(),
  address: Yup.string().required(),
  district: Yup.string().required(),
  city: Yup.string().required(),
  uf: Yup.string().required(),
});
