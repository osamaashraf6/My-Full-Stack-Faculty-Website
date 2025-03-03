"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navBG, setNavBG] = useState(false);
  function scrollFunction() {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      setNavBG(true);
    } else {
      setNavBG(false);
    }
  }
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);
  return (
    <>
      <nav
        className={`nav bg-white shadow-lg fixed w-full flex items-center h-20 z-[999] transition ease-in-out delay-150 ${
          navBG && "shadow-lg"
        }`}
        style={{ backgroundColor: navBG && "#fff" }}
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className=" ">
              <Link href="/" className="text-xl font-bold text-indigo-500">
                ECE Faculty
              </Link>
            </div>
            <ul className="flex items-center">
              <li>
                <Link
                  href="/"
                  className={`px-5 block text-xs  hover:text-indigo-500 transition ease-in-out  ${
                    navBG ? "text-black" : "text-indigo-500"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`px-5 block text-xs  hover:text-indigo-500 transition ease-in-out  ${
                    navBG ? "text-black" : "text-indigo-500"
                  }`}
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/posts"
                  className={`px-5 block text-xs   hover:text-indigo-500 transition ease-in-out  ${
                    navBG ? "text-black" : "text-indigo-500"
                  }`}
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard"
                  className={`px-5 block text-xs  hover:text-indigo-500 transition ease-in-out  ${
                    navBG ? "text-black" : "text-indigo-500"
                  }`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`px-5 block text-xs  hover:text-indigo-500 transition ease-in-out  ${
                    navBG ? "text-black" : "text-indigo-500"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li className="dropdown relative py-10">
                <Link
                  href=""
                  className={`px-5 flex gap-2 items-center text-xs  hover:text-indigo-500 transition ease-in-out  ${
                    navBG ? "text-black" : "text-indigo-500"
                  }`}
                >
                  More
                  <FontAwesomeIcon icon={faAngleDown} className="w-3" />
                </Link>
                <ul className="subdropdown absolute mt-24 invisible opacity-0 w-48 bg-white rounded z-[99] shadow-lg h-[250px] max-h-[350px] overflow-auto">
                  <li className="border-b border-gray-100 p-3 hover:bg-indigo-500 hover:text-white transition ease-in-out delay-100">
                    <Link
                      href="/services"
                      className="block w-full  pl-2 text-xs"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="border-b border-gray-100 p-3 hover:bg-indigo-500 hover:text-white transition ease-in-out delay-100">
                    <Link
                      href="/distinguished_students"
                      className="block w-full  pl-2 text-xs"
                    >
                      Distinguished Students
                    </Link>
                  </li>

                  <li className="border-b border-gray-100 p-3 hover:bg-indigo-500 hover:text-white transition ease-in-out delay-100">
                    <Link
                      href="/projects?search=projects"
                      className="block w-full  pl-2 text-xs"
                    >
                      Projects
                    </Link>
                  </li>
                  <li className="border-b border-gray-100 p-3 hover:bg-indigo-500 hover:text-white transition ease-in-out delay-100">
                    <Link
                      href="/schedule"
                      className="block w-full  pl-2 text-xs"
                    >
                      Schedule
                    </Link>
                  </li>
                  <li className="border-b border-gray-100 p-3 hover:bg-indigo-500 hover:text-white transition ease-in-out delay-100">
                    <Link
                      href="/newslists"
                      className="block w-full  pl-2 text-xs"
                    >
                      News
                    </Link>
                  </li>
                  <li className="border-b border-gray-100 p-3 hover:bg-indigo-500 hover:text-white transition ease-in-out delay-100">
                    <Link
                      href="/questionnaire"
                      className="block w-full  pl-2 text-xs"
                    >
                      Questionnaire
                    </Link>
                  </li>
                  <li className="border-b border-gray-100 p-3 hover:bg-indigo-500 hover:text-white transition ease-in-out delay-100">
                    <Link href="/game" className="block w-full  pl-2 text-xs">
                      Play a Game
                    </Link>
                  </li>
                  <li className="p-3 hover:bg-indigo-500 hover:text-white transition ease-in-out delay-100">
                    <Link href="/faq" className="block w-full  pl-2 text-xs">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="flex gap-2">
              <Link href="/dashboard/login" className="text-white text-xs bg-orange-500 w-[140px] flex justify-center items-center rounded">
                Login
              </Link>
              <button className="text-white text-xs bg-indigo-500 w-[140px] h-9 rounded">
                Get It Support
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
