import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const animatedSidebarSlice = createSlice({
    name: 'animatedSidebar',
    initialState,
    reducers: {
        setAnimatedSidebar: (state) => {

            state.value = !state.value
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setAnimatedSidebar } = animatedSidebarSlice.actions

export default animatedSidebarSlice.reducer