import React from "react";

export default function Hero() {
  return (
    <section className="h-[90vh] bg-[url('./assets/images/pic.png')]">
      <div className="container mx-auto my-auto h-full flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center flex justify-center items-center lg:w-2/3 w-full flex-col my-auto">
          <h1 className="md:text-[100px] text-white text-3xl leading-[120px] mb-4">
            <span className="text-primary">Selecting </span>  change<br /> startswith you
          </h1>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">
            Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
