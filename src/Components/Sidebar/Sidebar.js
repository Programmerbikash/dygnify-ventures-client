import React from 'react';
import { FcStatistics } from 'react-icons/fc';
import { GiFlowerPot } from 'react-icons/gi';
import { SlNote } from 'react-icons/sl';

const Sidebar = () => {
    return (
        <div>
            <h1 className="text-lg text-blue-800 font-['ClashDisplay-Bold']">TRENDING POSTS</h1>
            <div className='bg-white rounded-xl p-5 hover:bg-stone-300 mt-2'>
                <p className="font-['ClashDisplay-Semibold']"><FcStatistics className='inline'/> Marketing & Sales</p>
                <p className='py-1'>Digital Marketing <br /> Internship</p>
                <p>4d . 474 views</p>
            </div>
            <div className='bg-white rounded-xl p-5 mt-5 hover:bg-stone-300'>
                <p className="font-['ClashDisplay-Semibold']"><SlNote className='inline'/> General Advice</p>
                <p className='py-1'>Residential vs Datacenter <br /> Proxies in Web Scraping</p>
                <p>5d . 324 views</p>
            </div>
            <div className='bg-white rounded-xl p-5 mt-5 hover:bg-stone-300'>
                <p className="font-['ClashDisplay-Semibold']"><GiFlowerPot className='inline'/> ESG & Sustainability</p>
                <p className='py-1'>Happy New Year's Eve! 3 ESG-related resolutions for business leaders + 23 lifestyle resolutions to make your 2023 more sustainable</p>
                <p>6d . 315 views</p>
            </div>
        </div>
    );
};

export default Sidebar;