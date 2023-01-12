import React from 'react';
import News from '../../../Components/News/News';
import Sidebar from '../../../Components/Sidebar/Sidebar';

const Content = () => {
    return (
        <div className='w-full bg-gray-200 overflow-hidden'>
            <div className='flex w-4/6 mx-auto'>
            <div className='flex-auto w-96 mr-8'><News></News></div>
            <div className='flex-auto w-28'><Sidebar></Sidebar></div>
            </div>
        </div>
    );
};

export default Content;