import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Logo() {

    const animatedSidebar = useSelector((state) => state.animatedSidebar.value)

    return (
        <Flex alignItems={'center'} gap={1} h={10}>
            <Image
                src='/assets/logo/logo.svg'
                w={8}
            />
            {!animatedSidebar && <Box fontSize={'24px'} fontWeight={600} as='i' m={0}>Eastasy</Box>}
        </Flex>
    )
}
