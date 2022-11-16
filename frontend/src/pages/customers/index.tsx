import CustomersListTemplate, {
  CustomersListTemplateProps,
} from "../../features/customers/templates/ListTemplate";
import { customersService } from "../../services/customers";

export default function Customers({ customers }: CustomersListTemplateProps) {
  return <CustomersListTemplate customers={customers} />;
}

export async function getServerSideProps() {
  const response = await customersService.get();
  return {
    props: { customers: response.data },
  };
}
