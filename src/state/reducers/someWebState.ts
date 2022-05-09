import { createSlice } from '@reduxjs/toolkit'

export const someWebSlice = createSlice({
    name: 'someWebs',
    initialState: {
        resultado: 0,
        isLoading: true,
    },
    reducers: {
        getSomeWebFetch: (state) => {
            state.isLoading = true
        },
        getSomeWebSuccess: (state, action) => {
            state.resultado = action.payload.time
            console.log(action)
            state.isLoading = false
        },
        getSomeWebFailure: (state) => {
            state.resultado = 404
            state.isLoading = false
        },
    },
})

export const { getSomeWebFetch, getSomeWebSuccess, getSomeWebFailure } =
    someWebSlice.actions

export default someWebSlice.reducer
