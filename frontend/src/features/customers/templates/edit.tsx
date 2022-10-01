import { Box, Button, Divider, Flex, Heading, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { CustomersForm, CustomersFormProps } from "../CustomersForm";
import { clientSchema } from "../CustomersForm/formSchema";

type EditUserTemplateProps = Pick<CustomersFormProps, "initialValues">;

export default function EditUserTemplate({
  initialValues,
}: EditUserTemplateProps) {
  const router = useRouter();

  const methods = useForm({
    resolver: yupResolver(clientSchema),
  });

  function handleCreate(formData: any) {
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve("");
    //   }, 2000);
    // });
    // console.log("formData", formData);
    // router.push("/custormes");
    console.log("formData", formData);
  }

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
            <form onSubmit={methods.handleSubmit(handleCreate)}>
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