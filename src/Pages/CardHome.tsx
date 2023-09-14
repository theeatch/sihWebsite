import React from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const CardHome: React.FC = () => {
  const nav = useNavigate();

  const textinsidecard = "A sample flashcard with word and the meaning";
  const cardtitle="Word to Learn";
  return (
    <div className=" flex flex-col xl:flex-row w-full h-screen justify-between bg-[#586F7C] text-white px-36">
      <div className="flex flex-col justify-center h-full max-w-lg gap-8 py-4 my-auto ">
        <h1 className="max-w-lg font-semibold text-7xl">
          Practice until you learn it with{" "}
          <span className="text-[#e7634b]">F</span>lash
          <span className="text-[#e7634b]">F</span>lip
        </h1>
        <p className="text-3xl">
          Bored of Learning through books and boring flashcards? Introducing
          FlashFlip, which will help you learn Phonics.{" "}
        </p>
        <button onClick={() => nav('/CardActivity')} className="bg-[#e7634b] text-xl font-semibold py-2 px-6 rounded-3xl max-w-[150px] text-black hover:scale-125 duration-300 hover:shadow-2xl shadow-white hover:border-b-4 border-white">
          {" "}
          Start Now
        </button>
      </div>

      <div className="flex items-center w-auto h-full ">
        <Card text={textinsidecard} title={cardtitle}/>
      </div>
    </div>
  );
};

export default CardHome;
