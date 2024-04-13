import React from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";
import Printer from "../assets/Images/Printer.jpg";
import Xerox from "../assets/Images/Xerox.jpg";
import Binding from "../assets/Images/Binding.jpg";
import Hard_Bound from "../assets/Images/Hard_Bound.png";

function Main({ location }) {
  console.log({ location });
  return (
    <div>
      <NavBar location={location} />
      <div className="flex justify-center items-center">
        <Menu photos={Printer} description="Printout" />
        <Menu photos={Xerox} description="Xerox" />
        <Menu photos={Binding} description="Binding" />
        <Menu photos={Hard_Bound} description="Hard Bound" />
      </div>
    </div>
  );
}

export default Main;
