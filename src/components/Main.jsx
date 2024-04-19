import React, { useContext } from "react";
import NavBar from "./NavBar";
import Menu from "./Menu";
import Printer from "../assets/Images/Printer.jpg";
import Xerox from "../assets/Images/Xerox.jpg";
import Binding from "../assets/Images/Binding.jpg";
import Hard_Bound from "../assets/Images/Hard_Bound.png";
import Card from "./Card";
import { useLocation } from "react-router-dom";

function Main() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const locationval = queryParams.get("location");
  return (
    <div>
      <NavBar locationval={locationval} />
      <div className="flex justify-center items-center">
        <Menu photos={Printer} description="Printout" />
        <Menu photos={Xerox} description="Xerox" />
        <Menu photos={Binding} description="Binding" />
        <Menu photos={Hard_Bound} description="Hard Bound" />
      </div>
      <div className="grid grid-cols-3 gap-4 px-36 ml-12">
        <Card location={locationval}/>
        <Card location={locationval}/>
        <Card location={locationval}/>
        <Card location={locationval}/>
        <Card location={locationval}/>
        <Card location={locationval}/>
        <Card location={locationval}/>
        <Card location={locationval}/>
        <Card location={locationval}/>
      </div>
    </div>
  );
}

export default Main;
