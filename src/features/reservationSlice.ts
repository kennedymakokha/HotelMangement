import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ReservationState {
    value: string[]
}
const initialState: ReservationState = {
    value: []
}
export const reservationSlice = createSlice({
    name: 'reservations',
    initialState,
    reducers: {
        addResevation: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        },
        removeResevation: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload,1)
        }
    }
})
export const { addResevation,removeResevation } = reservationSlice.actions;
export default reservationSlice.reducer;
