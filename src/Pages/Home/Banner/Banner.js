import React from "react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <main className="">
      <div className="bg-[#071530] overflow-hidden py-8">
        <Text
          bgGradient="linear(to-r, #f4435e, #4758f1)"
          bgClip="text"
          fontSize="4xl"
          textAlign="center"
          lineHeight={10}
          my={12}
          fontWeight="bold"
        >
          Professional communities to <br /> boost your career
        </Text>
        <p className="text-xl text-white py-4 text-center">
          Trust us to serve as your guide, your north star, and find the latest
          industry <br /> influences, your community to network, and endless
          paths to your next opportunity.
        </p>
        <Link
          to="/"
          className="block rounded-lg text-white font-semibold text-center bg-blue-700 w-56 mx-auto my-4 py-2 px-8"
        >
          Get Started
        </Link>
      </div>
      <div className="text-center bg-gray-200 overflow-hidden">
        <h2 className="text-4xl text-center mt-10 font-['ClashDisplay-Bold']">
          Find your community
        </h2>
        <p className="text-xl text-center mt-5">
          Find your fleet of people sharing this journey with you.
        </p>
        <select className="mt-4 mb-12">
          <option value="volvo">See ALL Nova Communities</option>
          <option value="saab">Business In Tech</option>
          <option value="mercedes">Community Builders</option>
          <option value="audi">Community College & Tranfer</option>
        </select>
      </div>
    </main>
  );
};

export default Banner;
