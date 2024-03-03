/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useStyleConfig,
  forwardRef,
  ThemingProps,
  HTMLChakraProps,
  Icon,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  Table,
  Checkbox,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  MdAddTask,
  MdBarChart,
  MdFileCopy,
  MdAddHome,
  MdOutlineCalendarToday,
  MdOutlineMoreHoriz,
  MdOutlinePerson,
  MdOutlineCardTravel,
  MdOutlineLightbulb,
  MdOutlineSettings,
  MdTimelapse,
} from "react-icons/md";

import ReactApexChart from "react-apexcharts";

import { RiArrowUpSFill } from "react-icons/ri";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

// import { ReactNode } from "react";
// import { BsPerson } from "react-icons/bs";
// import { FiServer } from "react-icons/fi";
// import { GoLocation } from "react-icons/go";

// interface StatsCardProps {
//   title: string;
//   stat: string;
//   icon: ReactNode;
// }

interface CustomCardProps extends HTMLChakraProps<"div">, ThemingProps {}

const Card = forwardRef<CustomCardProps, "div">((props, ref) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig("Card", { size, variant });

  return <chakra.div ref={ref} __css={styles} {...rest} />;
});

function MiniStatistics(props: {
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  name: string;
  growth?: string | number;
  value: string | number;
}) {
  const { startContent, endContent, name, growth, value } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";

  return (
    <Card py="15px" bgColor="white" borderRadius="20px">
      <Flex
        my="auto"
        h="100%"
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}
      >
        {startContent}

        <Stat my="auto" ms={startContent ? "18px" : "0px"}>
          <StatLabel
            lineHeight="100%"
            color={textColorSecondary}
            fontSize={{
              base: "sm",
            }}
          >
            {name}
          </StatLabel>
          <StatNumber
            color={textColor}
            fontSize={{
              base: "2xl",
            }}
          >
            {value}
          </StatNumber>
          {growth ? (
            <Flex align="center">
              <Text color="green.500" fontSize="xs" fontWeight="700" me="5px">
                {growth}
              </Text>
              <Text color="secondaryGray.600" fontSize="xs" fontWeight="400">
                since last month
              </Text>
            </Flex>
          ) : null}
        </Stat>
        <Flex ms="auto" w="max-content">
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
}

function IconBox(props: { icon: JSX.Element | string; [x: string]: any }) {
  const { icon, ...rest } = props;

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"50%"}
      {...rest}
    >
      {icon}
    </Flex>
  );
}

// function StatsCard(props: StatsCardProps) {
//   const { title, stat, icon } = props;
//   return (
//     <Stat
//       px={{ base: 2, md: 4 }}
//       py={"5"}
//       shadow={"xl"}
//       border={"1px solid"}
//       borderColor={useColorModeValue("gray.800", "gray.500")}
//       rounded={"lg"}
//     >
//       <Flex justifyContent={"space-between"}>
//         <Box pl={{ base: 2, md: 4 }}>
//           <StatLabel fontWeight={"medium"} isTruncated>
//             {title}
//           </StatLabel>
//           <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
//             {stat}
//           </StatNumber>
//         </Box>
//         <Box
//           my={"auto"}
//           color={useColorModeValue("gray.800", "gray.200")}
//           alignContent={"center"}
//         >
//           {icon}
//         </Box>
//       </Flex>
//     </Stat>
//   );
// }

interface ChartProps {
  chartData: any[];
  chartOptions: any;
}

const LineChart: React.FC<ChartProps> = (props) => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [chartOptions, setChartOptions] = useState<any>({});

  useEffect(() => {
    setChartData(props.chartData);
    setChartOptions(props.chartOptions);
  }, [props.chartData, props.chartOptions]);

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartData}
      type="line"
      width="100%"
      height="100%"
    />
  );
};

