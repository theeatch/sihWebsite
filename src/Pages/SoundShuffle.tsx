import React from "react";
import image from "../assets/Group 5 (1).svg";

const SoundShuffle: React.FC = () => {
  return (
    <div className="text-7xl h-screen flex items-center m-auto justify-between bg-[#586F7C] px-36">
      <div>
        <img src={image} alt="activity" className="w-[500px] h-[500px]" />
      </div>
      <div className="flex flex-col items-center gap-10">
        <h1 className="max-w-2xl justify-end tracking-wide leading-tight font-semibold text-white">
        How does it work?{" "}
          
        </h1>
        <a href="/ActivitySelect">
          <button className="p-4 bg-[#e7634b] text-white rounded-2xl text-xl mx-auto hover:scale-110 duration-300 hover:border-b-4 hover:border-white">
            Start Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default SoundShuffle;
