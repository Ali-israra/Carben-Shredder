import React from "react";
// import PageHeader from "../assets/images/page-header.jpg";
// import AboutImage from "../assets/images/about-image.jpg";
import OurMission from "../components/OurMission";
import Goals from "../components/Goals";
import FounderProfile from "../components/FounderProfile";
import Hero from "../components/Hero";

export default function About() {
  return (
    <>
      <section
        className=" h-96 bg-primary bg-opacity-10"
      >
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className="capitalize text-5xl mb-20 text-black">About Carbon Shredder</h1>
          </div>
        </div>
      </section>
      <OurMission OurMission="Our vision is crystal clear: to be at the forefront of a global movement towards carbon neutrality. We envision a future where individuals and businesses are equipped to make informed choices that positively impact the environment. Through our cutting-edge carbon credit platform and user-friendly app, we are reshaping the way people engage with their carbon footprint. Our goal is to contribute to a healthier, greener planet for generations to come."/>
      <Goals/>
      <FounderProfile/>
      <Hero/>
      {/* <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-row gap-20 py-20">
            <div className="basis-full md:basis-6/12 my-auto">
              <h1 className="text-[40px] text-black mb-5">About Us</h1>
              <p className="text-lg ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente itaque accusamus minima dolore quos ad cum, tenetur
                eaque distinctio consequuntur hic rem commodi, nesciunt officia,
                sint esse eius consequatur? Porro consequatur officiis similique
                asperiores ipsum dolor corrupti. Suscipit animi illo in
                obcaecati asperiores nostrum voluptates enim dolores praesentium
                eum laudantium porro natus facere necessitatibus, quaerat
                repudiandae vitae corporis? Ab, voluptatem.
              </p>
            </div>
            <div className="basis-full md:basis-6/12">
              <img src={AboutImage} className="rounded" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Raw Denim Heirloom Man Braid
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-primary inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-primary mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-primary mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx={6} cy={6} r={3} />
                  <circle cx={6} cy={18} r={3} />
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-primary mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Neptune
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
