import React from "react";
import homeLogo from "../images/home-logo.svg";
import rectangle from "../images/rectangle.svg";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className=" fixed bg-[url('./images/home-bg.jpg')] top-0 left-0 w-full h-full bg-cover bg-center  ">
          <div className="navigation-bar  drop-shadow-md flex items-center  justify-between h-24  bg-black/20 backdrop-blur-md  mt-10 ml-14 max-w-full   rounded-md">
            <img
              className="h-12 w-12 ml-10 cursor-pointer "
              src={homeLogo}
              alt="logo"
            />
            {/* <img src={rectangle} alt="" /> */}
            <nav className="text-white z-10 flex gap-8 font-mono text-lg pr-32 absolute right-0 ">
              <a href="/">00 HOME</a>
              <a href="/">01 DESTINATION</a>
              <a href="/">02 CREW</a>
              <a href="/">03 TECHNOLOGY</a>
            </nav>
          </div>
        </div>
        <div>
          <h1>Hello</h1>
        </div>
      </div>
    </>
  );
}
