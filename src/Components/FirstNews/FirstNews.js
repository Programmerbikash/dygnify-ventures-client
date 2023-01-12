import React from 'react';
import { BiCookie, BiDotsHorizontal } from 'react-icons/bi';
import { VscComment } from 'react-icons/vsc';
import { BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import profile from '../../assets/profilePictures_eAGBnyvFA0NPjrbcLL6yWGPhyh72.png'

const FirstNews = () => {
    return (
        <div className='bg-white hover:bg-stone-300 overflow-hidden rounded-xl'>
            <div className="flex w-full items-center justify-between">
            <div className="flex ml-5 mt-5">
            <img className='w-10 h-10 rounded-full mr-4' src={profile} alt="" />
            <div>
            <p className="font-['ClashDisplay-Semibold'] text-md">Johal in <BiCookie className="inline text-amber-500"/> Design</p>
            <p>Incoming APM at Visa . 9h</p>
            </div>
            </div>
            <div>
                <BiDotsHorizontal className='inline mr-5'/>
            </div>
            </div>
            <div className='m-5'>
                <h1 className="text-xl font-['ClashDisplay-Semibold']">Looking for interns! - Early-stage Startup in the Creator Economy</h1>
                <p className='py-2'>Hey!</p>
                <p>I'm a co-founder of Bimi, a platform for creators to monetize their TikTok. We're an early-stage startup and are looking for interns who are ready to wear a lot of hats!</p>
                <p className='py-2'>Here are the roles:</p>
                <p><span className="font-['ClashDisplay-Semibold'] text-md">Design/Front-End</span> - Design and implement user interfaces using HTML/CSS.</p>
                <p className='py-2'><span className="font-['ClashDisplay-Semibold'] text-md">TikTok/Social Media Manager</span> - Create content and manage our TikTok to help spread the word about Bimi.</p>
                <p><span className="font-['ClashDisplay-Semibold'] text-md">Sales/Outreach </span> - Talk to creators, agencies, and brands as well as help in onboarding.</p>
                <div className='flex w-full items-center justify-between'>
                    <div>
                    <div className='bg-gray-300 px-2 inline rounded-xl'><AiOutlineLike className="inline text-amber-500 mr-2" />2</div>
                    <div className='bg-gray-300 px-2 inline rounded-xl ml-2'><BsEmojiSmile className="inline text-amber-500 mr-2" />1</div>
                    </div>
                    <div className='inline'><VscComment className="inline text-amber-500 mr-2" />0</div>
                </div>
            </div>
        </div>
    );
};

export default FirstNews;