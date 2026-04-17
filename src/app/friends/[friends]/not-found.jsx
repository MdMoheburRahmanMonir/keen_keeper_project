import Link from 'next/link';
import React from 'react';

const not_found = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
            <div className="text-center"> 
                <h1 className="text-9xl font-black text-gray-200 tracking-tighter relative">
                    404
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-gray-800 w-full">
                        Oops !  Page  Not  Found
                    </span>
                </h1>

                <p className="mt-8 text-lg text-gray-600 max-w-md mx-auto">
                    OOOhhh! Sorry you are trying to access a invalid route or wrong way. Please Go Home and make you better
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 active:scale-95 text-center"
                    >
                        Back to Home
                    </Link> 
                </div>
            </div>
 
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
                <div className="h-2 w-24 bg-blue-200 rounded-full"></div>
                <div className="h-2 w-24 bg-green-200 rounded-full"></div>
                <div className="h-2 w-24 bg-orange-200 rounded-full"></div>
                <div className="h-2 w-24 bg-purple-200 rounded-full"></div>
            </div>
        </div>
    );
};

export default not_found;