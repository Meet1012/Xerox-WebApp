import React from "react";

function Menu({ photos, description }) {
  return (
    <div className="flex flex-col items-center mt-10">
      <img src={photos} className="w-24 h-24 m-5 rounded-full " />
      <h1 className="font-semibold text-gray-500 text-xl">{description}</h1>
    </div>
  );
}

export default Menu;
