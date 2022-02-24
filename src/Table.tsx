import React, { FC, Fragment, useRef, useState } from 'react';
import Layout from './Layout';
import Img from './img/people.svg'
import { Dialog, Transition } from '@headlessui/react'
import EditTableModal from './components/modals/EditTableModal';
import { ITableData } from './interfaces';
import AddTableModal from './components/modals/AddTableModal';
import DeleteTableModal from './components/modals/DeleteTableModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import { addTable } from './features/tableSlice';
// import { ExclamationIcon } from '@heroicons/react/outline'
const Table = () => {

    const [open, setOpen] = useState<boolean>(false)
    const [table, setTable] = useState<ITableData>()
    const [openAddModal, setAddModal] = useState<boolean>(false)
    const [delModal, setDeleteModal] = useState<boolean>(false)
    const [name, changeName] = useState<string>('')
    const [capacity, changeCapacity] = useState<number>(0)

    const Tables = useSelector((state: RootState) => state.tables.value)

    const dispatch = useDispatch()

    const EditTable = (data: ITableData): void => {
        setTable(data)
        setOpen(true)
    }

    const closeAddModal = (): void => {
        setAddModal(false)
    }
    const openDeleteModal = (data: ITableData): void => {
        setTable(data)
        console.log(data)
        setDeleteModal(true)
    }
    const closeModal = (): void => {
        setDeleteModal(false)
    }

    const closeEdit = (): void => {
        setOpen(false)
    }
    const changeInput = (e: string) => {
        changeName(e)
    }
    const changeCapacityInput = (e: number) => {
        changeCapacity(Number(e))
    }

    const submit = (): void => {
        const data = {
            name,
            capacity,

        }
        dispatch(addTable(data))
        setAddModal(false)

    }

    return (
        <Layout>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <button onClick={() => setAddModal(true)} className='bg-green-400 shadow-md px-3 py-3 rounded-md float-right mb-2'>Add New Table</button>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {Tables.map((table, i) => (
                                        <tr key={i}>
                                            <td className="px-0 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900"></div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{table.name}</div>

                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm text-gray-900"> {table.capacity} persons </span>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900" onClick={() => EditTable(table)}>Edit</a>
                                                <span className='px-2'>|</span>
                                                <a href="#" className="text-red-600 hover:text-indigo-900" onClick={() => openDeleteModal(table)}>Delete</a>
                                            </td>
                                        </tr>
                                    ))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <EditTableModal show={open} setOpen={closeEdit} />
                <AddTableModal show={openAddModal} changeNameinput={changeInput} changeCapacitynput={changeCapacityInput} submit={submit} close={closeAddModal} />
                <DeleteTableModal show={delModal} close={closeModal} />
            </div>



        </Layout>
    );
}

export default Table;