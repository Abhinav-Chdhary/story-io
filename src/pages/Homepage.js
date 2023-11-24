import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="flex flex-wrap justify-center items-center p-4">
      <Link to="/walletstory">
        <div className="max-w-sm mx-2 my-4 rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-64 object-cover"
            src="https://abhinav-chdhary.github.io/story-io/WalletIcon.png"
            alt="Card"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Wallet Story</div>
            <p className="text-gray-700 text-base">A story of a lost wallet</p>
          </div>
        </div>
      </Link>
      <Link to="/candystory">
        <div className="max-w-sm mx-2 my-4 rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-64 object-cover"
            src="https://abhinav-chdhary.github.io/story-io/CandyIcon.png"
            alt="Card"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Candy Story</div>
            <p className="text-gray-700 text-base">A story about a stranger</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
