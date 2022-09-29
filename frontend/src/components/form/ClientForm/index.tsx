import {
  Flex,
  VStack,
  SimpleGrid,
  HStack,
  Button,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  useFormContext,
  UseFormStateReturn,
} from "react-hook-form";
import { Input } from "../Input";

export type UserCreateFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  contactPhoneNumber: string;
  cep: string;
  address: string;
  district: string;
  city: string;
  uf: string;
};

export type ClientFormProps = {
  initialValues?: UserCreateFormData;
  isFormDisabled?: boolean;
};

export function ClientForm({ initialValues, isFormDisabled }: ClientFormProps) {
  const { register, setValue, formState } = useFormContext();

  React.useEffect(() => {
    if (!!initialValues) {
      setValue("name", initialValues.name);
      setValue("email", initialValues.email);
      setValue("phoneNumber", initialValues.phoneNumber);
      setValue("contactPhone", initialValues.contactPhoneNumber);
      setValue("cep", initialValues.cep);
      setValue("address", initialValues.address);
      setValue("district", initialValues.district);
      setValue("city", initialValues.city);
      setValue("uf", initialValues.uf);
    }
  }, [initialValues]);

  const isDisabled = isFormDisabled || formState.isSubmitting;

  return (
    <VStack spacing={["6", "8"]}>
      <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
        <Input
          label="Nome"
          {...register("name")}
          isInvalid={!!formState.errors?.name}
          isDisabled={isDisabled}
        />

        <Input
          label="E-mail"
          {...register("email")}
          isInvalid={!!formState.errors.email}
          isDisabled={isDisabled}
        />
      </SimpleGrid>

      <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
        <Input
          label="Telefone"
          {...register("phoneNumber")}
          isInvalid={!!formState.errors.phoneNumber}
          isDisabled={isDisabled}
        />
        <Input
          label="Telefone 2"
          {...register("contactPhoneNumber")}
          isInvalid={!!formState.errors.contactPhoneNumber}
          isDisabled={isDisabled}
        />
      </SimpleGrid>

      <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
        <Input
          label="CEP"
          {...register("cep")}
          isInvalid={!!formState.errors.cep}
          isDisabled={isDisabled}
        />
        <div></div>
      </SimpleGrid>

      <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
        <Input
          label="Rua"
          {...register("address")}
          isInvalid={!!formState.errors.address}
          isDisabled={isDisabled}
        />
        <Input
          label="Bairro"
          {...register("district")}
          isInvalid={!!formState.errors.district}
          isDisabled={isDisabled}
        />
      </SimpleGrid>
      <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
        <Input
          label="Cidade"
          {...register("city")}
          isInvalid={!!formState.errors.city}
          isDisabled={isDisabled}
        />
        <Input
          label="Estado"
          {...register("uf")}
          isInvalid={!!formState.errors.uf}
          isDisabled={isDisabled}
        />
      </SimpleGrid>
    </VStack>
  );
}
