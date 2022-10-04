import React from "react";
import Select, { Props } from "react-select";
import { Input, InputProps } from "./Input";

export type AutocompleteProps = InputProps & Props;

export function Autocomplete(props: AutocompleteProps) {
  return <Input as={Select} {...props} />;
}
