import { Yup } from "../../../utils/Yup";

export const formSchema = Yup.object().shape({
  number: Yup.string().required(),
  status: Yup.string().required(),
  customerName: Yup.string().required(),
  customerId: Yup.string().required(),
  serviceType: Yup.string().required(),
  registerDate: Yup.string().required(),
  endDate: Yup.string().required(),
  price: Yup.string().required(),
  description: Yup.string().required(),
});
