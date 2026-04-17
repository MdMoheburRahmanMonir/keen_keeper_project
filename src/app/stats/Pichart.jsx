"use client"
import { HistoryContext } from '@/contextdata/Mycontext';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

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
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
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
        </PieChart>
    );
};

export default Pichart;