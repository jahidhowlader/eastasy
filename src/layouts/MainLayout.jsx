import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <Flex w={'100%'}>

            <aside style={{ width: "17%", height: '100vh', paddingLeft: '30px', paddingTop: '20px', paddingRight: '20px', paddingBottom: '10px', background: 'white', position: 'relative' }}>
                <Sidebar />
            </aside>

            <main style={{ width: "100%", background: "#F5F5FA" }}>
                <Outlet />
            </main>
        </Flex>
    )
}
