import React, { useState } from "react";
import Surprise from "./Surprise";
import BirthdayCard from "./birthdayCard";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="h-screen flex justify-center items-center bg-blue-100">
      {isVisible ? (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
          onClick={() => setIsVisible(false)}
        >
          Happy Birthday!
        </button>
      ) : (
        <>
          <div className=" flex flex-col items-center space-y-5">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold">Alles Gute zum Geburtstag!</h1>
              <h1 className="text-2xl font-bold"> Sascha </h1>
            </div>
            <BirthdayCard />
          </div>
          <Surprise />
        </>
      )}
    </div>
  );
}

export default App;
