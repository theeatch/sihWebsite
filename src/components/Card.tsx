import React from "react";

interface CardProps {
  text: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ text, title }) => {
  return (
    <div className="h-full w-full xl:h-96 xl:w-[584px] bg-white rounded-3xl shadow-2xl shadow-black hover:scale-110 duration-300 cursor-pointer">
      <h1 className="text-black text-5xl p-12">{title}</h1>
      <p className="max-w-md p-4 px-12 text-4xl text-black ">{text}</p>
    </div>
  );
};

export default Card;
