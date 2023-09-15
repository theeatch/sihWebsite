import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="h-screen flex w-full p-36">
      <div className="flex flex-col justify-around w-full">
        <div className="flex w-full gap-10">
          <div className="card w-[440px] h-[280px] bg-base-100 shadow-xl rounded-2xl">
            <div className="card-body gap-8" >
              <h2 className="card-title text-4xl">Word of the Day</h2>
              <p className="text-xl">Meaning of the given Word of the Day maybe?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read!</button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-3xl text-white bg-[#586F7C] rounded-2xl h-52 w-3/4 text-center p-4">
          Somehow Show Progress Here
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
