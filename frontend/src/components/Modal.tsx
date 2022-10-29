import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";

export function Modal(props: ModalProps) {
  return (
    <>
      <ChakraModal {...props}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{props.children}</ModalBody>
        </ModalContent>
      </ChakraModal>
    </>
  );
}
