import React from "react";
import IconHome from "../Icon/IconHome";
import IconSearch from "../Icon/IconSearch";
import IconCliboard from "../Icon/IconCliboard";
import Style from "./header.module.css";
import Link from "next/link";

function Header() {
  return (
    <header className={Style.header}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="hidden md:flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href="/">
            <a className={Style.btn}>
              <IconHome />
              Home
            </a>
          </Link>
          <Link href="/service">
            <a className={Style.btn}>
              <IconSearch />
              Find Your Photo
            </a>
          </Link>
          <Link href="/contact">
            <a className={Style.btn}>
              <IconCliboard />
              Service
            </a>
          </Link>
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-2xl text-white font-pacifaco">
            Wedding Gallery
          </span>
        </a>
        <div className="hidden md:flex lg:w-2/5 lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex items-center bg-gray-200 border-0 py-2 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            @Liat Maki Dulu
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
