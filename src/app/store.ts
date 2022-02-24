import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from '../features/employeeSlice'
import reservationReducer from '../features/reservationSlice'
import reserveManagementReducer from '../features/reserveManagementSlice'
import tableReducer from '../features/tableSlice'
export const store = configureStore({
    reducer: {
        resrvations: reservationReducer,
        customers: reserveManagementReducer,
        tables: tableReducer,
        employees: employeeReducer

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch