import React from "react";
import { AiOutlineEye } from 'react-icons/ai';
import logo from "../../assets/anonymous_profile_picture.38429e19.svg";
import FirstNews from "../FirstNews/FirstNews";

const News = () => {
  return (
    <div>
      <div className="w-full bg-white rounded-lg">
        <div className="flex w-[520px] mx-auto py-4">
          <img src={logo} alt="" />
          <input
            type="text"
            className="w-full rounded-lg p-3 ml-3 bg-gray-200 hover:bg-gray-300"
            name=""
            placeholder="Write a post"
            id=""
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex w-1/3 items-center py-5">
          <p className="flex-auto w-10">Sort posts by </p>
          <select className="bg-indigo-800 rounded-xl px-2 text-white font-semibold">
            <option value="volvo">HOT</option>
            <option value="saab">New</option>
          </select>
        </div>
        <div className="">
            <AiOutlineEye className="text-2xl text-end"/>
        </div>
      </div>
      <FirstNews></FirstNews>
    </div>
  );
};

export default News;
