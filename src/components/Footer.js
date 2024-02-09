import React from "react";
import Logo from "../assets/images/footer-logo-2.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-primary bg-opacity-20">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex   flex-row">
          <div className="basis-4/12 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              to="/"
              className="flex flex-col font-medium items-start md:justify-start justify-center text-gray-900"
            >
              <img src={Logo} className="w-32 " alt="Logo" />
            </Link>
          </div>
          <div className="flex basis-8/12   md:pl-20  md:mt-0 mt-10 md:text-left justify-start">
            <div className=" md:basis-1/3 basis-full px-4 ">
              <h2 className=" font-bold text-gray-900 tracking-widest text-2xl mb-3">
                Quick Links
              </h2>
              <nav className="list-none ">
                <li>
                  <Link
                    to="/"
                    className="text-gray-600 hover:text-gray-800 text-xl"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/how-it-works"
                    className="text-gray-600 hover:text-gray-800 text-xl"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs"
                    className="text-gray-600 hover:text-gray-800 text-xl"
                  >
                    Faq's
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-gray-800 text-xl"
                  >
                    Our mission
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-gray-800 text-xl"
                  >
                    Connect
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/terms-and-conditions"
                    className="text-gray-600 hover:text-gray-800 text-xl"
                  >
                    Terms & Conditions

                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-gray-600 hover:text-gray-800 text-xl"
                  >
                   Privacy Policy
                  </Link>
                </li>
        
              </nav>
            </div>
            <div className=" md:basis-1/3 basis-full px-4">
              <h2 className="font-bold text-gray-900 tracking-widest text-xl mb-3">
                Follow Us
              </h2>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
                      fill="#6B7280"
                    />
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={0}
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    />
                    <circle cx={4} cy={4} r={2} stroke="none" />
                  </svg>
                </a>
              </span>
            </div>
            <div className="md:basis-1/3 basis-full">
            <ul className="flex flex-col gap-8 ">
                <li className="flex gap-5">
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="font-bold text-gray-900 tracking-widest text-xl mb-3">Address</h1>
                    <p className="text-lg leading-10">
                      Cecilia Chapman 711-2880 Nulla St.
                    </p>
                  </div>
                </li>
                {/* <li className="flex gap-5">
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-2xl ">Phone</h1>
                    <p className="text-lg leading-10">+1 (866)-838-5838</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-2xl ">Email</h1>
                    <p className="text-lg leading-10">
                      info@carbonshredder.com
                    </p>
                  </div>
                </li> */}
              </ul>

            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FBF4DB]">
        <div className="container mx-auto py-4 px-5 ">
          <p className="text-gray-500 text-sm text-center">
            © 2024 Carbon Shredder — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
