"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ImStatsDots } from "react-icons/im";
import { LuClock3 } from "react-icons/lu";
import { RiHome2Line } from "react-icons/ri";

const LinkToggling = () => {
    const path = usePathname();
    return (
        <div className='flex gap-3'>
            <Link href={'/'} >
                <li className={`${path === '/' ? 'bg-[#244D3F] text-white' : ''} text-[#64748B] flex text-center items-center gap-2 shadow p-2 rounded-md`}> <RiHome2Line className="text-[15px]"></RiHome2Line> Home </li>
            </Link>
            <Link href={'/timeline'}>
                <li className={`${path === '/timeline' ? 'bg-[#244D3F] text-white' : ''} text-[#64748B] flex text-center items-center gap-2 shadow p-2 rounded-md`}> <LuClock3 className="text-[15px]"></LuClock3> Timeline </li>
            </Link>
            <Link href={'/stats'}>
                <li className={`${path === '/stats' ? 'bg-[#244D3F] text-white' : ''} text-[#64748B] flex text-center items-center gap-2 shadow p-2 rounded-md`}> <ImStatsDots className="text-[15px]"></ImStatsDots> State </li>
            </Link>
        </div>
    );
};

export default LinkToggling;