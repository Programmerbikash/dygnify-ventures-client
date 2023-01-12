import React from "react";
import { FcCalendar } from "react-icons/fc";
import { Link } from "react-router-dom";
import error from "../../../assets/404-image.cb5d213a.png";

const Upcoming = () => {
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
        <hr className="border-b-4 border-slate-300 mb-12" />
        <div className="text-center">
          <h1 className="text-4xl font-['ClashDisplay-Bold']">No upcoming events</h1>
          <img className="mx-auto my-8" src={error} alt="" />
          <p>
            Stay tuned for more upcoming events hosted on <br /> Nova!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
