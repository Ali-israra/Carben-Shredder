import React from "react";

export default function SubscriptionWorks() {
  return (
    <>
      <section className="h-96  bg-primary bg-opacity-10">
        <div className="conatiner mx-auto px-4 h-full">
          <div className="flex flex-col justify-end items-center h-full">
            <h1 className=" text-5xl mb-20 text-black">
              How our subscription works
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 pt-20 max-w-5xl">
          {/* <h1 className="text-3xl font-bold mb-8">
            How Our Subscription Works
          </h1> */}
          {/* Subscription Service Description */}
          <div className=" p-6 mb-8">
            <p className="text-lg text-black">
              <b> Shred Your Carbon Footprint:</b> our monthly carbon offset
              subscription service At Carbon Shredder, we understand the
              importance of taking action against climate change. That's why we
              offer an innovative carbon offset subscription service, allowing
              you to proactively contribute to reducing global carbon emissions.
              The cost to offset is $20 USD per tonne of CO2, excluding taxes
              and payment fees.
            </p>
            <br />
            <p className="text-lg text-black">
              Based on your calculated footprint, you can choose a subscription
              level that suits your goals:
            </p>
          </div>
          {/* Subscription Plans */}
        </div>
        <div className="container mx-auto pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Shredder */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Basic shredder</h3>
              <p className="text-lg mb-4">
                Ideal for individuals taking their first step in carbon
                offsetting. This plan offsets up to 50% of your estimated
                monthly carbon emissions.
              </p>
              <ul className="list-disc pl-6">
                <li className="mb-2">
                  Access to the carbon footprint calculator
                </li>
                <li className="mb-2">Personalized dashboard</li>
                <li>Email support for any queries</li>
              </ul>
            </div>
            {/* Standard Shredder */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Standard shredder</h3>
              <p className="text-lg mb-4">
                Perfect for those committed to fully neutralizing their carbon
                footprint. This plan offsets 100% of your estimated monthly
                emissions.
              </p>
              <ul className="list-disc pl-6">
                <li className="mb-2">
                Same as the Basic Plan
                </li>
                <li className="mb-2">with the added benefit of achieving carbon neutrality each month.</li>
                
              </ul>
            </div>
            {/* Ultimate Shredder */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Ultimate shredder</h3>
              <p className="text-lg mb-4">
                For the environmentally conscious looking to make a greater
                impact. This plan offsets more than your monthly emissions,
                contributing to reducing your overall climate debt.
              </p>
              <ul className="list-disc pl-6">
                <li className="mb-2">
                Same as the Standard Plan
                </li>
                <li className="mb-2">Personalized dashboard</li>
                <li>but with the focus on making a more substantial impact by offsetting 200% of your monthly emissions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
