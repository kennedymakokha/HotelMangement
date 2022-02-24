import React, { ChangeEvent, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { ITableData } from '../../interfaces';
interface props {
    show: boolean
    close(): void,
    changeInput(e: any): void

    submit(): void
    // data: ITableData
}

const EditEmployeeModal = ({ show, close, changeInput, submit }: props) => {
    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={close}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-6 ml-6 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">

                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            Edit account
                                        </Dialog.Title>
                                        <div className="h-56 mt-3 w-96">
                                            <div className=" w-full ">
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    onChange={(e: ChangeEvent<HTMLInputElement>) => changeInput(e)}

                                                    className="p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none  rounded-r-md sm:text-sm border-gray-600 bg-slate-300"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className=" ">
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                    Capacity
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    onChange={(e: ChangeEvent<HTMLInputElement>) => changeInput(e)}

                                                    className=" p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none  rounded-r-md sm:text-sm border-gray-600 bg-slate-300"
                                                    placeholder="example@gmail.com"
                                                />
                                            </div>
                                            <div className=" ">
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="number"
                                                    name="phone"
                                                    onChange={(e: ChangeEvent<HTMLInputElement>) => changeInput(e)}

                                                    className=" p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none  rounded-r-md sm:text-sm border-gray-600 bg-slate-300"
                                                    placeholder="example@gmail.com"
                                                />
                                            </div>
                                            <div className=" ">
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                                    Role
                                                </label>
                                                <select name="role" 
                                                    onChange={(e) => changeInput(e)}
                                                    className=" p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none  rounded-r-md sm:text-sm border-gray-600 bg-slate-300"
                                                >
                                                    <option value="admin" >Admin</option>
                                                    <option value="Waitress/waiter">Waitress/waiter</option>
                                                </select>
                                                {/* <input
                                                    type="number"
                                                    name="phone"
                                                   

                                                    className=" p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none  rounded-r-md sm:text-sm border-gray-600 bg-slate-300"
                                                    placeholder="example@gmail.com"
                                                /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-400 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => submit()}
                                >
                                    Save
                                </button>
                                <button
                                    type="button"

                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => close()}

                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default EditEmployeeModal;