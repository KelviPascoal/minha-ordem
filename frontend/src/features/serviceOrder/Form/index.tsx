import { Flex, Grid, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useFormContext } from "react-hook-form";
import { Yup } from "../../../utils/Yup";
import { Input } from "../../../components/form/Input";
import React from "react";

export type ServiceOrderFormData = {
  number: string;
  status: string;
  customersName: string;
  customersId: string;
  serviceType: string;
  registerDate: string;
  endDate: string;
  price: string;
  description: string;
};

export type ServiceOrderFormProps = {
  initialValues?: ServiceOrderFormData;
  isFormDisabled?: boolean;
};

export function ServiceOrderForm({
  initialValues,
  isFormDisabled,
}: ServiceOrderFormProps) {
  const router = useRouter();

  const { register, setValue, formState, control, trigger } = useFormContext();

  const isDisabled = isFormDisabled || formState.isSubmitting;

  React.useEffect(() => {
    if (!!initialValues) {
      setValue("number", initialValues.number);
      setValue("status", initialValues.status);
      setValue("customersId", initialValues.customersId);
      setValue("customersName", initialValues.customersName);
      setValue("serviceType", initialValues.serviceType);
      setValue("registerDate", initialValues.registerDate);
      setValue("endDate", initialValues.endDate);
      setValue("price", initialValues.price);
      setValue("description", initialValues.description);
    }
  }, [initialValues, setValue]);

  return (
    <>
      <Grid
        gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
        gap={["6", "8"]}
      >
        <Input
          label="Número"
          {...register("number")}
          isInvalid={!!formState.errors.number}
          errorMessage={formState.errors?.number?.message?.toString()}
          isDisabled={isDisabled}
        />
        <Input
          label="Status"
          {...register("status")}
          isInvalid={!!formState.errors.status}
          errorMessage={formState.errors?.status?.message?.toString()}
          isDisabled={isDisabled}
        />

        <Flex>
          <Input
            label="Cliente"
            {...register("customerName")}
            isInvalid={!!formState.errors.customerName}
            errorMessage={formState.errors?.customerName?.message?.toString()}
            isDisabled={isDisabled}
          />
          <Input
            label="Cliente"
            {...register("customerId")}
            isInvalid={!!formState.errors.customerId}
            errorMessage={formState.errors?.customerId?.message?.toString()}
            isDisabled={isDisabled}
          />
        </Flex>

        <Input
          label="Tipo serviço"
          {...register("serviceType")}
          isInvalid={!!formState.errors.serviceType}
          errorMessage={formState.errors?.serviceType?.message?.toString()}
          isDisabled={isDisabled}
        />
        <Input
          type="date"
          label="Data Cadastro"
          {...register("registerDate")}
          isInvalid={!!formState.errors.registerDate}
          errorMessage={formState.errors?.registerDate?.message?.toString()}
          isDisabled={isDisabled}
        />
        <Input
          type="date"
          label="Data retorno"
          {...register("endDate")}
          isInvalid={!!formState.errors.endDate}
          errorMessage={formState.errors?.endDate?.message?.toString()}
          isDisabled={isDisabled}
        />
      </Grid>
      <SimpleGrid
        marginTop={["6", "8"]}
        gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
        gap={["6", "8"]}
      >
        <Input
          label="Valor serviço"
          {...register("price")}
          isInvalid={!!formState.errors.price}
          errorMessage={formState.errors?.price?.message?.toString()}
          isDisabled={isDisabled}
        />
        <div></div>
        <div></div>
      </SimpleGrid>
      <Flex marginTop={["6", "8"]}>
        <Input
          label="Descrição"
          {...register("description")}
          isInvalid={!!formState.errors.description}
          errorMessage={formState.errors?.description?.message?.toString()}
          isDisabled={isDisabled}
        />
      </Flex>
    </>
  );
}
