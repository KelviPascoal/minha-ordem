import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { customersService } from "../../../services/customers";
import ReactInputMask from "react-input-mask";
import { Modal } from "../../../components/Modal";
import { useRouter } from "next/router";
import { MenuActions } from "../../../components/MenuActions";

export type Customer = {
  name: string;
  email: string;
  address: string;
  district: string;
  city: string;
  uf: string;
  phoneNumber: string;
  contactPhoneNumber: string;
  zipCode: string;
  id: string;
};

export type CustomersListTemplateProps = {
  customers: Customer[];
};

export default function CustomersListTemplate({
  customers,
}: CustomersListTemplateProps) {
  const [data, setData] = React.useState<Customer[]>(customers);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [customerIdSelected, setCustomerIdSelected] = React.useState("");

  const router = useRouter();

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  const deleteCustomer = async (id: string) => {
    await customersService.delete(id);
    const updatedCustomers = customers.filter((item) => item.id !== id);
    setData(updatedCustomers);
    onClose();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Deseja deletar este cadastro?"
        description="Esta ação não pode ser desfeita!"
        confirmButton={{
          name: "Deletar",
          onClick: () => deleteCustomer(customerIdSelected),
        }}
        cancelButton={{
          name: "Cancelar",
          onClick: () => {
            setCustomerIdSelected("");
            onClose();
          },
        }}
      />
      <Box>
        <Header showSearch />

        <Flex w="100%" maxWidth={1480} mx="auto" my="6" px={["2", "6"]}>
          <Sidebar />

          <Box flex="1" backgroundColor="gray.800" padding="8" borderRadius={8}>
            <Flex justify="space-between" align="center" mb="8">
              <Heading size="lg" fontWeight="normal">
                Clientes
              </Heading>

              <Link href="customers/create" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="green"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >
                  Criar novo
                </Button>
              </Link>
            </Flex>

            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  {isWideScreen && <Th>Contato</Th>}
                  {isWideScreen && <Th width="8"></Th>}
                </Tr>
              </Thead>

              <Tbody>
                {customers.map((customer, index) => (
                  <Tr key={index}>
                    <Td>
                      <Box>
                        <Text fontWeight="bold" marginBottom={2}>
                          {customer.name}
                        </Text>
                        <Text fontSize="sm" color="gray.300">
                          {customer.email}
                        </Text>
                      </Box>
                    </Td>
                    {isWideScreen && (
                      <Td>
                        <Text
                          as={ReactInputMask}
                          mask={"(99) 9 9999 9999"}
                          value={customer.phoneNumber}
                          border="none"
                          outline="0"
                          boxShadow="0"
                          _focus={{
                            outline: "0",
                            boxShadow: "0",
                            border: "none",
                          }}
                          backgroundColor="gray.800"
                        />
                      </Td>
                    )}
                    {isWideScreen && (
                      <Td>
                        {!!customer.id && (
                          <MenuActions
                            options={[
                              {
                                icon: RiPencilLine,
                                name: "Editar",
                                onClick: () =>
                                  router.push({
                                    pathname: "customers/edit",
                                    query: { id: customer.id },
                                  }),
                              },
                              {
                                icon: HiOutlineTrash,
                                name: "Deletar",
                                onClick: () => {
                                  setCustomerIdSelected(customer.id);
                                  onOpen();
                                },
                              },
                            ]}
                          />
                        )}
                      </Td>
                    )}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
