import React from 'react'
import Logo from '../logo/Logo'
import { NavLink } from 'react-router-dom'
import './sidebar.css'
import { Box, Flex } from '@chakra-ui/react'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";
import { AiTwotoneSound } from "react-icons/ai";
import { CgFlag } from "react-icons/cg";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineFeedback } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { RiArrowLeftSLine } from "react-icons/ri";

const sidebarLinkName = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: <MdOutlineDashboardCustomize />
    },
    {
        path: '/analytics',
        name: 'Analytics',
        icon: <IoAnalyticsOutline />
    },
    {
        path: '/campaigns',
        name: 'Campaigns',
        icon: <AiTwotoneSound />
    },
    {
        path: '/placements',
        name: 'Placements',
        icon: <CgFlag />
    },
    {
        path: '/widget',
        name: 'Widget',
        icon: <TbTargetArrow />
    },
    {
        path: '/audiences',
        name: 'Audiences',
        icon: <HiOutlineUsers />
    },
    {
        path: '/feeds',
        name: 'Feeds',
        icon: <MdOutlineFeedback />
    },
    {
        path: '/settings',
        name: 'Settings',
        icon: <CiSettings />
    }
]

export default function Sidebar() {
    return (
        <>

            <Box position={'absolute'} right={-3} top={7} zIndex={2} bg={'white'} border={'1px'} borderColor={'white'} borderRadius={'full'} color={'black'}>
                <RiArrowLeftSLine size={20} />
            </Box>

            <Logo />

            <nav style={{ width: '100%' }}>
                <Flex direction='column' mt={10} gap={1}>
                    {
                        sidebarLinkName && sidebarLinkName?.map(sidebar => <NavLink
                            key={sidebar?.path}
                            to={sidebar?.path}
                            className={({ isActive }) => isActive ? "active-link" : ""}
                            style={{ padding: '10px 0 10px 10px', borderRadius: "5px", display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                        >
                            {sidebar?.icon} {sidebar?.name}
                        </NavLink>)
                    }
                </Flex>
            </nav>
        </>
    )
}
