import React from "react";
import image1 from "../Images/euro2020.jpg";

const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen font-sans">
      <img src={image1} alt="" className="img h-full rounded mb-20 shadow" />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl">Egg muffin</h2>
      </div>
    </div>
  );
};

export default Content;
