import React from "react";

export default function WalletStart({ progress, onUpdate }) {
  const takeWalletUpdate = () => {
    onUpdate(2);
  };
  const reportUpdate = () => {
    onUpdate(1);
  };
  return (
    <div className="max-w-sm mx-auto">
      <img
        className="w-full h-auto"
        src="https://abhinav-chdhary.github.io/story-io/WalletStory/wallet1.png"
        alt="Candy"
      />

      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={takeWalletUpdate}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Take the money and buy candy
        </button>
        <button
          onClick={reportUpdate}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Report lost wallet
        </button>
      </div>
    </div>
  );
}
