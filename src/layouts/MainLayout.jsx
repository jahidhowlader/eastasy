import { Box, Flex, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import { useSelector } from 'react-redux'

export default function MainLayout() {

    const animatedSidebar = useSelector((state) => state.animatedSidebar.value)

    return (
        <Flex w={'100%'}>

            <aside style={{
                width: `${animatedSidebar ? '4.5%' : '17%'}`,
                height: '100vh',
                paddingLeft: `${!animatedSidebar ? '20px' : '20px'}`,
                paddingTop: '20px',
                paddingRight: '20px',
                paddingBottom: '10px',
                background: 'white',
                position: 'relative',
                transition: 'width 0.5s ease-in-out'
            }}>
                <Sidebar />
            </aside>

            <main style={{ width: "100%", background: "#F5F5FA" }}>
                <Navbar />
                <Box px={5} py={8}>
                    <Outlet />
                </Box>
            </main>
        </Flex>
    )
}
