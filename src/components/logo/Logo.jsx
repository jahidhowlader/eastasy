import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

export default function Logo() {
    return (
        <Flex alignItems={'center'} gap={1}>
            <Image
                src='/assets/logo/logo.svg'
                w={6}
            />
            <Box fontSize={'24px'} fontWeight={600}>Eastasy</Box>
        </Flex>
    )
}
