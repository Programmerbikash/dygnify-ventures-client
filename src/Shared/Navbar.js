import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full overflow-hidden fixed">
      <nav className="bg-[#071530] text-slate-200 py-8 flex h-9 items-center justify-between">
        <div className="ml-4 font-['ClashDisplay-Bold']">
          NOVA
        </div>
        <div className="lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-5">
          <Link to="/" className="hover:bg-blue-700 active:bg-blue-700 focus:bg-blue-700 py-2 px-8 rounded-md">Community</Link>
          <Link to="/upcoming" className="hover:bg-blue-700 active:bg-blue-700 focus:bg-blue-700 py-2 px-8 rounded-md">Events</Link>
          <Link to="/jobBoards" className="hover:bg-blue-700 active:bg-blue-700 focus:bg-blue-700 py-2 px-8 rounded-md">Job Boards</Link>
        </div>
        <div className="flex py-6">
          <Link to="/" className="mx-3 block rounded-lg px-8 py-2 text-base font-semibold bg-gradient-to-r from-red-200 to-blue-300">Sign up</Link>
          <Link to="/" className="mx-3 py-2 block rounded-lg px-3 text-base font-semibold">Log In</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
