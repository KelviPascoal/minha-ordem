import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

export type InputProps = {
  name: string;
  label?: string;
  errorMessage?: string;
  mask?: "zipCode" | "phoneNumber";
} & ChakraInputProps;

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, isInvalid, errorMessage, mask, ...restProps },
  ref
) => {
  const masks = {
    phoneNumber: "(99) 9 9999 9999",
    zipCode: "99 999 999",
  };

  return (
    <>
      <FormControl isInvalid={isInvalid}>
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <ChakraInput
          mask={!!mask ? masks[mask] : undefined}
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
        {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </FormControl>
    </>
  );
};

export const Input = forwardRef(InputBase);
