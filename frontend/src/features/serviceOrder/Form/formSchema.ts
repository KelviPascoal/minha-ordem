import { Yup } from "../../../utils/Yup";

export const formSchema = Yup.object().shape({
  number: Yup.string().required(),
  status: Yup.string().required(),
  customersName: Yup.string().required(),
  customersId: Yup.string().required(),
  serviceType: Yup.string().required(),
  registerDate: Yup.string().required(),
  endDate: Yup.string().required(),
  price: Yup.string().required(),
  description: Yup.string().required(),
});
