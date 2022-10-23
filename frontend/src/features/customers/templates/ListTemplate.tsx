import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { HiOutlineTrash } from "react-icons/hi";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { customersService } from "../../../services/customers";
import ReactInputMask from "react-input-mask";

export default function CustomersListTemplate() {
  const [customers, setCustomers] = React.useState<any[]>([]);

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  const loadCustomers = async () => {
    const response = await customersService.get();
    setCustomers(response.data);
  };

  const deleteCustomer = async (id: string) => {
    await customersService.delete(id);
    const updatedCustomers = customers.filter((item) => item.id !== id);
    setCustomers(updatedCustomers);
  };

  React.useEffect(() => {
    loadCustomers();
  }, []);

  return (
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
                      <Flex gap="2">
                        <Link
                          href={{
                            pathname: "customers/edit",
                            query: { id: customer.id },
                          }}
                        >
                          <Button
                            colorScheme="blue"
                            size="sm"
                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                          >
                            Editar
                          </Button>
                        </Link>
                        <Button
                          colorScheme="red"
                          size="sm"
                          onClick={() => deleteCustomer(customer.id)}
                          leftIcon={<Icon as={HiOutlineTrash} fontSize="16" />}
                        >
                          Deletar
                        </Button>
                      </Flex>
                    </Td>
                  )}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}