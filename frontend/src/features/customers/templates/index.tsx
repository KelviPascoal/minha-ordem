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
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { customersMock } from "../../../__mocks__/customers.mock";

export default function CustomersListTemplate() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header showSearch />

      <Flex w="100%" maxWidth={1480} mx="auto" my="6" px={["2", "6"]}>
        <Sidebar />

        <Box flex="1" bgColor="gray.800" padding="8" borderRadius={8}>
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
              {customersMock.map((customer, index) => (
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
                  {isWideScreen && <Td> {customer.phoneNumber}</Td>}
                  {isWideScreen && (
                    <Td>
                      <Link
                        href={{
                          pathname: "customers/edit",
                          query: { id: customer.id },
                        }}
                        // colorScheme="blue"
                        // size="sm"
                        // leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Editar
                      </Link>
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
