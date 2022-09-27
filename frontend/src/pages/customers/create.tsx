import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
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
    router.push("/custormes");
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
            Criar clientes
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={["6", "8"]}>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                label="Nome"
                {...register("name")}
                isInvalid={!!errors.name}
              />
              <Input
                label="E-mail"
                {...register("email")}
                isInvalid={!!errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                label="Telefone"
                {...register("phoneNumber")}
                isInvalid={!!errors.phoneNumber}
              />
              <Input
                label="Telefone 2"
                {...register("phoneNumber")}
                isInvalid={!!errors.phoneNumber}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                label="CEP"
                {...register("zipCode")}
                isInvalid={!!errors.zipCode}
              />
              <div></div>
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                label="Rua"
                {...register("phoneNumber")}
                isInvalid={!!errors.phoneNumber}
              />
              <Input
                label="Bairro"
                {...register("zipCode")}
                isInvalid={!!errors.zipCode}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                label="Cidade"
                {...register("zipCode")}
                isInvalid={!!errors.zipCode}
              />
              <Input
                label="Estado"
                {...register("zipCode")}
                isInvalid={!!errors.zipCode}
              />
            </SimpleGrid>
          </VStack>
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
