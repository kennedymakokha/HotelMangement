import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFoodCustomer } from '../features/reserveManagementSlice';
import { IOrder, ITable } from '../interfaces';

interface Prop {
    customer: ITable

}



const CustomerCard = ({ customer, }: Prop) => {
    const [orderItem, ChangeOrderItem] = useState('')
    const dispatch = useDispatch()
    const addOrder = (): void => {
        dispatch(addFoodCustomer({ id: customer.id, food: orderItem }))

    }
    return (
        <div className='border flex-col flex rounded-sm p-2 mx-3 mt-8 pb-6  my-3 shadow-lg'>
            <div className=' justify-self-start flex items-start justify-start'>{customer.name}</div>
            <div className='flex w-full'>
                <div className='w-2/3 bg-red flex flex-wrap'>
                    {customer.foods.map(name => (
                        <div className='  text-xs flex justify-center items-center capitalize'>{name}<span className='px-1 text-gray-300'>|</span></div>
                    ))}


                </div>
                <div className='w-1/3 '>

                    <input name="" type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => ChangeOrderItem(e.target.value)} className='border w-40 mx-2 ' />
                    <button className='bg-gray-200 rounded-md px-2 ' onClick={addOrder}  >Add</button>
                </div>
            </div>
        </div>
    );
}

export default CustomerCard;