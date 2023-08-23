import { Flex } from "@chakra-ui/react";
import { Autocomplete } from "../components/form/Autocomplete";

export default function TestComponent() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <Flex flexDir="column" justify="center" align="center">
      aaa <p>aaa</p>
      <Autocomplete options={options} name={"aaa"} />
    </Flex>
  );
}
