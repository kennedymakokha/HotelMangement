import React from 'react';
import { useDispatch } from 'react-redux';
import { removeResevation } from '../features/reservationSlice';
import { addCustomer } from '../features/reserveManagementSlice';

interface ReservationCardTypes {
    name: string,
    key: number,

}

const ResevationCard = ({ name, key }: ReservationCardTypes) => {
    const dispatch = useDispatch()
    const newTask = {
        name: name,
        id:key,
        foods:[]
  
      }
    const remove=()=>{
        dispatch(removeResevation(key))
        dispatch(addCustomer(newTask))
    }
    return (
        <div onClick={() =>remove()} className='border rounded-md px-2 mr-3 my-3 shadow-lg'>{name}</div>
    );
}

export default ResevationCard;