import React from "react";
import Printer from "../Images/Printer.jpg";
import Xerox from "../Images/Xerox.jpg";

function Menu() {
  return (
    <div className="flex items-center mt-10">
      <div>
        <img src={Printer} className="w-24 h-24 m-5 rounded-full " />
        <h1 className="font-semibold text-gray-500 text-xl ml-5">PrintOuts</h1>
      </div>
      <div className="ml-10">
        <img src={Xerox} className="w-24 h-24 m-5 rounded-full  " />
        <h1 className="font-semibold text-gray-500 text-xl ml-5">Xerox</h1>
      </div>
    </div>
  );
}

export default Menu;
