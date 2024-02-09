import React from "react";
import MissionImg from "../assets/images/logo-w.png"

export default function OurMission(props) {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
            <img
              className="object-cover object-center rounded w-[60%]"
              alt="hero"
              src={MissionImg}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center pt-10">
            <h1 className=" sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
            The Carbon Shredder
            </h1>
            <p className="mb-8 text-black text-lg leading-relaxed">
              {props.OurMission}
              {/* Our mission is to offer you a comprehensive platform for tracking
              and offsetting carbon emissions, tailored to your lifestyle. We
              want to provide real-time insights into the carbon costs
              associated with your decisions. Join us on our journey to improve
              the accuracy of our carbon footprint estimates and provide you
              with the right information to make informed decisions based on the
              true (carbon included) cost of products and services */}
            </p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
