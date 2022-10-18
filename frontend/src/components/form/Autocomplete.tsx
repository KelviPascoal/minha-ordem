import React from "react";
import { Select, OptionProps } from "chakra-react-select";

export type AutocompleteProps = {
  name: string;
  label?: string;
  errorMessage?: string;
  options: OptionProps[];
} & ChakraInputProps;

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

const AutocompleteBase: ForwardRefRenderFunction<
  HTMLInputElement,
  AutocompleteProps
> = ({ name, label, isInvalid, errorMessage, options }, ref) => {
  return (
    <>
      <FormControl isInvalid={isInvalid}>
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <Select name={name} options={options} />
        {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </FormControl>
    </>
  );
};

export const Autocomplete = forwardRef(AutocompleteBase);
