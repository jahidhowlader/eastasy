import { Box, Flex, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { GoHome } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import StackedAreaChart from "./StackedAreaChart";

export default function Home() {

  return (
    <Box>
      {/* Page Title */}
      <Heading as={"h2"} fontWeight={700} fontSize={28}>Dashboard</Heading>
      {/* Page path */}
      <Flex alignItems={'center'} gap={1} mb={8}>
        {/* Icon */}
        <GoHome />
        {/*  */}
        <Text>Home </Text>
        {/* Right Icon */}
        <MdKeyboardArrowRight />
        <Text color={'primary'} fontWeight={500}> Dashboard</Text>
      </Flex>

      {/*  */}
      <Wrap gap={10}>
        {/* Total Sales  */}
        {
          [1, 2, 3, 4].map((_, index) => <WrapItem
            key={index}>
            <Box
              bg={'white'} rounded={'lg'} p={3} minW={'385px'}>

              <Text opacity={.5}>Total Sales</Text>

              <Flex alignItems={'center'} justifyContent={'space-between'} gap={20} mt={2}>
                <Flex alignItems={'center'} gap={2}>
                  <Box bg={"secondary"} p={1} rounded={'lg'}>
                    <AiOutlineDeploymentUnit color="white" />
                  </Box>
                  <Heading as={'h6'} fontSize={'18px'} fontWeight={800} m={0}>${(index + 1) * 123 }.00</Heading>
                </Flex>

                <Flex alignItems={'center'} gap={1} color={'secondary'}>
                  <GoLinkExternal />
                  <Text fontWeight={700}>34.7%</Text>
                </Flex>
              </Flex>

              <Text textAlign={'end'} fontSize={'14px'} mt={1} opacity={.5}>Compare to january 2025</Text>
            </Box>
          </WrapItem>)
        }
      </Wrap>

      {/*  */}
      {/* <StackedAreaChart /> */}

    </Box>
  )
}
