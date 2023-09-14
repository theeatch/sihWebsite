import React from 'react';

interface CardProps {
  text: string;
}

const Card: React.FC<CardProps> = ({ text }) => {
  return (
    <div className='h-full w-full xl:h-96 xl:w-[584px] bg-white rounded-3xl shadow-2xl shadow-black hover:scale-110 duration-300 cursor-pointer'>
      <p className='max-w-xs p-12 text-4xl text-black '>{text}</p>
    </div>
  );
};

export default Card;
