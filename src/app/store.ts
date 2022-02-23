import { configureStore } from '@reduxjs/toolkit'
import reservationReducer from '../features/reservationSlice'
import reserveManagementReducer from '../features/reserveManagementSlice'
export const store = configureStore({
    reducer: {
        resrvations: reservationReducer,
        customers: reserveManagementReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch