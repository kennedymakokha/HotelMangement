import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITableData } from '../interfaces'

interface TableState {
    value: ITableData[]
}
const initialState: TableState = {
    value: [
        {
           
            name: 'T001',
            capacity: 4
        },
        {
           
            name: 'T002',
            capacity: 7
        }
    ]
}
export const tableSlice = createSlice({
    name: 'tables',
    initialState,
    reducers: {
        addTable: (state, action: PayloadAction<ITableData>) => {
            state.value.push(action.payload)
        },

    }
})
export const { addTable } = tableSlice.actions;
export default tableSlice.reducer;
