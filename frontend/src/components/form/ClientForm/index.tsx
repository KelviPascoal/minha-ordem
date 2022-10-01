import { VStack, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";
import { getCEP } from "../../../services/getCEP";
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

  const loadCEP = async (cep: string) => {
    const address = await getCEP(cep);

    if (!!address) {
      console.log("addressaddress", address);

      setValue("address", address?.address);
      setValue("district", address?.district);
      setValue("city", address?.city);
      setValue("uf", address?.uf);
    }
  };

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
  }, [initialValues, setValue]);

  const isDisabled = isFormDisabled || formState.isSubmitting;

  return (
    <VStack spacing={["6", "8"]}>
      <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
        <Input
          label="Nome"
          {...register("name")}
          isInvalid={!!formState.errors?.name}
          errorMessage={formState.errors?.name?.message?.toString()}
          isDisabled={isDisabled}
        />

        <Input
          label="E-mail"
          {...register("email")}
          isInvalid={!!formState.errors.email}
          errorMessage={formState.errors?.email?.message?.toString()}
          isDisabled={isDisabled}
        />
      </SimpleGrid>

      <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
        <Input
          label="Telefone"
          {...register("phoneNumber")}
          isInvalid={!!formState.errors.phoneNumber}
          errorMessage={formState.errors?.phoneNumber?.message?.toString()}
          isDisabled={isDisabled}
        />
        <Input
          label="Telefone de contato"
          {...register("contactPhoneNumber")}
          isInvalid={!!formState.errors.contactPhoneNumber}
          errorMessage={formState.errors?.contactPhoneNumber?.message?.toString()}
          isDisabled={isDisabled}
        />
      </SimpleGrid>

      <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
        <Input
          label="CEP"
          {...register("cep")}
          isInvalid={!!formState.errors.cep}
          errorMessage={formState.errors?.cep?.message?.toString()}
          isDisabled={isDisabled}
          onChange={(e) => loadCEP(e.target.value)}
          maxLength={8}
        />
        <div></div>
      </SimpleGrid>

      <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
        <Input
          label="Rua"
          {...register("address")}
          isInvalid={!!formState.errors.address}
          errorMessage={formState.errors?.address?.message?.toString()}
          isDisabled={isDisabled}
        />
        <Input
          label="Bairro"
          {...register("district")}
          isInvalid={!!formState.errors.district}
          errorMessage={formState.errors?.district?.message?.toString()}
          isDisabled={isDisabled}
        />
      </SimpleGrid>
      <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
        <Input
          label="Cidade"
          {...register("city")}
          isInvalid={!!formState.errors.city}
          errorMessage={formState.errors?.city?.message?.toString()}
          isDisabled={isDisabled}
        />
        <Input
          label="Estado"
          {...register("uf")}
          isInvalid={!!formState.errors.uf}
          errorMessage={formState.errors?.uf?.message?.toString()}
          isDisabled={isDisabled}
        />
      </SimpleGrid>
    </VStack>
  );
}
