import React from "react";
import { Link } from "react-router-dom";

export default function FellSick({ progress, onUpdate }) {
  const takeUpdate = () => {
    onUpdate(0);
  };
  return (
    <div className="max-w-sm mx-auto">
      <img
        className="w-full h-auto"
        src="https://abhinav-chdhary.github.io/story-io/CandyStory/Candy3.png"
        alt="..."
      />
      <div className="flex justify-center space-x-4 mt-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={takeUpdate}
        >
          Try Again
        </button>
        <Link to="/">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Back to Menu
          </button>
        </Link>
      </div>
    </div>
  );
}