function TotalSpent(props: { [x: string]: any }) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" },
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" },
  );

  const lineChartDataTotalSpent = [
    {
      name: "Users",
      data: [50, 64, 48, 66, 49, 68],
    },
    {
      name: "New Users",
      data: [2, 10, 12, 8, 5, 16],
    },
  ];

  const lineChartOptionsTotalSpent: any = {
    chart: {
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 13,
        left: 0,
        blur: 10,
        opacity: 0.1,
        color: "#4318FF",
      },
    },
    colors: ["#4318FF", "#39B8FF"],
    markers: {
      size: 0,
      colors: "white",
      strokeColors: "#7551FF",
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      showNullDataPoints: true,
    },
    tooltip: {
      theme: "dark",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      type: "line",
    },
    xaxis: {
      type: "numeric",
      categories: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      column: {
        color: ["#7551FF", "#39B8FF"],
        opacity: 0.5,
      },
    },
    color: ["#7551FF", "#39B8FF"],
  };
  return (
    <Card
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      w="100%"
      mb="0px"
      p="20px"
      borderRadius="20px"
      bgColor="white"
      {...rest}
    >
      <Flex align="center" justify="space-between" w="100%" pe="20px" pt="5px">
        <Button
          bg={boxBg}
          fontSize="sm"
          fontWeight="500"
          color={textColorSecondary}
          borderRadius="7px"
        >
          <Icon
            as={MdOutlineCalendarToday}
            color={textColorSecondary}
            me="4px"
          />
          This month
        </Button>
        <Button
          ms="auto"
          alignItems="center"
          justifyContent="center"
          bg={bgButton}
          _hover={bgHover}
          _focus={bgFocus}
          _active={bgFocus}
          w="37px"
          h="37px"
          lineHeight="100%"
          borderRadius="10px"
          {...rest}
        >
          <Icon as={MdBarChart} color={iconColor} w="24px" h="24px" />
        </Button>
      </Flex>
      <Flex w="100%" flexDirection={{ base: "column", lg: "row" }}>
        <Flex flexDirection="column" me="20px" mt="28px">
          <Flex align="center" mb="20px">
            <Text
              color="secondaryGray.600"
              fontSize="sm"
              fontWeight="500"
              mt="4px"
              me="12px"
            >
              Total Engagement
            </Text>
          </Flex>
          <Flex align="center">
            <Icon as={RiArrowUpSFill} color="green.500" me="2px" mt="2px" />
            <Text color="green.500" fontSize="sm" fontWeight="700">
              +40.45%
            </Text>
          </Flex>
        </Flex>
        <Box minH="260px" minW="75%" mt="auto">
          <LineChart
            chartData={lineChartDataTotalSpent}
            chartOptions={lineChartOptionsTotalSpent}
          />
        </Box>
      </Flex>
    </Card>
  );
}

