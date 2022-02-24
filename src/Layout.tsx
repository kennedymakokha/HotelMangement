import moment from 'moment';
import React, { ReactChild, ReactChildren } from 'react';
import Sidebar from './components/sidebar';
import People from './img/people.svg'
interface AuxProps {
    children: ReactChild | ReactChildren;
}
const Layout = ({ children }: AuxProps) => {
    return (
        <div className='w-screen '>
            <div className=' w-full h-12 flex-row flex shadow-lg px-10  '>
                <div className='md:flex hidden w-1/5  h-full'>

                </div>
                <div className='flex  w-10  h-full justify-center items-center'>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </div>
                <div className='flex  flex-row w-2/3  items-center h-full pl-10'>
                    <svg className="w-6 h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    <input type='text' name='search' placeholder="Search here" className="w-full pl-4" />
                </div>
                <div className='flex  flex-row  h-full right-10   '>
                    <div className='flex flex-row '>
                        <div className='h-10 w-10 rounded-full bg-black mt-1 text-white flex justify-center items-center'>K</div>
                        <div className='flex justify-center items-center text-black'><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg></div>
                    </div>

                </div>
            </div>
            <div className='w-full  h-screen flex flex-row'>

                <Sidebar />
                <div className='w-4/5 bg-slate-100 h-full px-20  flex flex-col'>
                    <div className='pt-5 justify-between flex w-full    h-20 '>
                        <div>
                            Welcome
                            <div>
                                Kennedy Makokha
                            </div>
                        </div>
                        <div className='text-xl font-bold flex justify-center items-center'>
                            {moment(Date()).format('Do ddd yyy')}
                            {moment(Date()).format('hh:mm')}
                        </div>

                    </div>
                    {children}
                </div>
            </div>

            
        </div>
    );
}

export default Layout;