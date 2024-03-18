import React, { useEffect, useState } from 'react'
import Logo from '../logo/Logo'
import { NavLink } from 'react-router-dom'
import './sidebar.css'
import { Box, Flex, Text } from '@chakra-ui/react'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";
import { AiTwotoneSound } from "react-icons/ai";
import { CgFlag } from "react-icons/cg";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineFeedback } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux'
import { setAnimatedSidebar } from '../../app/features/animatedSidebar/animatedSidebarSlice'

const sidebarLinkName = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: <MdOutlineDashboardCustomize size={20} />
    },
    {
        path: '/analytics',
        name: 'Analytics',
        icon: <IoAnalyticsOutline size={20} />
    },
    {
        path: '/campaigns',
        name: 'Campaigns',
        icon: <AiTwotoneSound size={20} />
    },
    {
        path: '/placements',
        name: 'Placements',
        icon: <CgFlag size={20} />
    },
    {
        path: '/widget',
        name: 'Widget',
        icon: <TbTargetArrow size={20} />
    },
    {
        path: '/audiences',
        name: 'Audiences',
        icon: <HiOutlineUsers size={20} />
    },
    {
        path: '/feeds',
        name: 'Feeds',
        icon: <MdOutlineFeedback size={20} />
    },
    {
        path: '/settings',
        name: 'Settings',
        icon: <CiSettings size={20} />
    }
]

export default function Sidebar() {

    const animatedSidebar = useSelector((state) => state.animatedSidebar.value)

    const dispatch = useDispatch()

    return (
        <>
            <Box
                onClick={() => dispatch(setAnimatedSidebar())}
                position={'absolute'}
                right={-3}
                top={7}
                zIndex={2}
                bg={'white'}
                border={'1px'}
                borderRadius={'full'}
                color={'black'}
            >
                {
                    !animatedSidebar ? <RiArrowLeftSLine size={20} /> : <RiArrowRightSLine size={20} />
                }
            </Box>

            <Logo />

            <nav style={{ width: '100%' }}>
                <Flex direction='column' mt={10} gap={1} >
                    {
                        sidebarLinkName && sidebarLinkName?.map(sidebar => <NavLink
                            key={sidebar?.path}
                            to={sidebar?.path}
                            className={({ isActive }) => isActive ? "active-link" : ""}
                            style={{
                                padding: '10px 0 10px 10px',
                                borderRadius: "8px",
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px'
                            }}
                        >
                            <Flex h={'20px'} alignItems={'center'} gap={'5px'} m={0}>

                                <Box>
                                    {sidebar?.icon}
                                </Box>

                                <Text
                                    // display={'hidden'}
                                    display={!animatedSidebar ? 'block' : 'none'}
                                    style={{
                                        transition: 'opacity 5s ease-in-out'
                                    }}
                                >
                                    {sidebar?.name}
                                </Text>
                            </Flex>
                        </NavLink>)
                    }
                </Flex>
            </nav>
        </>
    )
}
