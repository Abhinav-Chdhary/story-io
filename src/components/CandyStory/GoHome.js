import React from "react";

export default function GoHome({ progress, onUpdate }) {
  const takeUpdate = () => {
    onUpdate(4);
  };
  return (
    <div className="max-w-sm mx-auto">
      <img
        className="w-full h-auto"
        src="https://abhinav-chdhary.github.io/story-io/CandyStory/candy4.png"
        alt="..."
      />
      <div className="flex justify-center space-x-4 mt-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={takeUpdate}
        >
          Next
        </button>
      </div>
    </div>
  );
}
