import React from "react";

const ActivitySelect: React.FC = () => {
  return (
    <div className="h-screen w-full flex justify-around items-center px-36">
      <div className="card w-1/3 h-1/3 shadow-xl bg-[#e7634b] rounded-3xl hover:scale-110 duration-300 hover:border-b-2 cursor-pointer border-white ">
        <div className="card-body text-center flex flex-col justify-center items-center tracking-wide gap-6">
          <h2 className="card-title text-4xl">Phoneme Remix</h2>
          <p className="text-white text-2xl"> Unleash your wordplay creativity! Take any word, slice out a phoneme, and craft a whole new word. Click, delete, and listen as language transforms before your ears.</p>
         
        </div>
      </div>

      <div className="divider md:divider-horizontal"></div>

      <div className="card w-1/3 h-1/3 shadow-xl bg-[#e7634b] rounded-3xl hover:scale-110 duration-300 hover:border-b-2 cursor-pointer border-white ">
        <div className="card-body text-center flex flex-col justify-center items-center tracking-wide gap-6 my-auto">
          <h2 className="card-title text-4xl">Sound Shuffler</h2>
          <p className="text-white text-3xl my-auto">Rearrange phonemes like puzzle pieces to create words, enhancing linguistic skills and wordplay</p>
          
        </div>
      </div>
    </div>
  );
};

export default ActivitySelect;
