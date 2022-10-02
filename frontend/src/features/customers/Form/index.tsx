import { VStack, SimpleGrid, Grid, Box } from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { getCEP } from "../../../services/getCEP";
import { Input } from "../../../components/form/Input";

export type CustomersCreateFormData = {
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

export type CustomersFormProps = {
  initialValues?: CustomersCreateFormData;
  isFormDisabled?: boolean;
};

export function CustomersForm({
  initialValues,
  isFormDisabled,
}: CustomersFormProps) {
  const { register, setValue, formState, watch, control } = useFormContext();

  const loadCEP = async (cep: string) => {
    const correctedString = cep.split("_").join("");
    const removedSpaces = correctedString.split(" ").join("");
    setValue("cep", removedSpaces);

    console.log("correctedString", removedSpaces);

    const address = await getCEP(removedSpaces);

    if (!!address) {
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
    <Grid gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]} gap={["6", "8"]}>
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

      <Input
        label="Telefone"
        {...register("phoneNumber")}
        isInvalid={!!formState.errors.phoneNumber}
        errorMessage={formState.errors?.phoneNumber?.message?.toString()}
        isDisabled={isDisabled}
        mask="phoneNumber"
      />

      <Input
        label="Telefone de contato"
        {...register("contactPhoneNumber")}
        isInvalid={!!formState.errors.contactPhoneNumber}
        errorMessage={formState.errors?.contactPhoneNumber?.message?.toString()}
        isDisabled={isDisabled}
        mask="phoneNumber"
      />

      <Controller
        control={control}
        name="cep"
        render={({
          field: { onChange, value },
          formState: controllerFormState,
        }) => (
          <Input
            label="CEP"
            name="cep"
            value={value}
            isInvalid={!!controllerFormState.errors.cep}
            errorMessage={controllerFormState.errors?.cep?.message?.toString()}
            isDisabled={isDisabled}
            onChange={(e) => {
              loadCEP(e.target.value);
              onChange(e);
            }}
            mask="cep"
          />
        )}
      />

      <Box display={["none", "none", "block"]}></Box>

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
    </Grid>
  );
}
