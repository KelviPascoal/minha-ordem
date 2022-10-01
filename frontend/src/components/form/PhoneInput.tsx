// import { InputHTMLAttributes } from "react";
import InputMask from "react-input-mask";

// export function PhoneInput(props: InputHTMLAttributes<HTMLInputElement>) {
//   return (
//     <Input
//       as={InputMask}
//       mask="(99) 9.9999 9999"
//       value={props.value}
//       onChange={props.onChange}
//     ></Input>
//   );
// }

/////////////////////////////////////////////////////////////////////

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

type InputProps = {
  name: string;
  label?: string;
  errorMessage?: string;
} & ChakraInputProps;

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, isInvalid, errorMessage, ...restProps },
  ref
) => {
  return (
    <>
      <FormControl isInvalid={isInvalid}>
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <ChakraInput
          as={InputMask}
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

export const PhoneInput = forwardRef(InputBase);
