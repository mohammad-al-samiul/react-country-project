import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="lg:container hero-content lg:max-w-full flex-col lg:flex-row">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="lg:text-5xl text-3xl font-bold">
            Explore the World, One Country at a Time
          </h1>
          <p className="py-6">
            Discover the history culture and beauty of every nation. Sort,
            Search and Filter through countries to find the details you need.
          </p>
          <button className="btn btn-outline hover:btn-neutral">
            Start Exploring <FaArrowRightLong />
          </button>
        </div>
        <div className="lg:w-1/2">
          <img src="/images/world.png" />
        </div>
      </div>
    </div>
  );
};
