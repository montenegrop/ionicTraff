import { createSlice } from '@reduxjs/toolkit'

interface someWebState {
    resultado: any
    isLoading: Boolean
}

const someWebInitialState: someWebState = {
    resultado: 0,
    isLoading: false,
}

export const someWebSlice = createSlice({
    name: 'someWebs',
    initialState: someWebInitialState,
    reducers: {
        getSomeWebFetch: (state) => {
            state.isLoading = true
        },
        getSomeWebSuccess: (state, action) => {
            console.log('action:', action)
            state.resultado = action.payload.Countries ?? action.payload
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
