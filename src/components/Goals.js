import React from "react";
import img1 from "../assets/images/8018289.jpg";
import img2 from "../assets/images/9825103.jpg";
import icon1 from "../assets/images/icon-1.png";
import icon2 from "../assets/images/icon-2.png";
import icon3 from "../assets/images/icon-3.png";
import icon4 from "../assets/images/icon-4.png";
import icon5 from "../assets/images/icon-5.png";
import icon6 from "../assets/images/icon-6.png";

export default function Goals() {
  return (
    <>
      <div className="container mx-auto px-5 py-20">
        <div className="flex flex-col">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-black text-3xl md:text-[40px] leading-[50px] text-center ">
              Our goal is to provide real-time carbon insights and offsets.
            </h1>
          </div>

          <div className="flex py-10 flex-row gap-16">
            <div className="basis-full md:basis-6/12  ">
              <img src={img1} className="max-h-[800px] text-center m-auto" alt="" />
            </div>
            <div className="basis-full md:basis-6/12 flex gap-6 flex-col my-auto">
              <h1 className="text-3xl  capitalize leading-10">
                We provide a platform for tracking and offsetting carbon
                emissions
              </h1>

              <ul className="flex flex-col gap-8">
                <li className="flex gap-5">
                  <div className="flex justify-center items-start ">
                    <img src={icon1} className="w-28" alt="icon" />
                  </div>
                  <div>
                    <h1 className="text-2xl capitalize">
                      Baseline your carbon footprint
                    </h1>
                    <p className="text-lg leading-10">
                      We carefully check how much CO2 you emit per month, so we
                      can ensure you offset the right amount of carbon to
                      neutralize your impact.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-start w-16">
                    <img src={icon2}  alt="icon" />
                  </div>
                  <div>
                    <h1 className="text-2xl capitalize">
                      Track your lifestyle changes
                    </h1>
                    <p className="text-lg leading-10">
                      Update your lifestyle changes to reflect the carbon
                      offsets you purchase per month
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-start">
                    <img src={icon3} className="w-28" alt="icon" />
                  </div>
                  <div>
                    <h1 className="text-2xl capitalize">
                      Small contributions can have a big impact
                    </h1>
                    <p className="text-lg leading-10">
                      90% of your contribution will be allocated to managing
                      your carbon offset projects by Cnaught, while the
                      remaining amount will be used for web development and
                      maintenance in order to accomplish our mission.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex py-10 flex-row gap-16">
            <div className="basis-full md:basis-6/12 flex gap-6 flex-col my-auto">
              <h1 className="text-3xl  capitalize leading-10">
                Our core values driving a positive impact for you
              </h1>

              <ul className="flex flex-col gap-8">
                <li className="flex gap-5">
                  <div className="flex justify-center items-start">
                    <img src={icon4} className="w-28" alt="icon" />
                  </div>
                  <div>
                    <h1 className="text-2xl capitalize">Sustainability</h1>
                    <p className="text-lg leading-10">
                      We are dedicated to promoting environmental responsibility
                      and sustainable living, striving to make a positive impact
                      on our planet.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-start">
                    <img src={icon5} className="w-28" alt="icon" />
                  </div>
                  <div>
                    <h1 className="text-2xl capitalize">Transparency</h1>
                    <p className="text-lg leading-10">
                      We believe in openness and honesty, providing our users
                      with clear insights into their carbon footprint and the
                      actions they can take to reduce it.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-start">
                    <img src={icon6} className="w-28" alt="icon" />
                  </div>
                  <div>
                    <h1 className="text-2xl capitalize">Innovation</h1>
                    <p className="text-lg leading-10">
                      We continuously explore cutting-edge technology to develop
                      user-friendly solutions that empower you to embrace carbon
                      neutrality and drive positive change.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="basis-full md:basis-6/12 ">
              <img src={img2} className="max-h-[800px] text-center m-auto" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
