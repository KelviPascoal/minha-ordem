import {
  FormControl,
  FormLabel,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

export type SelectProps = {
  name: string;
  label?: string;
  errorMessage?: string;
} & ChakraSelectProps;

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { name, label, isInvalid, errorMessage, ...restProps },
  ref
) => {
  return (
    <>
      <FormControl isInvalid={isInvalid}>
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <ChakraSelect
          name={name}
          id={name}
          variant="filled"
          size="lg"
          bgColor="gray.900"
          _hover={{
            bgColor: "gray.900",
          }}
          focusBorderColor="blue.500"
          {...restProps}
          ref={ref}
        />
      </FormControl>
    </>
  );
};

export const Select = forwardRef(SelectBase);
