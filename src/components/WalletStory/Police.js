import React from "react";

export default function Police({ progress, onUpdate }) {
  const takeUpdate = () => {
    onUpdate(4);
  };

  return (
    <div className="max-w-sm mx-auto">
      <img
        className="w-full h-auto"
        src="https://abhinav-chdhary.github.io/story-io/WalletStory/wallet2.png"
        alt="Candy"
      />

      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={takeUpdate}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next
        </button>
      </div>
    </div>
  );
}
