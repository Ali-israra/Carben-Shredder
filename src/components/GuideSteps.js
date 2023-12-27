import React from "react";
import Step1 from "../assets/images/step-1.jpg";

export default function GuideSteps() {
  return (
    <>
      <div className="container mx-auto  px-4">
        <div class="flex flex-row gap-8 py-10">
          <div class="basis-full md:basis-6/12 flex flex-col gap-10 justify-center">
            <h1 className="h-7 w-7 rounded-full border border-primary flex justify-center items-center p-5 text-sm">
              01
            </h1>
            <h1 className="text-3xl md:text-[40px] capitalize leading-[50px]">
              Calculate your <br /> carbon footprint.
            </h1>
            <p className="text-lg">
              Use our intuitive calculator to find out how much CO₂ you emit.
            </p>
          </div>
          <div class="basis-full md:basis-6/12">
            <img src={Step1} alt="" />
          </div>
        </div>
        <div class="flex flex-row gap-8 py-10">
          <div class="basis-full md:basis-6/12">
            <img src={Step1} alt="" />
          </div>
          <div class="basis-full md:basis-6/12 flex flex-col gap-10 justify-center">
            <h1 className="h-7 w-7 rounded-full border border-primary flex justify-center items-center p-5 text-sm">
              02
            </h1>
            <h1 className="text-3xl md:text-[40px] capitalize leading-[50px]">
              Start a monthly subscription to fund climate solutions.
            </h1>
            <p className="text-lg">
              Maximistte your impact by funding the climate solutions our planet
              needs.
            </p>
          </div>
        </div>
        <div class="flex flex-row gap-8 py-10">
          <div class="basis-full md:basis-6/12 flex flex-col gap-10 justify-center">
            <h1 className="h-7 w-7 rounded-full border border-primary flex justify-center items-center p-5 text-sm">
              03
            </h1>
            <h1 className="text-3xl md:text-[40px] capitalize leading-[50px]">
              See your impact grow every month.
            </h1>
            <p className="text-lg">
              Receive updates that show how you’re making a positive impact on
              the climate
            </p>
          </div>
          <div class="basis-full md:basis-6/12">
            <img src={Step1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
