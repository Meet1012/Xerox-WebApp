import React from "react";
import Printer from "../assets/Images/Printer.jpg";
import { useNavigate } from "react-router-dom";
const Card = ({ location }) => {
  const navigate = useNavigate();
  const navigation = () => {
    navigate(`/details?location=${location}`);
  };

  return (
    <div
      onClick={navigation}
      className="h-[320px] w-[300px] flex flex-col gap-2 hover:shadow-lg hover:scale-110 duration-500 p-3 hover:rounded-md mt-10"
    >
      <img src={Printer} alt="" className="rounded-md" />
      <div className="flex justify-between">
        <h2 className="font-bold">Name</h2>
        <div className="bg-green-800 font-bold text-white px-2 rounded-md">
          <span>★ 4.4</span>
        </div>
      </div>
      <div>
        <h2>Location</h2>
      </div>
    </div>
  );
};

export default Card;
