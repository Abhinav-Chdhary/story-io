import React, { useState } from "react";

export default function BuyCandy({ progress, onUpdate }) {
  const takeUpdate = () => {
    onUpdate(3);
  };

  return (
    <div className="max-w-sm mx-auto">
      <img
        className="w-full h-auto"
        src="https://abhinav-chdhary.github.io/story-io/WalletStory/wallet5.png"
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
