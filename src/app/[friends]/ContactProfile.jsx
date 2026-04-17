"use client"
import { GetContext, HistoryContext } from '@/contextdata/Mycontext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FaHistory } from 'react-icons/fa';
import { IoMdText } from 'react-icons/io';
import { IoVideocam } from 'react-icons/io5';
import { LuArchive, LuPhoneCall } from 'react-icons/lu';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';

const ContactProfile = ({ friends }) => {
  const maindata = useContext(GetContext)
  const isData = maindata.find(item => item.id == friends)


  const [historyData, setHistoryData] = useContext(HistoryContext)


  const d = new Date();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const formattedDate = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

  const CallData = (value) => {
    setHistoryData([...historyData, value])

  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <Image
              src={isData.picture}
              alt={isData.name}
              height={200}
              width={200}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
            />
            <h2 className="text-2xl font-bold text-gray-800">{isData.name}</h2>
            <div className="flex flex-wrap gap-2 justify-center my-3">
              {isData.tags.map((tag, ind) => (
                <span key={ind} className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full border border-green-100">
                  {tag}
                </span>
              ))}
            </div>
            <span className={`mb-[100px] text-center items-center px-4 py-1 rounded-full text-[16px] font-medium ${isData.status === 'overdue' ? 'bg-red-100 text-red-600' :
              isData.status === 'almost due' ? 'bg-orange-100 text-orange-600' :
                'bg-teal-200 text-green-600'
              }`}>
              {isData.status}
            </span>
            <p className="text-gray-600 text-sm  mb-6 italic"> {isData.bio} </p>
            <p className="text-xs text-gray-400">Preferred: {isData.email}</p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <button className="flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <RiNotificationSnoozeLine className='text-[20px]'></RiNotificationSnoozeLine>
              Snooze 2 weeks
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <LuArchive className='text-[20px]'></LuArchive>
              Archive
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors">
              <RiDeleteBinLine className='text-[20px]'></RiDeleteBinLine>
              Delete
            </button>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-6">
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-4 ">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <span className="text-3xl font-black text-gray-800">{isData.days_since_contact}</span>
              <p className="text-[10px] font-bold text-gray-400   mt-1 tracking-tighter leading-tight">Days Since Contact</p>
            </div>
            <div className="bg-white  rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <span className="text-3xl font-black text-gray-800">{isData.goal}</span>
              <p className="text-[10px] font-bold text-gray-400   mt-1 tracking-tighter leading-tight">Goal (Days)</p>
            </div>
            <div className="bg-white  rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
              <span className="text-xl md:text-2xl font-black text-gray-800 flex h-full items-center justify-center pt-1">{isData.next_due_date}</span>
              <p className="text-[10px] font-bold text-gray-400   mt-1 tracking-tighter leading-tight">Next Due</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm  border-gray-100 flex justify-between border items-center">
            <div>
              <h4 className="font-semibold text-gray-400 text-sm  tracking-wide">Relationship Goal</h4>
              <p className="text-gray-800 font-medium">Connect every <span className="font-bold">{isData.goal} days</span></p>
            </div>
            <button className="flex btn items-center gap-1 text-sm text-gray-400 hover:text-blue-500 font-medium transition-colors text-black bg-gray-100 btn btn-accent font-bold">
              Edit
            </button>
          </div>

          <div className="pt-4">
            <h4 className="font-bold text-gray-800 mb-4 text-lg">Quick Check-In</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-4">
              <button onClick={() => CallData(['Call', ` ${isData.name}`, formattedDate])} className="flex flex-col items-center justify-center gap-3 p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:border-blue-100 transition-all group">
                <LuPhoneCall className='text-[25px] text-gray-500'></LuPhoneCall>
                <span className="text-sm font-bold text-gray-600"> Call</span>
              </button>
              <button onClick={() => CallData(['Text', ` ${isData.name}`, formattedDate])} className="flex flex-col items-center justify-center gap-3 p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:border-blue-100 transition-all group">
                <IoMdText className='text-[25px] text-gray-500'></IoMdText>
                <span className="text-sm font-bold text-gray-600">Text</span>
              </button>
              <button onClick={() => CallData(['Video', `${isData.name}`, formattedDate])} className="flex flex-col items-center justify-center gap-3 p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:border-blue-100 transition-all group">
                <IoVideocam className='text-[25px] text-gray-500'></IoVideocam>
                <span className="text-sm font-bold text-gray-600">Video</span>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col text-start justify-between  space-y-5">
            <div className='flex justify-between text-center items-center'>
              <h4 className="text-2xl font-bold text-gray-800">Recent Interactions</h4>
              <Link href={'/timeline'}><button className="text-sm   flex items-center gap-1 hover:scale-105 duration-150 text-black bg-gray-100 btn btn-accent font-bold"> <FaHistory></FaHistory> Full History</button></Link>
            </div>
            <div className='  space-y-5 '>
              {
                historyData.slice(0, 5).map((item, ind) => {
                  return (
                    <div key={ind} className='shadow flex justify-between rounded-2xl p-3 text-gray-500 items-center '>
                      <div className='flex items-center gap-3 '>
                        <div>
                          <div>{item[0] == 'Call' ? <LuPhoneCall className='text-[25px] text-cyan-400 '></LuPhoneCall> : item[0] == 'Text' ? <IoMdText className='text-[25px] text-blue-500'></IoMdText> : item[0] == 'Video' ? <IoVideocam className='text-[25px] text-emerald-500'></IoVideocam> : ''} </div>
                        </div>
                        <div>
                          <h1>{item[0]}</h1>
                          <h1>{`${item[0]} With ${item[1]}`}</h1>
                        </div>
                      </div>
                      <div>
                        <h1>{item[2]}</h1>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

export default ContactProfile;