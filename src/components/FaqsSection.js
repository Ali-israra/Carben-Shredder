import { Disclosure } from "@headlessui/react";
import Cal from "../assets/images/cal.png";

export default function FaqsSection() {
  return (
    <>
      <div className="container mx-auto px-5 py-20">
        <div className="flex flex-col">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-black text-3xl md:text-[40px] leading-[50px] text-center ">
              frequently asked <span className="text-primary">questions</span>
            </h1>
          </div>
          <div className="flex flex-row gap-10">
            <div className="basis-full md:basis-7/12 py-10 flex flex-col ">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? " text-primary" : ""
                      } flex w-full justify-between rounded-lg px-4 py-5 text-left text-lg font-medium   focus:outline-none focus-visible:ring   `}
                    >
                      <span>What happens once I subscribe?</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          open ? " transform rotate-180" : ""
                        } h-5 w-5 text-primary  `}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-gray-500">
                      As a subscriber, you fund carbon reduction projects. Each
                      month, we send out an "impact update" email sharing the
                      progress being made from your funding. You can learn more
                      about our projects by visiting our Projects page.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? " text-primary" : ""
                      } flex w-full justify-between rounded-lg px-4 py-5 text-left text-lg font-medium   focus:outline-none focus-visible:ring   `}
                    >
                      <span>
                        How much does it cost to offset my carbon footprint?
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          open ? " transform rotate-180" : ""
                        } h-5 w-5 text-primary  `}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-gray-500">
                      The cost of offsetting your carbon footprint depends on
                      how much carbon your lifestyle emits, and on the cost of
                      removing that carbon from the atmosphere.
                      <br />
                      <br />
                      On average, it's about $23 for a Wren user to offset their
                      carbon footprint. Many choose to offset half or double
                      their carbon footprint.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? " text-primary" : ""
                      } flex w-full justify-between rounded-lg px-4 py-5 text-left text-lg font-medium   focus:outline-none focus-visible:ring   `}
                    >
                      <span>
                        What else can I do to help end the climate crisis?
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          open ? " transform rotate-180" : ""
                        } h-5 w-5 text-primary  `}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-gray-500">
                      The first thing you should do is see how you can reduce
                      your carbon footprint and offset the rest.
                      <br />
                      You can also educate others on climate change. Most people
                      don't realize how urgent the problem is. Extinction
                      Rebellion has some great educational content on their
                      website.
                      <br />
                      Lastly, make sure to vote and be politically active. Local
                      governments can move the fastest, so write to your city
                      council people and representatives and tell them why you
                      care about climate change.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? " text-primary" : ""
                      } flex w-full justify-between rounded-lg px-4 py-5 text-left text-lg font-medium   focus:outline-none focus-visible:ring   `}
                    >
                      <span>How does your business model work?</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          open ? " transform rotate-180" : ""
                        } h-5 w-5 text-primary  `}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-gray-500">
                      80% of your subscription is sent straight to climate
                      projects that plant trees, protect rainforest, and suck
                      carbon out of the sky. The rest is spent keeping Wren
                      running: paying salaries, sourcing the best climate
                      projects, and paying for marketing to help as many people
                      as possible take climate action. An additional processing
                      fee is added to cover processing costs from our payment
                      provider, Stripe, and varies by payment method.
                      <br />
                      <br />
                      Our fee means we're able to hire the best talent in the
                      world and put them to work reversing climate change. The
                      best minds of our generation are optimizing Ads at Google
                      and Facebook. We will only be able to hire those people if
                      we can pay them.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="basis-full md:basis-5/12">
              <img src={Cal} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
