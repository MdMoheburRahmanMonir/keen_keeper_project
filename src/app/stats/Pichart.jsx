"use client"
import { HistoryContext } from '@/contextdata/Mycontext';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';  
import { FcPieChart } from 'react-icons/fc';

const Pichart = () => {
    const [historyData, setHistoryData] = useContext(HistoryContext)


    const Call = historyData.filter(item => item[0] == 'Call')
    const Text = historyData.filter(item => item[0] == 'Text')
    const video = historyData.filter(item => item[0] == 'Video')

    const data = [
        { name: 'Call', value: Call.length, fill: '#0088FE' },
        { name: 'Text', value: Text.length, fill: '#00C49F' },
        { name: 'Video', value: video.length, fill: '#FFBB28' },
    ];
    return (
        historyData.length == 0
            ? (
                <div className="flex flex-col items-center justify-center mb-20 text-center mt-20">
                    <div className="mb-6 p-4 rounded-full border-2 border-gray-200 text-gray-500">
                        <FcPieChart size={48} className="text-gray-300 stroke-[1.5] font-bold" />
                    </div>

                    <h2 className="text-2xl font-semibold mb-3 text-gray-500">No Stats yet</h2>

                    <p className="max-w-md text-gray-500 leading-relaxed">
                        Your Stats is empty. Please interaction with call text video first.
                    </p>
                </div>
            )
            : (<PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    cornerRadius="50%"
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                />
                <Legend></Legend>
                <Tooltip></Tooltip>
                <RechartsDevtools />
            </PieChart>)
    );
};

export default Pichart;