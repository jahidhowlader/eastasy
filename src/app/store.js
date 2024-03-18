import { configureStore } from '@reduxjs/toolkit'
import animatedSidebarSlice from './features/animatedSidebar/animatedSidebarSlice'

export const store = configureStore({
    reducer: {
        animatedSidebar: animatedSidebarSlice
    },
})