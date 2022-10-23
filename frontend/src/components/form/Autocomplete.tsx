import React from "react";
import { Select, OptionProps } from "chakra-react-select";
export type AutocompleteProps = {
  // name: string;
  onChange: (e: any) => void;
  label?: string;
  errorMessage?: string;
  options: OptionProps[];
} & Omit<ChakraInputProps, "onChange">;

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
> = ({ label, isInvalid, errorMessage, options, value, onChange }, ref) => {
  return (
    <>
      <FormControl isInvalid={isInvalid}>
        {!!label && <FormLabel>{label}</FormLabel>}
        <Select options={options} onChange={onChange} />
        {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </FormControl>
    </>
  );
};

export const Autocomplete = forwardRef(AutocompleteBase);
