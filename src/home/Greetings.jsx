import React, { useState, useEffect } from 'react';

const Greetings = () => {
    const [dateTime, setDateTime] = useState(new Date());

    const formatDate = (date) => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}, ${date.toLocaleTimeString()}`;
    };

    const formatTime = (date) => 
        `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()
        ).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;

    return (
        <div className='flex justify-between items-center px-8'>
            <div>
                <h1 className='text-[#f5f5f5] text-2xl font-semibold tracking-wide'>Good Morning, Leovi</h1>
                <p className='text-[#ababab] text-sm'>Give your best services for customers</p>
            </div>
            <div>
                <h1 className='text-[#f5f5f5] text-3xl font-bold tracking-wide w-[130px]'>
                    {formatTime(dateTime)}</h1>
                <p className='flex-[2] bg-blue-600'>{formatDate(dateTime)}</p>
            </div>
        </div>
    );
}

export default Greetings;