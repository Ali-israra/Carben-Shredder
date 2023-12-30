import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import menu from "../assets/images/menu.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="navbar">
        <div className="container mx-auto flex  p-5 flex-col md:flex-row items-center justify-between">
          <Link
            to="/"
            className="flex  title-font font-medium items-center justify-center text-gray-900 mb-4 md:mb-0"
          >
            <img src={Logo} alt="Logo" className="w-10" />
            <span className="ml-3 text-2xl uppercase font-black mt-2">
              Carbon Shredder
            </span>
          </Link>

          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={menu} alt="" />
          </button>
        </div>
      </header>
      {/* full screen menu Start */}

      <div>
        <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu cfd</button>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: isOpen ? "rgba(0, 0, 0, 0.8)" : "transparent",
            zIndex: 1000,
            display: isOpen ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul className="flex flex-col gap-5 md:gap-10 items-center">
            <li onClick={() => setIsOpen(false)}>
              <Link
                to="/"
                className="text-white text-3xl md:text-7xl font-extrabold text-center hover:text-primary hover:underline"
              >
                Home
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link
                to="/about"
                className="text-white text-3xl md:text-7xl font-extrabold text-center hover:text-primary hover:underline"
              >
                About
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link
                to="/contact"
                className="text-white text-3xl md:text-7xl font-extrabold text-center hover:text-primary hover:underline"
              >
                Calculator
              </Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link
                to="/contact"
                className="text-white text-3xl md:text-7xl font-extrabold text-center hover:text-primary hover:underline"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* full screen menu End */}
    </>
  );
}
