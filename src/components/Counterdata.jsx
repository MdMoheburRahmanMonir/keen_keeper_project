"use client"
import React from 'react';
import CountUp from 'react-countup';

const Counterdata = () => {
    const counterData = [
        { fildname: 'Total Friends', numberValue: 10 },
        { fildname: 'On Track', numberValue: 3 },
        { fildname: 'Need Attention', numberValue: 6 },
        { fildname: 'Interactions This Month', numberValue: 12 },
    ];
    return (

        counterData.map((data, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-bold text-gray-800 mb-1"><CountUp end={data.numberValue} duration={2} > {data.numberValue}</CountUp></div>
                <div className="text-sm text-gray-500">{data.fildname} </div>
            </div>
        ))

    );
};

export default Counterdata;
