import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className=' w-1/5 h-full py-5 '>
            <div className=' flex-col flex rounded-sm justify-center items-center shadow-sm'>
                <h3>Dashboard</h3>
            </div>
            <div className='flex flex-row mt-5 mx-5 '>
                <div >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                </div>
                <div className='pl-2'>
                    <Link to='/'>Home</Link>
                </div>
            </div>
            <div className='flex flex-row mt-5 mx-5 '>
                <div >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                </div>
                <div className='pl-2'>
                    <Link to='/employees'>Employees</Link>
                </div>
            </div>
            <div className='flex flex-row mt-5 mx-5 '>
                <div >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                </div>
                <div className='pl-2'>
                    <Link to='/tables'>Tables</Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;