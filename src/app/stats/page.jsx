import KeenkeeperFooter from '@/components/KeenkeeperFooter';
import React from 'react';
import Pichart from './Pichart';

const page = () => {
    return (
        <div className=''>
            <main className='container mx-auto '>
                <h1 className='text-3xl font-bold mb-10 text-black '>Friendship Analytics </h1>
                <div className='w-full  shadow p-3 mb-3 rounded-2xl'>
                    <h3 className='text-2xl font-bold text-gray-500 mb-10'>By Interaction Type </h3>
                    <div className='   flex justify-center py-10   rounded-2xl'>
                        <Pichart></Pichart>
                    </div>
                </div>
            </main>
            <KeenkeeperFooter></KeenkeeperFooter>
        </div>
    );
};

export default page;