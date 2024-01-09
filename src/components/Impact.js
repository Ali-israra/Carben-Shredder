import { Fragment } from "react";
import { Tab } from "@headlessui/react";

export default function Impact() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-black text-3xl md:text-[40px] leading-[50px] text-center ">
              That’s the same climate{" "}
              <span className="text-primary"> impact as:</span>
            </h1>
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9" />
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                </svg> */}
                <div className="h-14 w-14 mb-5 bg-primary mx-auto"></div>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  16.5
                </h2>
                <p className="leading-relaxed">new trees planted</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                </svg> */}
                <div className="h-14 w-14 mb-5 bg-primary mx-auto"></div>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  0.2
                </h2>
                <p className="leading-relaxed">cars off the road for a year</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6" />
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                </svg> */}
                <div className="h-14 w-14 mb-5 bg-primary mx-auto"></div>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  0.1
                </h2>
                <p className="leading-relaxed">homes’ annual energy usage</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg> */}
                <div className="h-14 w-14 mb-5 bg-primary mx-auto"></div>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  3.6
                </h2>
                <p className="leading-relaxed">flights from LA to New York</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <Tab.Group>
            <div className="flex flex-row items-center">
              <div className="basis-full md:basis-4/12">
                <Tab.List className="flex flex-col gap-5">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "text-primary text-2xl py-5 px-5 focus-visible:outline-none border-r-4 border-primary text-right"
                            : "bg-white text-black text-xl py-5 px-5 border-r-4 border-gray-500 text-right"
                        }
                      >
                        Emissions Reductions
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "text-primary text-2xl py-5 px-5 focus-visible:outline-none border-r-4 border-primary text-right"
                            : "bg-white text-black text-xl py-5 px-5 border-r-4 border-gray-500 text-right"
                        }
                      >
                        Conservation
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "text-primary text-2xl py-5 px-5 focus-visible:outline-none border-r-4 border-primary text-right"
                            : "bg-white text-black text-xl py-5 px-5 border-r-4 border-gray-500 text-right"
                        }
                      >
                        Short-lived removal
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "text-primary text-2xl py-5 px-5 focus-visible:outline-none border-r-4 border-primary text-right"
                            : "bg-white text-black text-xl py-5 px-5 border-r-4 border-gray-500 text-right"
                        }
                      >
                        Long-lived removal
                      </button>
                    )}
                  </Tab>
                </Tab.List>
              </div>
              <div className="basis-full md:basis-8/12 px-0 md:px-10">
                <Tab.Panels>
                  <Tab.Panel>
                    <h1 className="text-2xl">Emissions Reductions</h1>
                    <p className="text-lg mt-5">
                      This category covers a wide range of projects that aim to
                      reduce and avoid emissions versus business as usual.
                      Examples include: renewable energy, destruction of
                      refrigerants that would otherwise be vented to the
                      atmosphere, and capture of methane emitted from landfills.
                    </p>
                  </Tab.Panel>
                  <Tab.Panel>
                    <h1 className="text-2xl">Conservation</h1>
                    <p className="text-lg mt-5">
                      This category typically consists of nature-based projects
                      that help retain an existing source of natural carbon
                      storage that would otherwise be at risk — for example,
                      rainforests that would be cut down for development or peat
                      bogs that might be drained for agriculture.
                    </p>
                  </Tab.Panel>
                  <Tab.Panel>
                    <h1 className="text-2xl">Short-lived removal</h1>
                    <p className="text-lg mt-5">
                      This category typically consists of nature-based projects
                      that remove existing carbon and store it in new plants,
                      trees, or soil — for example, planting trees in an area
                      that has previously been clear cut or restoring plant life
                      to tidal wetlands.
                    </p>
                  </Tab.Panel>
                  <Tab.Panel>
                    <h1 className="text-2xl">Long-lived removal</h1>
                    <p className="text-lg mt-5">
                      This is a highly diverse category of projects that
                      includes cutting-edge engineered solutions that hold
                      significant promise but are not yet available at scale.
                      Examples include direct air capture technology and storage
                      of carbon through enhanced rock weathering.
                    </p>
                  </Tab.Panel>
                </Tab.Panels>
              </div>
            </div>
          </Tab.Group>
        </div>
      </section>
    </>
  );
}
