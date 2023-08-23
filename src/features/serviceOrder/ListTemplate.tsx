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
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { MenuActions } from "../../components/MenuActions";
import { Modal } from "../../components/Modal";
import { Sidebar } from "../../components/Sidebar";
import { serviceOrderService } from "../../services/serviceOrder";

export default function ServiceOrderFormTemplate() {
  const [serviceOrders, setServiceOrders] = React.useState<any[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [serviceOrderIdSelected, setServiceOrderIdSelected] =
    React.useState("");

  const router = useRouter();

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  const loadServiceOrder = async () => {
    const response = await serviceOrderService.get();
    setServiceOrders(response.data);
  };

  const deleteCustomer = async (id: string) => {
    await serviceOrderService.delete(id);
    const updatedServiceOrder = serviceOrders.filter((item) => item.id !== id);
    setServiceOrders(updatedServiceOrder);
    onClose();
  };

  React.useEffect(() => {
    loadServiceOrder();
  }, []);

  return (
    <Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Deseja deletar este cadastro?"
        description="Esta ação não pode ser desfeita!"
        confirmButton={{
          name: "Deletar",
          onClick: () => deleteCustomer(serviceOrderIdSelected),
        }}
        cancelButton={{
          name: "Cancelar",
          onClick: () => {
            setServiceOrderIdSelected("");
            onClose();
          },
        }}
      />
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
              {serviceOrders.map((serviceOrder, index) => (
                <Tr key={index}>
                  <Td>
                    <Box>
                      <Text fontWeight="bold" marginBottom={2}>
                        {serviceOrder.number}
                      </Text>
                    </Box>
                  </Td>
                  {isWideScreen && (
                    <Td>
                      <Tag
                        colorScheme={
                          serviceOrder.status === "Orçamento"
                            ? "yellow"
                            : "green"
                        }
                      >
                        {serviceOrder.status}
                      </Tag>
                    </Td>
                  )}
                  <Td>
                    <Box>
                      <Text fontWeight="bold" marginBottom={2}>
                        {serviceOrder.customer.name}
                      </Text>
                    </Box>
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold" marginBottom={2}>
                        {serviceOrder.endDate}
                      </Text>
                    </Box>
                  </Td>
                  {isWideScreen && (
                    <Td>
                      {!!serviceOrder.id && (
                        <MenuActions
                          options={[
                            {
                              icon: RiPencilLine,
                              name: "Editar",
                              onClick: () =>
                                router.push({
                                  pathname: "serviceOrders/edit",
                                  query: { id: serviceOrder.id },
                                }),
                            },
                            {
                              icon: HiOutlineTrash,
                              name: "Deletar",
                              onClick: () => {
                                setServiceOrderIdSelected(serviceOrder.id);
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
  );
}
