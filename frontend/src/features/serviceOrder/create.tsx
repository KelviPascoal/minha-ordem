import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { ServiceOrderForm } from "./Form";
import { formSchema } from "./Form/formSchema";

export function CreateServiceOrderTemplate() {
  const router = useRouter();

  const methods = useForm({
    resolver: yupResolver(formSchema),
  });

  async function handleCreate(formData: any) {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, 2000);
    });
    console.log("formData", formData);
    router.push("/service-order");
  }

  return (
    <Box>
      <Header showSearch={false} />

      <Flex w="100%" maxWidth={1480} mx="auto" my="6" px={["2", "6"]}>
        <Sidebar />
        <FormProvider {...methods}>
          <Box
            as="form"
            onSubmit={methods.handleSubmit(handleCreate)}
            flex="1"
            bgColor="gray.800"
            padding={["6", "8"]}
            borderRadius={8}
          >
            <Heading size="lg" fontWeight="normal">
              Editar Ordem de serviço
            </Heading>
            <ServiceOrderForm />
            <Divider my="6" borderColor="gray.700" />
          </Box>
        </FormProvider>
      </Flex>
    </Box>
  );
}
