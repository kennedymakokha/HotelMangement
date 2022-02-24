import React, { useState } from 'react';
import Layout from './Layout';
import Img from './img/people.svg'
import { RootState } from './app/store';
import { useDispatch, useSelector } from 'react-redux';
import AddEmployeeModal from './components/modals/addEmployeeModal';
import { addEmployee } from './features/employeeSlice';
import { IEmployee } from './interfaces';
import DeleteEmployeeModal from './components/modals/DeleteEmployeeModal';
import EditEmployeeModal from './components/modals/editEmployeeModal';
function User() {
    const [addModal, setAddModal] = useState<boolean>(false)
    const [editModal, setEditModal] = useState<boolean>(false)
    const [deleteModal, setDeleteModal] = useState<boolean>(false)
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [role, setRole] = useState<string>('')
    const employees = useSelector((state: RootState) => state.employees.value)

    const disatch = useDispatch();

    const closeAddModal = (): void => {
        setAddModal(false)
    }
    const changeInput = (e: any) => {
        if (e.target.name === 'name') {
            setName(e.target.value)
        } else if (e.target.name === 'phone') {
            setPhone(e.target.value)
        } else if (e.target.name === 'email') {
            setEmail(e.target.value)
        } else if (e.target.name === 'role') {
            setRole(e.target.value)
        }

    }
    const submit = () => {
        const data = {
            name,
            role,
            phone_number: phone,
            email
        }
        disatch(addEmployee(data))

    }
    const openDeleteModal = (data: IEmployee): void => {
        setDeleteModal(true)
    }
    const closeDeleteModal = (): void => {
        setDeleteModal(false)
    }
    const DeleteEmployee = (): void => {
        setDeleteModal(false)
    }

    const openEditModal = (data: IEmployee): void => {
        setEditModal(true)
    }
    const closeEditModal = (): void => {
        setEditModal(false)
    }
    const EditEmployee = (): void => {
        setEditModal(false)
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
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {employees.map((employee, i) => (
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm  text-gray-900">{employee.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{employee.email}</div>

                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{employee.phone_number}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.role}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900" onClick={() => openEditModal(employee)}>Edit</a>
                                                <span className='px-2'>|</span>
                                                <a href="#" className="text-red-600 hover:text-indigo-900" onClick={() => openDeleteModal(employee)}>Delete</a>

                                            </td>
                                        </tr>
                                    ))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <AddEmployeeModal
                    show={addModal}
                    close={closeAddModal}
                    changeInput={changeInput}
                    submit={submit}
                />
                <EditEmployeeModal
                    show={editModal}
                    close={closeEditModal}
                    changeInput={changeInput}
                    submit={EditEmployee}
                />
                <DeleteEmployeeModal show={deleteModal} close={closeDeleteModal} deleteE={DeleteEmployee} />
            </div>
        </Layout>
    );
}

export default User;