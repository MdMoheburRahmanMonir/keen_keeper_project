
import React from 'react';
import { GoPlus } from 'react-icons/go';
import Counterdata from './Counterdata'; 

const Dashboard = () => {
    

    return (
        <div className=" py-8  border-b-2 border-b-gray-200">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Friends to keep close in your life
                </h1>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.
                </p>

                <button className=" hover:opacity-95  bg-[#1e3a34] text-white px-6 py-2 rounded-md flex items-center gap-2 mx-auto  ">
                    <GoPlus></GoPlus> Add a Friend
                </button>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                <Counterdata></Counterdata>
            </div>
        </div>
    );
};

export default Dashboard;