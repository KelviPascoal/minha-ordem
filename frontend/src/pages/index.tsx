import { Button, Flex, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Input } from "../components/form/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { Yup } from "../utils/Yup";
import { Header } from "../components/Header";

type SignInFormData = {
  email: string;
  password: string;
};

export default function Home() {
  const router = useRouter();

  const formSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { errors } = formState;

  async function handleSigIn(formData: Partial<SignInFormData>) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("");
      }, 2000);
    });
    console.log("formData", formData);
    router.push("/dashboard");
  }

  return (
    <Flex w="100%" h="100vh" justify="center" align="center" px={["2", "6"]}>
      <Flex
        as="form"
        flexDir="column"
        width="100%"
        maxWidth={360}
        bgColor="gray.800"
        p="8"
        borderRadius={8}
        onSubmit={handleSubmit(handleSigIn)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            label="E-mail"
            {...register("email")}
            isInvalid={!!errors.email}
          />
          <Input
            type="password"
            label="Senha"
            {...register("password")}
            isInvalid={!!errors.password}
          />
          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
