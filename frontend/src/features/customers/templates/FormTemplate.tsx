import { Box, Button, Divider, Flex, Heading, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { CustomersCreateFormData, CustomersForm } from "../Form";
import { clientSchema } from "../Form/formSchema";
import React from "react";
import { customersService } from "../../../services/customers";
import { removeCaracters } from "../../../controllers/removeCaracteres";

export function CustomerFormTemplate() {
  const [initialValues, setInitialValues] =
    React.useState<CustomersCreateFormData>();

  const router = useRouter();

  const methods = useForm({
    resolver: yupResolver(clientSchema),
  });

  console.log("router.query.id", router.query.id);

  const handleSave = async (formData: any) => {
    if (router.query.id) {
      const customer = {
        ...initialValues,
        ...formData,
        phoneNumber: removeCaracters(formData.phoneNumber),
        contactPhoneNumber: removeCaracters(formData.contactPhoneNumber),
      };
      await customersService.update(customer, customer.id);
    } else {
      await customersService.create({
        ...formData,
        phoneNumber: removeCaracters(formData.phoneNumber),
        contactPhoneNumber: removeCaracters(formData.contactPhoneNumber),
      });
    }

    router.back();
  };

  const loadCustomer = async (id: string) => {
    const response = await customersService.get(id);

    setInitialValues(response.data);
  };

  React.useEffect(() => {
    if (router.query.id) {
      loadCustomer(String(router.query.id));
    }
  }, [router.query.id]);

  return (
    <Box>
      <Header showSearch={false} />
      <Flex w="100%" maxWidth={1480} mx="auto" my="6" px={["2", "6"]}>
        <Sidebar />

        <Box flex="1" bgColor="gray.800" padding={["6", "8"]} borderRadius={8}>
          <Heading size="lg" fontWeight="normal">
            Criar clientes
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSave)}>
              <CustomersForm initialValues={initialValues} />

              <Flex mt={["6", "8"]} justifyContent="flex-end">
                <HStack spacing="4">
                  <Link href="/customers" passHref>
                    <Button as="a" colorScheme="whiteAlpha">
                      Cancelar
                    </Button>
                  </Link>
                  <Button
                    type="submit"
                    colorScheme="blue"
                    isLoading={methods.formState.isSubmitting}
                  >
                    Salvar
                  </Button>
                </HStack>
              </Flex>
            </form>
          </FormProvider>
        </Box>
      </Flex>
    </Box>
  );
}
