import {
  Box,
  Button,
  Flex,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
} from "@chakra-ui/react";

type Props = Omit<ModalProps, "children"> & {
  title?: string;
  description?: string;
  confirmButton?: {
    name: string;
    onClick: () => void;
  };
  cancelButton?: {
    name: string;
    onClick: () => void;
  };
  children?: React.ReactNode;
};

export function Modal(props: Props) {
  return (
    <>
      <ChakraModal {...props}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="blackAlpha.800">
            {props.title && <Text>{props.title}</Text>}
            {props.description && (
              <Text fontSize="sm" fontWeight="normal">
                {props.description}
              </Text>
            )}
          </ModalHeader>

          <ModalCloseButton color="blackAlpha.700" />
          <ModalBody>
            <Flex flexDir="column" color="blackAlpha.800">
              {props.children && <Box>{props.children}</Box>}

              <Flex justify="end" gap="2">
                {props.cancelButton?.name && (
                  <Button onClick={props.cancelButton?.onClick}>
                    {props.cancelButton.name}
                  </Button>
                )}
                {props.confirmButton?.name && (
                  <Button
                    colorScheme="pink"
                    onClick={props.confirmButton?.onClick}
                  >
                    {props.confirmButton.name}
                  </Button>
                )}
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </ChakraModal>
    </>
  );
}
