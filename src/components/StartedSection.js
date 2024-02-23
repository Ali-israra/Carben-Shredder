import React from "react";
import FlightImg from '../assets/images/fligh-image.jpg'

export default function StartedSection() {
  return (
    <>
      <section className="bg-white">
        <div className="container mx-auto py-28 max-w-5xl ">
          <div className="flex flex-col gap-8 justify-center items-center ">
            <h1 className="text-3xl md:text-[40px] leading-[50px] text-center">
            "We are the FIRST generation to feel the impact of climate change and the LAST generation that can do something about it."
            </h1>
            <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">
             Shred your flights
            </button>
            <img src={FlightImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
