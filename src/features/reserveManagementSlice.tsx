import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IOrder, ITable } from '../interfaces'

interface CustomerReservationState {
    value: ITable[]
}
const initialState: CustomerReservationState = {
    value: []
}


export const customerSlice = createSlice({
    name: 'custermerReservation',
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<ITable>) => {
            state.value.push(action.payload)
        },
        addFoodCustomer: (state, action: PayloadAction<IOrder>) => {
            state.value.forEach((customer => {
                if (customer.id === action.payload.id) {
                    customer.foods.push(action.payload.food)
                }
            }))
            // state.value.push(action.payload)
        }
    }
})
export const { addCustomer,addFoodCustomer } = customerSlice.actions;
export default customerSlice.reducer;
