import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Input } from "../../components/form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Yup } from "../../utils/Yup";

type UserCreateFormData = {
  name: string;
  email: string;
  password: string;
  confirmation_password: string;
};

export default function CreateUser() {
  const router = useRouter();

  const formSchema = Yup.object().shape({});

  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { errors } = formState;

  async function handleCreate(formData: UserCreateFormData) {
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

        <Box
          as="form"
          flex="1"
          bgColor="gray.800"
          padding={["6", "8"]}
          borderRadius={8}
        >
          <Heading size="lg" fontWeight="normal">
            Editar Ordem de serviço
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={["6", "8"]}>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                label="Número"
                {...register("number")}
                isInvalid={!!errors.number}
              />
              <Input
                label="Status"
                {...register("status")}
                isInvalid={!!errors.status}
              />

              <Input
                label="Cliente"
                {...register("customer")}
                isInvalid={!!errors.customer}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                label="Tipo serviço"
                {...register("serviceType")}
                isInvalid={!!errors.serviceType}
              />
              <Input
                type="date"
                label="Data Cadastro"
                {...register("registerDate")}
                isInvalid={!!errors.registerDate}
              />
              <Input
                type="date"
                label="Data retorno"
                {...register("endDate")}
                isInvalid={!!errors.endDate}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                label="Valor serviço"
                {...register("price")}
                isInvalid={!!errors.price}
              />
              <div></div>
              <div></div>
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                label="Descrição"
                {...register("description")}
                isInvalid={!!errors.description}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt={["6", "8"]} justifyContent="flex-end">
            <HStack spacing="4">
              <Link href="/service-order" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                colorScheme="blue"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
