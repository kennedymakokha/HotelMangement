
import React from 'react';
import Layout from './Layout';
const Home = () => {
    return (
        <Layout>
            <div className='pt-5 justify-between flex w-full    '>
                <div className='w-1/2 h-full '>

                </div>
                <div className='flex flex-row w-1/2  h-full' >
                    <div className='w-full gap-5   flex flex-row flex-wrap'>
                        <div className='bg-blue-200 w-52 rounded-3xl h-40 flex flex-col p-5'>
                            <p className='font-bold text-gray-600'>Todays Takeaway Orders</p>
                            <div className='flex justify-center items-center flex-col'>
                                <p className='text-3xl font-bold'>3000</p>
                                <p>Orders</p>
                            </div>

                        </div>
                        <div className='bg-purple-300 w-52 rounded-3xl h-40 flex flex-col p-5'>
                            <p className='font-bold text-gray-600'>Todays Eat-in Orders</p>
                            <div className='flex justify-center items-center flex-col'>
                                <p className='text-3xl font-bold'>3000</p>
                                <p>Orders</p>
                            </div>
                        </div>
                        <div className='bg-purple-200 w-52 rounded-3xl h-40 flex flex-col p-5'>
                            <p className='font-bold text-gray-600'>Todays Orders</p>
                            <div className='flex justify-center items-center flex-col'>
                                <p className='text-3xl font-bold'>3000</p>
                                <p>Orders</p>
                            </div>
                        </div>
                        <div className='bg-red-200 w-52 rounded-3xl h-40 flex flex-col p-5'>
                            <p className='font-bold text-gray-600'>Todays Orders</p>
                            <div className='flex justify-center items-center flex-col'>
                                <p className='text-3xl font-bold'>3000</p>
                                <p>Orders</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </Layout>
    );
}

export default Home;