"use client"
import React, { createContext, useState } from 'react';


export const GetContext = createContext('');
export const HistoryContext = createContext({})

const Mycontext = ({ children, data }) => {
    const [historyData, setHistoryData] = useState([])
    return (
        <GetContext.Provider value={data} >
            <HistoryContext.Provider value={[historyData, setHistoryData]}>
                {children}
            </HistoryContext.Provider>
        </GetContext.Provider>
    );
};

export default Mycontext;