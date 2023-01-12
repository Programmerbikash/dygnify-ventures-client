import React from "react";
import img1 from "../../assets/simplify_square.png";
import img2 from "../../assets/startup search.jpeg";
import img3 from "../../assets/wealthfront.png";
// import "../../Fonts/WEB/css/clash-display.css";

const JobBoards = () => {
  return (
    <div className="w-full bg-gray-200 pb-20">
      <div className="pt-20 w-full md:w-[1050px] mx-auto">
        <h1 className="text-4xl text-center pt-12 font-['ClashDisplay-Bold']">
          Explore our curated job boards
        </h1>
        <p className="text-center pt-5 font-medium">
          Handpicked and curated job postings by special guests on Nova. <br />{" "}
          Find jobs that you know are vetted and worth the application.
        </p>
        <div className="flex items-center justify-evenly pt-8">
          <button
            className="border-2 py-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
            to="/"
          >
            Software Engineering
          </button>
          <button
            className="border-2 py-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
            to="/"
          >
            Business in Tech
          </button>
          <button
            className="border-2 py-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
            to="/"
          >
            Design
          </button>
          <button
            className="border-2 py-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
            to="/"
          >
            Product Management
          </button>
          <button
            className="border-2 py-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
            to="/"
          >
            Venture Capital
          </button>
          <button
            className="border-2 py-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
            to="/"
          >
            Startup Hub
          </button>
          <button
            className="border-2 py-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
            to="/"
          >
            Gap Year
          </button>
        </div>
        <div className="flex items-center justify-evenly mt-3">
          <button
            className="border-2 py-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
            to="/"
          >
            Entrepreneurship
          </button>
          <button
            className="border-2 py-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
            to="/"
          >
            Data Science & AI
          </button>
          <button
            className="border-2 py-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
            to="/"
          >
            Crypto & Blockchain
          </button>
          <button
            className="border-2 py-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
            to="/"
          >
            General Advice
          </button>
          <button
            className="border-2 py-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
            to="/"
          >
            Marketing & Sales
          </button>
          <button
            className="border-2 py-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
            to="/"
          >
            Women in Tech
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          <div
            className="bg-no-repeat bg-cover rounded-lg p-8"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <h1 className="font-['ClashDisplay-Bold'] text-3xl text-white">
              Internship & New-Grad Lists by Simplify
            </h1>
            <p className="font-semibold text-white text-lg">
              Browse handpicked lists of exciting opportunities!
            </p>
            <div className="">
              <button
                className="border-2 py-1 mt-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
                to="/"
              >
                Software Engineering
              </button>
              <button
                className="border-2 py-1 mt-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
                to="/"
              >
                Business in Tech
              </button>
              <button
                className="border-2 py-1 mt-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
                to="/"
              >
                Design
              </button>
              <button
                className="border-2 py-1 mt-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
                to="/"
              >
                Product Management
              </button>
            </div>
          </div>
          <div
            className="bg-no-repeat bg-cover rounded-lg p-8"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <h1 className="font-['ClashDisplay-Bold'] text-3xl text-white">
              Internship & New-Grad Lists by Simplify
            </h1>
            <p className="font-semibold text-white text-lg">
              Browse handpicked lists of exciting opportunities!
            </p>
            <div className="">
              <button
                className="border-2 py-1 mt-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
                to="/"
              >
                Software Engineering
              </button>
              <button
                className="border-2 py-1 mt-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
                to="/"
              >
                Business in Tech
              </button>
              <button
                className="border-2 py-1 mt-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
                to="/"
              >
                Design
              </button>
              <button
                className="border-2 py-1 mt-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
                to="/"
              >
                Product Management
              </button>
            </div>
          </div>
          <div
            className="bg-no-repeat bg-cover rounded-lg p-8"
            style={{ backgroundImage: `url(${img3})` }}
          >
            <h1 className="font-['ClashDisplay-Bold'] text-3xl text-white">
              Internship & New-Grad Lists by Simplify
            </h1>
            <p className="font-semibold text-white text-lg">
              Browse handpicked lists of exciting opportunities!
            </p>
            <div className="">
              <button
                className="border-2 py-1 mt-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
                to="/"
              >
                Software Engineering
              </button>
              <button
                className="border-2 py-1 mt-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
                to="/"
              >
                Business in Tech
              </button>
              <button
                className="border-2 py-1 mt-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
                to="/"
              >
                Design
              </button>
              <button
                className="border-2 py-1 mt-1 px-4 bg-white hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-cyan-500 active:bg-gradient-to-r active:from-fuchsia-400 active:to-cyan-500 rounded-3xl border-indigo-500 font-semibold hover:bg-indigo-100"
                to="/"
              >
                Product Management
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBoards;
