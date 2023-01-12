import React from "react";
import { FcCalendar } from "react-icons/fc";
import { SlFire } from "react-icons/sl";
import img1 from "../../../assets/Attend My Free Training Image.jpg";
import img2 from "../../../assets/1.png";
import img3 from "../../../assets/SF AP (2).png";
import img4 from "../../../assets/Values, Vision and Mission with Sheryl Phillips.png";
import { Link } from "react-router-dom";

const Past = () => {
  return (
    <div className="w-full bg-gray-200 pb-20">
      <div className="pt-20 w-1/2 mx-auto">
        <div className="flex justify-between mb-8 mt-12 items-center">
          <h1 className="text-4xl font-['ClashDisplay-Bold']">
            Events <FcCalendar className="inline" />
          </h1>
          <Link
            className="bg-blue-700 rounded-lg py-3 px-4 text-white font-medium"
            to="/"
          >
            Join to Create Event
          </Link>
        </div>
        <div className="lg:flex lg:min-w-0 lg:flex-1 lg:justify-left lg:gap-x-5 ">
          <Link
            to="/upcoming"
            className="border-b-0 active:border-b-4 active:border-blue-700 focus:border-b-4 focus:border-blue-700"
          >
            Upcoming
          </Link>
          <Link
            to="/past"
            className="border-b-0 active:border-b-4 active:border-blue-700 focus:border-b-4 focus:border-blue-700"
          >
            Past
          </Link>
        </div>
        <hr className="border-b-4 border-slate-300" />
        <div className="flex justify-between my-5 bg-white rounded-xl p-8 items-center">
        <h1 className="text-gray-400 font-semibold text-xl">
            OCT <span className="font-['ClashDisplay-Bold'] text-3xl">28</span> <span>FRI</span>
          </h1>
          <img className="w-60 rounded-xl mx-8 h-32" src={img1} alt="" />
          <div>
            <p><SlFire className="inline text-yellow-500 mr-1" /> 3 attended</p>
            <h1 className="tect-4xl font-['ClashDisplay-Bold'] py-3">
              Communication Workshop with Brenden from YouTube Channel
              MasterTalk
            </h1>
            <Link className="border-2 py-1 px-3 text-indigo-600 rounded-lg border-indigo-500 font-semibold hover:bg-indigo-100" to="/">View event</Link>
          </div>
        </div>
        <div className="flex justify-between my-5 bg-white rounded-xl p-8 items-center">
          <h1 className="text-gray-400 font-['ClashDisplay-Bold'] text-xl">
            OCT <br /> <span className="font-['ClashDisplay-Bold'] text-3xl">26</span> <span>WED</span>
          </h1>
          <img className="w-60 rounded-xl mx-8 h-32" src={img2} alt="" />
          <div>
            <p><SlFire className="inline text-yellow-500 mr-1" /> 4 attended</p>
            <h1 className="tect-4xl font-['ClashDisplay-Bold'] py-3">
            Startup Talk for Students: How to join a YC startup
            </h1>
            <Link className="border-2 py-1 px-3 text-indigo-600 rounded-lg border-indigo-500 font-semibold hover:bg-indigo-100" to="/">View event</Link>
          </div>
        </div>
        <div className="flex justify-between my-5 bg-white rounded-xl p-8 items-center">
          <h1 className="text-gray-400 font-['ClashDisplay-Bold'] text-xl">
            OCT <br /> <span className="font-['ClashDisplay-Bold'] text-3xl">23</span> <span>SUN</span>
          </h1>
          <img className="w-60 rounded-xl mx-8 h-32" src={img3} alt="" />
          <div>
            <p><SlFire className="inline text-yellow-500 mr-1" /> 1 attended</p>
            <h1 className="tect-4xl font-['ClashDisplay-Bold'] py-3">
            SF Tech + Biz - Happy Hour & After Party
            </h1>
            <Link className="border-2 py-1 px-3 text-indigo-600 rounded-lg border-indigo-500 font-semibold hover:bg-indigo-100" to="/">View event</Link>
          </div>
        </div>
        <div className="flex justify-between my-5 bg-white rounded-xl p-8 items-center">
          <h1 className="text-gray-400 font-semibold text-xl">
            OCT <span className="font-['ClashDisplay-Bold'] text-3xl">21</span> <span>FRI</span>
          </h1>
          <img className="w-60 rounded-xl mx-8 h-32" src={img4} alt="" />
          <div>
            <p><SlFire className="inline text-yellow-500 mr-1" /> 1 attended</p>
            <h1 className="tect-4xl font-['ClashDisplay-Bold'] py-3">
            Defining Values, Vision and Mission Presentation and Workshop
            </h1>
            <Link className="border-2 py-1 px-3 text-indigo-600 rounded-lg border-indigo-500 font-semibold hover:bg-indigo-100" to="/">View event</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Past;
