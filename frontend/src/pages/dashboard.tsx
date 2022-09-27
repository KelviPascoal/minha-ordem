import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import Dinamic from "next/dynamic";

const Chart = Dinamic(() => import("react-apexcharts"), { ssr: false });
import { ApexOptions } from "apexcharts";

export default function Dashboard() {
  const chartOptions: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      // enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        "2022-01-06T00:00:00.000Z",
        "2022-01-07T00:00:00.000Z",
        "2022-01-08T00:00:00.000Z",
        "2022-01-09T00:00:00.000Z",
        "2022-01-10T00:00:00.000Z",
        "2022-01-11T00:00:00.000Z",
      ],
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  };

  const chartSeries = [{ name: "series1", data: [32, 3, 109, 5, 32, 90] }];

  return (
    <Flex flexDir="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["2", "6"]}>
        <Sidebar />

        <SimpleGrid flex="1" minChildWidth={320} gap="4">
          <Box bgColor="gray.800" p={["6", "8"]} borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>

            <Chart
              options={chartOptions}
              series={chartSeries}
              type="area"
              height={160}
            />
          </Box>
          <Box bgColor="gray.800" p={["6", "8"]} borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>

            <Chart
              options={chartOptions}
              series={chartSeries}
              type="area"
              height={160}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
