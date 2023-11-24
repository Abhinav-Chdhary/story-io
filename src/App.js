import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TitleBar from "./components/TitleBar";

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <TitleBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
