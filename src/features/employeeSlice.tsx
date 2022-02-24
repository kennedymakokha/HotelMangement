import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IEmployee } from '../interfaces'

interface EmployeeState {
    value: IEmployee[]
}
const initialState: EmployeeState = {
    value: [
        {

            name: 'T001',
            role: "admin",
            phone_number: '0716017221',
            email: 'katchibo2@gmail.com'
        },
        {

            name: 'Kennedy makokha',
            role: "admin",
            phone_number: '0716017221',
            email: 'katchibo2@gmail.com'
        }
    ]
}
export const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee: (state, action: PayloadAction<IEmployee>) => {
            state.value.push(action.payload)
        },

    }
})
export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