function Banner(props: { [x: string]: any }) {
  const { ...rest } = props;

  const textColor = useColorModeValue("secondaryGray.500", "white");
  const textHover = useColorModeValue(
    { color: "secondaryGray.900", bg: "unset" },
    { color: "secondaryGray.500", bg: "unset" },
  );
  const iconColor = useColorModeValue("brand.500", "white");
  const bgList = useColorModeValue("white", "whiteAlpha.100");
  const bgShadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset",
  );
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" },
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" },
  );

  // Ellipsis modals
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();

  return (
    <Menu isOpen={isOpen1} onClose={onClose1}>
      <MenuButton
        alignItems="center"
        justifyContent="center"
        bg={bgButton}
        _hover={bgHover}
        _focus={bgFocus}
        _active={bgFocus}
        w="37px"
        h="37px"
        lineHeight="100%"
        onClick={onOpen1}
        borderRadius="10px"
        {...rest}
      >
        <Icon as={MdOutlineMoreHoriz} color={iconColor} w="24px" h="24px" />
      </MenuButton>
      <MenuList
        w="150px"
        minW="unset"
        maxW="150px !important"
        border="transparent"
        backdropFilter="blur(63px)"
        bg={bgList}
        boxShadow={bgShadow}
        borderRadius="20px"
        p="15px"
      >
        <MenuItem
          transition="0.2s linear"
          color={textColor}
          _hover={textHover}
          p="0px"
          borderRadius="8px"
          _active={{
            bg: "transparent",
          }}
          _focus={{
            bg: "transparent",
          }}
          mb="10px"
        >
          <Flex align="center">
            <Icon as={MdOutlinePerson} h="16px" w="16px" me="8px" />
            <Text fontSize="sm" fontWeight="400">
              Panel 1
            </Text>
          </Flex>
        </MenuItem>
        <MenuItem
          transition="0.2s linear"
          p="0px"
          borderRadius="8px"
          color={textColor}
          _hover={textHover}
          _active={{
            bg: "transparent",
          }}
          _focus={{
            bg: "transparent",
          }}
          mb="10px"
        >
          <Flex align="center">
            <Icon as={MdOutlineCardTravel} h="16px" w="16px" me="8px" />
            <Text fontSize="sm" fontWeight="400">
              Panel 2
            </Text>
          </Flex>
        </MenuItem>
        <MenuItem
          transition="0.2s linear"
          p="0px"
          borderRadius="8px"
          color={textColor}
          _hover={textHover}
          _active={{
            bg: "transparent",
          }}
          _focus={{
            bg: "transparent",
          }}
          mb="10px"
        >
          <Flex align="center">
            <Icon as={MdOutlineLightbulb} h="16px" w="16px" me="8px" />
            <Text fontSize="sm" fontWeight="400">
              Panel 3
            </Text>
          </Flex>
        </MenuItem>
        <MenuItem
          transition="0.2s linear"
          color={textColor}
          _hover={textHover}
          p="0px"
          borderRadius="8px"
          _active={{
            bg: "transparent",
          }}
          _focus={{
            bg: "transparent",
          }}
        >
          <Flex align="center">
            <Icon as={MdOutlineSettings} h="16px" w="16px" me="8px" />
            <Text fontSize="sm" fontWeight="400">
              Panel 4
            </Text>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

type RowObj = {
  name: [string, boolean];
  engagement: string;
  users: number;
  date: string;
  info: boolean;
};

const columnHelper = createColumnHelper<RowObj>();

function CheckTable(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  const defaultData = tableData;
  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          NAME
        </Text>
      ),
      cell: (info: any) => (
        <Flex align="center">
          <Checkbox
            defaultChecked={info.getValue()[1]}
            colorScheme="brandScheme"
            me="10px"
          />
          <Text color={textColor} fontSize="sm" fontWeight="700">
            {info.getValue()[0]}
          </Text>
        </Flex>
      ),
    }),
    columnHelper.accessor("engagement", {
      id: "engagement",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          engagement
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor("users", {
      id: "users",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          users
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor("date", {
      id: "date",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          DATE
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
    }),
  ];
  const [data] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <Card
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
      bgColor="white"
      borderRadius="20px"
    >
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Trends
        </Text>
        <Banner />
      </Flex>
      <Box>
        <Table variant="simple" color="gray.500" mb="24px" mt="12px">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th
                      key={header.id}
                      colSpan={header.colSpan}
                      pe="10px"
                      borderColor={borderColor}
                      cursor="pointer"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <Flex
                        justifyContent="space-between"
                        align="center"
                        fontSize={{ sm: "10px", lg: "12px" }}
                        color="gray.400"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: "",
                          desc: "",
                        }[header.column.getIsSorted() as string] ?? null}
                      </Flex>
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table
              .getRowModel()
              .rows.slice(0, 5)
              .map((row) => {
                return (
                  <Tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <Td
                          key={cell.id}
                          fontSize={{ sm: "14px" }}
                          minW={{ sm: "150px", md: "200px", lg: "auto" }}
                          borderColor="transparent"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </Box>
    </Card>
  );
}

export default function Dashboard() {
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const brandColor = useColorModeValue("brand.500", "white");

  const tableDataCheck: RowObj[] = [
    {
      name: ["Urban Zone 1", true],
      users: 2458,
      engagement: "17.5%",
      date: "04 Feb 2024",
      info: true,
    },
    {
      name: ["Urban Zone 2", true],
      users: 1485,
      engagement: "10.8%",
      date: "04 Feb 2024",
      info: true,
    },
    {
      name: ["Suburb Zone 1", true],
      users: 1024,
      engagement: "21.3%",
      date: "04 Feb 2024",
      info: true,
    },
    {
      name: ["Suburb Zone 3", true],
      users: 858,
      engagement: "31.5%",
      date: "04 Feb 2024",
      info: true,
    },
    {
      name: ["Suburb Zone 2", true],
      users: 258,
      engagement: "12.2%",
      date: "04 Feb 2024",
      info: true,
    },
  ];

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
              }
            />
          }
          name="New Users"
          value="67"
          growth="+40%"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
              }
            />
          }
          growth="+10%"
          name="Total Users"
          value="320"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdTimelapse} color={brandColor} />
              }
            />
          }
          growth="+22%"
          name="Session Time"
          value="10 seconds"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdAddHome} color={brandColor} />
              }
            />
          }
          name="Your balance"
          value="$1,000"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdAddTask} color={brandColor} />
              }
            />
          }
          name="Ad Played"
          value="10 hours"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name="Miles Covered"
          value="200"
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <TotalSpent />
        {/*<WeeklyRevenue /> */}
        <CheckTable tableData={tableDataCheck} />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        {/* <CheckTable tableData={tableDataCheck} /> */}
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          {/* <DailyTraffic />
          <PieCard /> */}
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        {/* <ComplexTable tableData={tableDataComplex} /> */}
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          {/* <Tasks />
          <MiniCalendar h="100%" minW="100%" selectRange={false} /> */}
        </SimpleGrid>
      </SimpleGrid>
    </Box>
    // <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
    //   <chakra.h1
    //     textAlign={"center"}
    //     fontSize={"4xl"}
    //     py={10}
    //     fontWeight={"bold"}
    //   >
    //     Campaign Reports
    //   </chakra.h1>
    //   <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
    //     <StatsCard
    //       title={"New Users"}
    //       stat={"5,000"}
    //       icon={<BsPerson size={"3em"} />}
    //     />
    //     <StatsCard
    //       title={"Sessions"}
    //       stat={"1,000"}
    //       icon={<FiServer size={"3em"} />}
    //     />
    //     <StatsCard
    //       title={"PLACEHOLDER"}
    //       stat={"7"}
    //       icon={<GoLocation size={"3em"} />}
    //     />
    //   </SimpleGrid>
    // </Box>
  );
}
