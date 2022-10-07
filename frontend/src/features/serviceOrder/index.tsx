import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Tag,
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

export default function ServiceOrderList() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  const serviceOrders = [
    {
      number: "001",
      status: "Orçamento",
      customerName: "Endeavor Santos",
      endDate: "30/10/2022",
    },
    {
      number: "002",
      status: "Orçamento",
      customerName: "Dabi Pascoal",
      endDate: "26/09/2022",
    },
    {
      number: "004",
      status: "Execução",
      customerName: "Natsu Moraes",
      endDate: "30/12/2022",
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
              Ordem de serviço
            </Heading>

            <Link href="service-order/create" passHref>
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
                <Th>Número</Th>
                {isWideScreen && <Th>Status</Th>}
                <Th>Cliente</Th>
                <Th>Data retorno</Th>
                {isWideScreen && <Th width="8"></Th>}
              </Tr>
            </Thead>

            <Tbody>
              {serviceOrders.map((customer, index) => (
                <Tr key={index}>
                  <Td>
                    <Box>
                      <Text fontWeight="bold" marginBottom={2}>
                        {customer.number}
                      </Text>
                    </Box>
                  </Td>
                  {isWideScreen && (
                    <Td>
                      <Tag
                        colorScheme={
                          customer.status === "Orçamento" ? "yellow" : "green"
                        }
                      >
                        {customer.status}
                      </Tag>
                    </Td>
                  )}
                  <Td>
                    <Box>
                      <Text fontWeight="bold" marginBottom={2}>
                        {customer.customerName}
                      </Text>
                    </Box>
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold" marginBottom={2}>
                        {customer.endDate}
                      </Text>
                    </Box>
                  </Td>
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
