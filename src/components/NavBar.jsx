// NavBar.js
import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { useLocation } from "react-router-dom";

function NavBar({ locationval }) {
  return (
    <div className="flex items-center p-4 shadow-lg h-20">
      <SlLocationPin className="h-11 w-14 m-5" />
      <h1 className="font-bold text-sm underline">Other</h1>
      <h1 className="text-sm ml-3">{locationval}</h1>{" "}
      {/* Displaying location */}
      <IoIosArrowDown />
      <input
        className=" ml-[30rem] w-[26rem] rounded-full shadow-sm h-[3rem] px-5"
        placeholder="Search"
      ></input>
      <CgProfile className="h-4 w-4 ml-28" />
      <h1 className="ml-3">Sign-In</h1>
    </div>
  );
}

export default NavBar;
