import React from "react";

const Home: React.FC = () => {
  return (
    <div className="h-screen items-center flex w-full">
      <div className="w-1/2 h-full flex flex-col justify-center items-center text-white bg-[#e7634b] gap-10">
        <h1 className="text-6xl border-2 border-white px-24 justify-start">Flash Flip</h1>
        <p className="text-3xl">Explore our interactive Card Games</p>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center text-[#e7634b] bg-white gap-10">
        <h1 className="text-6xl border-2 border-[#e7634b] px-24 justify-start">Activites</h1>
        <p className="text-3xl">Explore Fun Activites</p>
      </div>
    </div>
  );
};

export default Home;
