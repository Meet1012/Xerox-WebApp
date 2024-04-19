import React from "react";
import { MdUpload } from "react-icons/md";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

const CardDetails = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const locationval = queryParams.get("location");

  return (
    <div>
      <NavBar locationval={locationval} />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-200 p-7 rounded-lg flex justify-between gap-72">
          <div className="flex flex-col">
            <span className="font-bold text-lg">
              Royal Stationary And Xerox
            </span>
            <br />
            <p>
              1, Sanwariya to, Sai Palace Apartment, Yogi Chowk <br /> opposite
              Nilkanth Plaza Surat
            </p>
            <input type="file" id="upload" className="hidden" />
            <label
              htmlFor="upload"
              className="flex items-center bg-red-500 rounded-lg w-[110px] justify-center mt-10 cursor-pointer"
            >
              <MdUpload />
              Upload File
            </label>
            <span className="mt-7 font-bold">Pricing!</span>
            <br />
            <span>Colour Xerox</span>
            <span>Black And White Xerox</span>
            <span>Binding</span>
          </div>
          <img
            src="https://lh5.googleusercontent.com/p/AF1QipNdtqdpIdZ6kdBLOXg7NSQimpDDlkHTTi5jAXKL=w426-h240-k-no"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
