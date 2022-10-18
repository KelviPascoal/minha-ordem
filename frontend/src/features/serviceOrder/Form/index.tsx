import { Flex, Grid, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../../../components/form/Input";
import { Select } from "../../../components/form/Select";
import React from "react";
import { Autocomplete } from "../../../components/form/Autocomplete";
import { customersMock } from "../../../__mocks__/customers.mock";
import { OptionProps } from "chakra-react-select";

export type ServiceOrderFormData = {
  number: string;
  status: string;
  // customersName: string;
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

  const { register, setValue, formState, control } = useFormContext();

  const isDisabled = isFormDisabled || formState.isSubmitting;

  React.useEffect(() => {
    if (!!initialValues) {
      setValue("number", initialValues.number);
      setValue("status", initialValues.status);
      setValue("customersId", initialValues.customersId);
      // // setValue("customersName", initialValues.customersName);
      setValue("serviceType", initialValues.serviceType);
      setValue("registerDate", initialValues.registerDate);
      setValue("endDate", initialValues.endDate);
      setValue("price", initialValues.price);
      setValue("description", initialValues.description);
    }
  }, [initialValues, setValue]);

  //////////////////////////////////////////////////////////////////////////////////////////////
  const [custumersOptions, setCustomersOptions] = React.useState<any[]>([]);

  React.useEffect(() => {
    const options = customersMock.map((item) => ({
      value: item.id,
      label: item.name,
    }));

    setCustomersOptions(options);
  }, []);

  //////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Grid
        gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
        gap={["6", "8"]}
      >
        <Input
          label="Número"
          mask="phoneNumber"
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
          <Controller
            control={control}
            name="customer"
            render={({
              field: { onChange, onBlur, value, name, ref },
              formState,
            }) => (
              <Autocomplete
                label="Cliente"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Cliente..."
                options={custumersOptions}
                name={name}
                ref={ref}
                isInvalid={!!formState.errors.customersId}
                errorMessage={formState.errors?.customersId?.message?.toString()}
                isDisabled={isDisabled}
              />
            )}
          />
          {/* <Box position="absolute" display="none">
            <Input
              {...register("customerId")}
              isInvalid={!!formState.errors.customerId}
              errorMessage={formState.errors?.customerId?.message?.toString()}
              isDisabled={isDisabled}
            />
          </Box> */}
        </Flex>

        <Select
          label="Tipo serviço"
          {...register("serviceType")}
          isInvalid={!!formState.errors.serviceType}
          isDisabled={isDisabled}
        >
          <option style={{ color: "black" }} value="computerMaintenance">
            Manutenção de computador
          </option>
          <option style={{ color: "black" }} value="notebookMaintenance">
            Manutenção de notebook
          </option>
          <option style={{ color: "black" }} value="mobileMaintenance">
            Manutenção de mobile
          </option>
        </Select>
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
