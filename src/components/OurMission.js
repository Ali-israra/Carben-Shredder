import React from "react";
import MissionImg from "../assets/images/logo.png";

export default function OurMission(props) {
  return (
    <>
      <section className="text-gray-600 ">
        <div className="container mx-auto flex px-5 py-24  flex-col items-center  ">
          <div className=" flex flex-col md:flex-row items-center text-center mx-auto">
            <div className=" bg-white p-8 rounded-lg shadow-md bg-opacity-30 z-10 max-w-5xl">
              <p className="mb-8 text-black text-lg leading-relaxed">
                {props.OurMission}
              </p>
              <h1 className=" text-7xl mb-4 font-medium text-gray-900 ">
                The Carbon Shredder
              </h1>
            </div>

            <img
              className="object-cover object-center rounded w-52 -ml-10"
              alt="hero"
              src={MissionImg}
            />
          </div>
        </div>
      </section>
    </>
  );
}
