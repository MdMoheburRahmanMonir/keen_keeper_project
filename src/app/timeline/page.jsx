"use client"
import KeenkeeperFooter from '@/components/KeenkeeperFooter';
import { HistoryContext } from '@/contextdata/Mycontext';
import React, { useState } from 'react';
import { use } from 'react';
import { FaChevronDown, FaRegClock } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';
import { IoMdText } from 'react-icons/io';
import { IoVideocam } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';

const page = () => {
    const [historyData, setHistoryData] = use(HistoryContext)
    const [filterdata, setFilterdata] = useState(historyData)
    const [toggling, setToggling] = useState(true)
    const filteropen = () => {
        setToggling(!toggling)
    }


    const renderdata = (value) => {



        if (value == 'All') {
            const all = historyData.filter(i => i);

            setFilterdata(all)

            return;
        }
        if (value == 'Call') {
            const Call = historyData.filter(i => i[0] == 'Call');
            setFilterdata(Call)
            return;
        }
        if (value == 'Text') {
            const Text = historyData.filter(i => i[0] == 'Text');
            setFilterdata(Text)
            return;
        }
        if (value == 'Video') {
            const Video = historyData.filter(i => i[0] == 'Video');
            setFilterdata(Video)
            return;
        }
    }
    const placeholder = (value) => {
        const isMatch = historyData.filter(i => i.some(word =>
            word.toLowerCase().includes(value.toLowerCase())
        ))
        setFilterdata(isMatch)


    }

    return (
        <div>
            <div>
                <div>
                    <div className=" bg-white   text-gray-800">
                        <div className=" mx-auto px-6 pb-[30px]">
                            <h1 className="text-3xl font-bold mb-8">Timeline</h1>
                            <div className="flex justify-between items-center ">
                                <div className="relative">
                                    <div className=' '>
                                        <button onClick={() => filteropen()} className="flex rounded-2xl items-center gap-2 px-4 py-2 btn btn-outline ">
                                            <span className="text-sm">All</span>
                                            <FaChevronDown size={16} className="text-gray-400" />
                                        </button>
                                        <ul className={` pt-3 absolute ${toggling == true ? 'hidden' : 'block'} bg-white rounded-2xl  text-[14px] p-2 space-y-2 shadow w-[140px]`}>
                                            <li className='hover:bg-cyan-200 hover:rounded-2xl pl-2' onClick={() => renderdata('All')}>All </li>
                                            <li className='hover:bg-cyan-200 hover:rounded-2xl pl-2' onClick={() => renderdata('Call')}>Call </li>
                                            <li className='hover:bg-cyan-200 hover:rounded-2xl pl-2' onClick={() => renderdata('Text')}>Text </li>
                                            <li className='hover:bg-cyan-200 hover:rounded-2xl pl-2' onClick={() => renderdata('Video')}>Video </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="relative h-8">
                                    <input
                                        type="text"
                                        placeholder="  Search friends..."
                                        className=" h-full pl-4 pr-10 py-2 border border-gray-200 rounded-md text-lg w-64"
                                        onChange={(e) => placeholder(e.target.value)}
                                    />
                                    <CiSearch className='text-lg absolute top-1/2 left-[2px] translate-x-0 -translate-y-1/2 '></CiSearch>
                                </div>
                            </div>
                            <div className='px-10 space-y-5'>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-10 mb-4 space-y-3'>

                    {

                        filterdata.length == 0 ? (
                            <div className="flex flex-col items-center justify-center mb-20 text-center mt-20">
                                <div className="mb-6 p-4 rounded-full border-2 border-gray-200 text-gray-500">
                                    <FaRegClock size={48} className="text-gray-300 stroke-[1.5]" />
                                </div>

                                <h2 className="text-2xl font-semibold mb-3 text-gray-500">No timelines yet</h2>

                                <p className="max-w-md text-gray-500 leading-relaxed">
                                    Your timeline is empty. Start adding important timelines or
                                    timelines to see them appear here.
                                </p>
                            </div>
                        )
                            : (
                                filterdata.map((item, ind) => {
                                    return (
                                        <div key={ind} className='flex rounded-2xl p-3 justify-between items-center shadow'>
                                            <div className='flex items-center gap-3 text-gray-500 font-bold'>
                                                <div>
                                                    <div>{item[0] == 'Call' ? <LuPhoneCall className='text-[25px] text-cyan-400 '></LuPhoneCall> : item[0] == 'Text' ? <IoMdText className='text-[25px] text-blue-500'></IoMdText> : item[0] == 'Video' ? <IoVideocam className='text-[25px] text-emerald-500'></IoVideocam> : ''} </div>
                                                </div>
                                                <div>
                                                    <h1>{item[0]}</h1>
                                                    <h1>{item[1]}</h1>
                                                </div>
                                            </div>
                                            <div>
                                                <h1>{item[2]}</h1>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                    }
                </div>
            </div>
            <KeenkeeperFooter></KeenkeeperFooter>
        </div>
    );
};

export default page;