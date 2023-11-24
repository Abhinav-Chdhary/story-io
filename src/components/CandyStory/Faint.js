import React from "react";

export default function Faint({ progress, onUpdate }) {
  const takeUpdate = () => {
    onUpdate(2);
  };
  return (
    <div className="max-w-sm mx-auto">
      <img
        className="w-full h-auto"
        src="https://abhinav-chdhary.github.io/story-io/CandyStory/Candy2.png"
        alt="..."
      />
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={takeUpdate}
      >
        Next
      </button>
    </div>
  );
}
