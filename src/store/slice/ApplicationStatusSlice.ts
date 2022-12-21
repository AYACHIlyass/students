import {createSlice} from '@reduxjs/toolkit'

interface ApplicationStatusState {
    isLoading: boolean,
    isError: boolean
}

const initialState: ApplicationStatusState = {isLoading: false, isError: false}

const ApplicationStatusSlice = createSlice({
    name: 'ApplicationStatus',
    initialState,
    reducers: {
        startSpinner(state) {
            state.isLoading = true;
        },
        stopSpinner(state) {
            state.isLoading = false;
        },
    },
})
export const applicationStatusActions = ApplicationStatusSlice.actions;
export const applicationStatusReducer = ApplicationStatusSlice.reducer;