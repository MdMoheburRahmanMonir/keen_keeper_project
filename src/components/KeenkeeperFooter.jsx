import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';

const KeenkeeperFooter = () => {
    return (
        <footer className="bg-[#244D3F] text-white w-full py-15">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                    KeenKeeper 
                </h1>

                <p className="text-[16px]   text-gray-200 mb-10 max-w-2xl mx-auto ">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="mb-16">
                    <h3 className="text-xl font-medium mb-6">Social Links</h3>
                    <div className="flex justify-center gap-4">
                        <a href="#" className="  p-3 rounded-full  hover:bg-gray-200 bg-white">
                            <AiOutlineInstagram className="w-6 h-6 text-[#2D4F3F]" />
                        </a>
                        <a href="#" className="bg-white p-3 rounded-full hover:bg-gray-200  ">
                            <FaFacebook className="w-6 h-6 text-[#2D4F3F]" />
                        </a>
                        <a href="#" className="bg-white p-3 rounded-full hover:bg-gray-200  ">
                            <FiTwitter className="w-6 h-6 text-[#2D4F3F]" />
                        </a>
                    </div>
                </div>

                <div className="text-[16px]  pt-8 border-t-2 border-gray-500 flex flex-col md:flex-row justify-between  items-center   text-gray-300 gap-4">
                    <p >&copy; 2026 <span> - KeenKeeper. All rights reserved.</span></p>
                    <div className="flex gap-6">
                        <a href="#" className="cursor-pointer hover:text-blue-400 hover:underline">Privacy Policy</a>
                        <a href="#" className="cursor-pointer hover:text-blue-400 hover:underline">Terms of Service</a>
                        <a href="#" className="cursor-pointer hover:text-blue-400 hover:underline">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default KeenkeeperFooter;