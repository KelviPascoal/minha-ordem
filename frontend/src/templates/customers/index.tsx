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
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  const customers = [
    {
      name: "Erick Pascoal",
      phoneNumber: "erickpascoal@teste.com",
      email: "(27) 1234-5678",
    },
    {
      name: "Endeavor Santos",
      phoneNumber: "endeavorsantos@hotmail.com",
      email: "(27) 8765-4321",
    },
    {
      name: "Dabi Pascoal",
      phoneNumber: "dabi@teste.com",
      email: "(27) 1234-5678",
    },
    {
      name: "Natsu Moraes",
      phoneNumber: "natsu@teste.com",
      email: "(27) 8765-4321",
    },
  ];

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
                  {isWideScreen && <Td> {customer.phoneNumber}</Td>}
                  {isWideScreen && (
                    <Td>
                      <Button
                        as="a"
                        colorScheme="blue"
                        size="sm"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Editar
                      </Button>
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
