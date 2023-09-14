import React from "react";
import Card from "../components/Card";

const CardHome: React.FC = () => {
  const textinsidecard = "A sample flashcard learning side wala";
  return (
    <div className=" flex flex-col xl:flex-row w-full h-screen justify-between bg-[#586F7C] text-white px-36">
      <div className=" h-full my-auto max-w-lg flex flex-col py-4 justify-center gap-8 ">
        <h1 className="text-7xl max-w-lg font-semibold">
          Practice until you learn it with{" "}
          <span className="text-[#e7634b]">F</span>lash
          <span className="text-[#e7634b]">F</span>lip
        </h1>
        <p className="text-3xl">
          Bored of Learning through books and boring flashcards? Introducing
          FlashFlip, which will help you learn Phonics.{" "}
        </p>
        <button className="bg-[#e7634b] text-xl font-semibold py-2 px-6 rounded-3xl max-w-[150px] text-black hover:scale-125 duration-300 hover:shadow-2xl shadow-white hover:border-b-4 border-white">
          {" "}
          Start Now
        </button>
      </div>

      <div className="flex items-center h-full w-auto ">
        <Card text={textinsidecard} />
      </div>
    </div>
  );
};

export default CardHome;
