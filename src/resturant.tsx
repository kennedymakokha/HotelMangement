import React, { ChangeEvent, FC, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { RootState } from './app/store';
import CustomerCard from './components/customerCard';
import ResevationCard from './components/resevationCard';
import { addResevation } from './features/reservationSlice';
import { IOrder, ITable } from './interfaces';
const Resturant = () => {
    const reservations = useSelector((state: RootState) => state.resrvations.value)

    const customers = useSelector((state: RootState) => state.customers.value)

    const [name, changeName] = useState<string>('')
    const [Ordername, changeOrderName] = useState<string>('')

    const dispatch = useDispatch()

    const Reserve = (): void => {
        if (!name) return
        dispatch(addResevation(name))
        changeName("")
    }
    


    return (
        <div className='flex  w-screen h-screen p-20 '>
            <div className='w-1/3 relative flex-row  h-full border-r-2 '>
                <h3 className='font-bold underline'>Reservation </h3>
                {reservations.map((name, key: number) => (
                    <ResevationCard name={name} key={key} />
                ))}


                <div className="absolute w-full mb-2 p-2 bottom-10  h-10 " >
                    <div className='flex gap-2  w-full flex-col '>
                        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => changeName(e.target.value)} className='border' name="name" />
                        <button className='bg-gray-200 rounded-md ' onClick={Reserve} >Add</button>
                    </div>

                </div>
            </div>
            <div className='w-2/3 h-full'>
                {customers.map((customer: ITable, key: number) => (
                    <CustomerCard customer={customer} />
                ))}

            </div>

        </div>
    );
}

export default Resturant;