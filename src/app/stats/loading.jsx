import React from 'react';
import { Puff } from 'react-loader-spinner';

const loading = () => {
    return (
        <div className='w-full  flex flex-col items-center text-center'>
            <Puff
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default loading;