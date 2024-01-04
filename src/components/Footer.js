import React from "react";
import Logo from "../assets/images/footer-logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-primary bg-opacity-20">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex md:items-center  flex-row">
          <div className="basis-4/12 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              to="/"
              className="flex flex-col font-medium items-start md:justify-start justify-center text-gray-900"
            >
              <img src={Logo} className="w-72 " alt="Logo" />
            </Link>
          </div>
          <div className="flex basis-8/12 items-center  md:pl-20  md:mt-0 mt-10 md:text-left justify-start">
            <div className=" md:basis-1/2 basis-full px-4 ">
              <h2 className=" font-bold text-gray-900 tracking-widest text-2xl mb-3">
                Quick Links
              </h2>
              <nav className="list-none ">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-gray-800 text-xl">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-gray-800 text-xl"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/calculator"
                    className="text-gray-600 hover:text-gray-800 text-xl"
                  >
                    Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-gray-800 text-xl"
                  >
                    Contact Us
                  </Link>
                </li>
              </nav>
            </div>
            <div className=" md:basis-1/2 basis-full px-4">
              <h2 className="font-bold text-gray-900 tracking-widest text-2xl mb-3">
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
                  <svg
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
