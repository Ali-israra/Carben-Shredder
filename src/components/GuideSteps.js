import React from "react";
import Step1 from "../assets/images/3371523.png";
import Step2 from "../assets/images/5867.png";
import Step3 from "../assets/images/8301082.png";

export default function GuideSteps() {
  return (
    <>
      <div className="container mx-auto  px-4">
        <div class="flex flex-row gap-16 py-20">
          <div class="basis-full md:basis-6/12 flex flex-col gap-10 justify-center">
            <h1 className="h-7 w-7 rounded-full border border-primary flex justify-center items-center p-5 text-sm">
              01
            </h1>
            <h1 className="text-3xl md:text-[40px] capitalize leading-[50px]">
              Calculate your <br /> carbon footprint.
            </h1>
            <p className="text-lg">
              {/* Use our intuitive calculator to find out how much CO₂ you emit. */}
              
A carbon footprint measures the total greenhouse gas emissions directly and indirectly caused by an individual, organization, event, or product, usually expressed in equivalent tons of carbon dioxide.
            </p>
          </div>
          <div class="basis-full md:basis-6/12 bg-primary">
            {/* <img src={Step1} className="text-center" alt="" /> */}
            {/* <div className="h-14 w-14 mb-5 bg-primary mx-auto"></div> */}
          </div>
        </div>
        <div class="flex flex-row gap-16 py-10">
          <div class="basis-full md:basis-6/12 bg-primary">
            {/* <img src={Step2} alt="" className="text-center" /> */}
          </div>
          <div class="basis-full md:basis-6/12 flex flex-col gap-10 justify-center">
            <h1 className="h-7 w-7 rounded-full border border-primary flex justify-center items-center p-5 text-sm">
              02
            </h1>
            <h1 className="text-3xl md:text-[40px] capitalize leading-[50px]">
              Start a monthly subscription to fund climate solutions.
            </h1>
            <p className="text-lg">
              {/* Maximistte your impact by funding the climate solutions our planet
              needs. */}
              Maximize your impact by supporting and funding the essential climate solutions required for our planet's sustainability and well-being.
            </p>
          </div>
        </div>
        <div class="flex flex-row gap-16 py-10">
          <div class="basis-full md:basis-6/12 flex flex-col gap-10 justify-center">
            <h1 className="h-7 w-7 rounded-full border border-primary flex justify-center items-center p-5 text-sm">
              03
            </h1>
            <h1 className="text-3xl md:text-[40px] capitalize leading-[50px]">
              See your impact grow every month.
            </h1>
            <p className="text-lg">
              {/* Receive updates that show how you’re making a positive impact on
              the climate */}
              Witness your impact expand with each passing month. Receive regular updates showcasing the positive strides you're making towards climate action and creating a sustainable future.
            </p>
          </div>
          <div class="basis-full md:basis-6/12 bg-primary">
            {/* <img src={Step3} alt="" className="text-center"/> */}
          </div>
        </div>
      </div>
    </>
  );
}
