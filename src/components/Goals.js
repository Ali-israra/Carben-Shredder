import React from "react";
import img1 from "../assets/images/8018289.png";
import img2 from "../assets/images/9825103.png";
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
              Our goal is to make climate action{" "}
              <span className="text-primary">simple & effective. </span>
            </h1>
          </div>

          <div className="flex py-10 flex-row gap-16">
            <div className="basis-full md:basis-6/12  bg-primary">
              {/* <img src={img1} className="max-h-[800px] text-center m-auto" alt="" /> */}
            </div>
            <div className="basis-full md:basis-6/12 flex gap-6 flex-col my-auto">
              <h1 className="text-3xl  capitalize leading-10">
                We search the globe for climate projects with the biggest
                potential.
              </h1>
              <p className="text-lg">
                All Wren projects meet three rigorous criteria:
              </p>
              <ul className="flex flex-col gap-8">
                <li className="flex gap-5">
                  <div className="flex justify-center items-start">
                    <img src={icon1} alt="icon" />
                  </div>
                  <div>
                    <h1 className="text-2xl capitalize">Precise tracking</h1>
                    <p className="text-lg leading-10">
                      We carefully check how much CO₂ is offset by each project,
                      so we can promise you lasting impact.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-start">
                    <img src={icon2} alt="icon" />
                  </div>
                  <div>
                    <h1 className="text-2xl capitalize">Regular updates</h1>
                    <p className="text-lg leading-10">
                      We get data straight from projects on the ground, so you
                      can track your impact, month by month.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-start">
                    <img src={icon3} alt="icon" />
                  </div>
                  <div>
                    <h1 className="text-2xl capitalize">
                      Every dollar makes a difference
                    </h1>
                    <p className="text-lg leading-10">
                      Our projects wouldn't happen without your support. With
                      Wren, your money makes a real impact.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex py-10 flex-row gap-16">
         
            <div className="basis-full md:basis-6/12 flex gap-6 flex-col my-auto">
              <h1 className="text-3xl  capitalize leading-10">
              Then, we send you personalized updates every month.
              </h1>
              <p className="text-lg">
              Each update is filled with:
              </p>
              <ul className="flex flex-col gap-8">
                <li className="flex gap-5">
                  <div className="flex justify-center items-start">
                    <img src={icon4} alt="icon" />
                  </div>
                  <div>
                    <h1 className="text-2xl capitalize">Pictures</h1>
                    <p className="text-lg leading-10">
                    You don't have to imagine your impact. You can see it each month.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-start">
                    <img src={icon5} alt="icon" />
                  </div>
                  <div>
                    <h1 className="text-2xl capitalize">Data</h1>
                    <p className="text-lg leading-10">
                    We share the details with you. Count every tree planted, every acre reforested, every ton of carbon offset.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-start">
                    <img src={icon6} alt="icon" />
                  </div>
                  <div>
                    <h1 className="text-2xl capitalize">
                    Stories
                    </h1>
                    <p className="text-lg leading-10">
                    Read stories fresh from farm or forest. See how your choices don't just help the earth. They change lives too.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="basis-full md:basis-6/12 bg-primary">
              {/* <img src={img2} className="max-h-[800px] text-center m-auto" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
