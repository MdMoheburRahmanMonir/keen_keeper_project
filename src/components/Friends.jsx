"use client"
 
import { GetContext } from '@/contextdata/Mycontext';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { useContext } from 'react';

const Friends = () => {

    const data = useContext(GetContext);  
    

    const getUrl = usePathname(); 
    

    return (
        <div className="p-10  min-h-screen">
            <h1 className="text-2xl text-start font-bold mb-8 text-gray-800">Your Friends</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((friend, ind) => (
                    <Link href={`/friends/${friend.id}`}   key={ind}>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">

                            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-200">
                                <Image width={200} height={200} src={friend.picture} alt={friend.name} className="w-full"></Image>
                            </div> 
                            <h2 className="text-lg font-semibold text-gray-900">{friend.name}</h2>
                            <p className="text-[14px] text-gray-600 mb-4">{`${friend.days_since_contact}d ago `}</p>


                            <div className='flex gap-2 mb-5'>
                                {
                                    friend.tags.map((data, ind) => <h2 className='text-green-600 px-3   py-1 bg-green-200 rounded-full' key={ind}>{data}</h2>)
                                }
                            </div>

                            <div className={` text-center items-center px-4 py-1 rounded-full text-[16px] font-medium ${friend.status === 'overdue' ? 'bg-red-100 text-red-600' :
                                friend.status === 'almost due' ? 'bg-orange-100 text-orange-600' :
                                    'bg-teal-200 text-green-600'
                                }`}>
                                {friend.status}
                            </div>
                        </div>
                    </Link>

                ))}
            </div>
        </div>
    );
};

export default Friends;