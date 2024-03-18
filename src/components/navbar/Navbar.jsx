import { Avatar, Box, Flex, Input } from "@chakra-ui/react";
import { RiMessage3Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} bg={'white'} py={5} px={10}>
            {/* Search Input */}
            <Box position={'relative'}>
                <Input size={'sm'} w={'250px'} rounded={'md'} bg={'#f5f5fa'} placeholder='Search' pl={8} />

                {/* Search Icon */}
                <Box position={'absolute'} zIndex={2} left={2} top={'50%'} style={{ transform: 'translateY(-50%)' }}>
                    <CiSearch size={20} />
                </Box>

            </Box>

            <Flex alignItems={'center'} gap={7}>

                {/* Message ICON */}
                <RiMessage3Line size={20} />

                {/* Notification ICON */}
                <FaRegBell size={20} />


                {/* Pofile Avator TODO: DYNAMIC NAME ANR SRC*/}
                <Avatar size={'sm'} name='Jahid' src='/assets/jahid.jpeg' />

            </Flex>
        </Flex>
    )
}
