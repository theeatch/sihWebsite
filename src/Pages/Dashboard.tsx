import { getAuth, signOut } from "firebase/auth";
import React from "react";

const Dashboard: React.FC = () => {
  const auth = getAuth();

  return (
    <div className="h-screen flex flex-col justify-center item-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Word of the Day</h2>
          <p>Meaning of the given Word of the Day maybe?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Read!</button>
          </div>
        </div>
      </div>
      <div className="text-7xl text-black ">
        Should be protected by Firebase
      </div>
      <button onClick={() => signOut(auth)}>Sign out of Auth</button>
    </div>
  );
};

export default Dashboard;
