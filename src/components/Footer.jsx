import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="bg-[url('/dot-bg.png')] bg-cover bg-center h-[85vh] bg-[#042c4c] relative">
        <div className="absolute w-full h-full top-0 left-0 bg-[#042c4c] bg-opacity-80">
          <div className="contents">
            <div className="dws border-b border-gray-500">
              <div className="container">
                <div className="flex justify-between py-10 items-center">
                  <div className="">
                    <h2 className="text-white  font-bold mb-3">
                      Sign Up Our Newsletter
                    </h2>
                    <p className="text-white text-xs">
                      We Offer An Informative Monthly Technology Newsletter -
                      Check It Out.
                    </p>
                  </div>
                  <div className="">
                    <div className="flex">
                      <input
                        type="email"
                        className="w-[355px] rounded-l border-0 outline-0 pl-4 p-1 h-9 placeholder:text-xs text-sm"
                        placeholder="Enter Your Email"
                      />
                      <button className="w-[140px] h-9 bg-indigo-500 text-white text-xs hover:bg-orange-400 transition ease-in-out delay-150">
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sd border-b border-gray-500 h-[55vh] flex justify-center items-center">
              <div className="container">
                <div className="flex gap-10">
                  <div className="flex flex-col gap-5 w-[40%]">
                    <Link
                      href="/"
                      className="text-xl font-bold text-white flex gap-2"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="w-4" />
                      ECE Faculty
                    </Link>
                    <p className="text-gray-300 text-xs leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco consectetur laboris.
                    </p>
                    <div className="flex gap-3">
                      <span className="flex justify-center items-center hover:bg-indigo-500 hover:text-white transition ease-in-out delay-150 cursor-pointer bg-white rounded-lg text-indigo-500  p-2">
                        <FontAwesomeIcon icon={faFacebook} className="w-4" />
                      </span>
                      <span className="flex justify-center items-center hover:bg-indigo-500 hover:text-white transition ease-in-out delay-150 cursor-pointer bg-white rounded-lg text-indigo-500  p-2">
                        <FontAwesomeIcon icon={faXTwitter} className="w-4" />
                      </span>
                      <span className="flex justify-center items-center hover:bg-indigo-500 hover:text-white transition ease-in-out delay-150 cursor-pointer bg-white rounded-lg text-indigo-500  p-2">
                        <FontAwesomeIcon icon={faInstagram} className="w-4" />
                      </span>
                      <span className="flex justify-center items-center hover:bg-indigo-500 hover:text-white transition ease-in-out delay-150 cursor-pointer bg-white rounded-lg text-indigo-500  p-2">
                        <FontAwesomeIcon icon={faYoutube} className="w-4" />
                      </span>
                    </div>
                  </div>
                  <div className="w-[20%]">
                    <h3 className="text-white text-sm font-bold pb-2 border-b border-gray-500 mb-4">
                      Our Services
                    </h3>
                    <ul className="flex flex-col gap-2">
                      <li>
                        <Link href="" className="text-gray-300 text-xs">
                          Startup Solutions
                        </Link>
                      </li>
                      <li>
                        <Link href="" className="text-gray-300 text-xs">
                          Web Development
                        </Link>
                      </li>
                      <li>
                        <Link href="" className="text-gray-300 text-xs">
                          Networking Services
                        </Link>
                      </li>
                      <li>
                        <Link href="" className="text-gray-300 text-xs">
                          SEO Optimization
                        </Link>
                      </li>
                      <li>
                        <Link href="" className="text-gray-300 text-xs">
                          Apps Development
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[20%]">
                    <h3 className="text-white text-sm font-bold pb-2 border-b border-gray-500 mb-4">
                      Useful Links
                    </h3>
                    <ul className="flex flex-col gap-2">
                      <li>
                        <Link href="" className="text-gray-300 text-xs">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="" className="text-gray-300 text-xs">
                          Case Study
                        </Link>
                      </li>
                      <li>
                        <Link href="" className="text-gray-300 text-xs">
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link href="" className="text-gray-300 text-xs">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="" className="text-gray-300 text-xs">
                          Terms & Conditions
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[20%]">
                    <h3 className="text-white text-sm font-bold pb-2 border-b border-gray-500 mb-4">
                      Contact Info
                    </h3>
                    <ul className="flex flex-col gap-2">
                      <li>
                        <p className="flex gap-3 text-white text-xs mb-2">
                          <FontAwesomeIcon icon={faPhone} className="w-4" />
                          Phone
                        </p>
                        <Link href="" className="ml-7 text-gray-300 text-xs">
                          080 707 555-321
                        </Link>
                      </li>
                      <li>
                        <p className="flex gap-3 text-white text-xs mb-2">
                          <FontAwesomeIcon icon={faEnvelope} className="w-4" />
                          Email
                        </p>
                        <Link href="" className="ml-7 text-gray-300 text-xs">
                          demo@example.com
                        </Link>
                      </li>
                      <li>
                        <p className="flex gap-3 text-white text-xs mb-2">
                          <FontAwesomeIcon icon={faLocation} className="w-4" />
                          Address
                        </p>
                        <Link href="" className="ml-7 text-gray-300 text-xs">
                          526 Melrose Street, Water Mill, 11976 New York
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="dsd flex items-center h-[76px]">
              <div className="container">
                <div className="flex justify-between">
                  <div className="text-gray-300 text-xs">
                    &copy; 2024 ECE Faculty - All Rights Reserved.
                  </div>
                  <div className="text-gray-300 text-xs">
                    <Link href="">Terms & Conditions</Link> |
                    <Link href=""> Privacy Policy</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
