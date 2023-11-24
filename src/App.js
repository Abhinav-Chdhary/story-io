import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TitleBar from "./components/TitleBar";
import WalletStoryHome from "./pages/WalletStoryHome";
import CandyStoryHome from "./pages/CandyStoryHome";

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <TitleBar />
      <BrowserRouter basename="/story-io">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/walletstory" element={<WalletStoryHome />} />
          <Route exact path="/candystory" element={<CandyStoryHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
