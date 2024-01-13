import React from "react";

export default function StartedSection() {
  return (
    <>
      <section className="bg-primary bg-opacity-10">
        <div className="container mx-auto py-28 max-w-5xl ">
          <div className="flex flex-col gap-8 justify-center items-center ">
            <h1 className="text-3xl md:text-[40px] leading-[50px] text-center">
            "We are the FIRST generation to feel the impact of climate change and the LAST generation that can do something about it."
            </h1>
            <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">
              Shred your carbon
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
