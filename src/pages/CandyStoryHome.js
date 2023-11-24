import React, { useState } from "react";
import CandyStart from "../components/CandyStory/CandyStart";
import Faint from "../components/CandyStory/Faint";
import FellSick from "../components/CandyStory/FellSick";
import GoHome from "../components/CandyStory/GoHome";
import ProudMom from "../components/CandyStory/ProudMom";

export default function CandyStoryHome() {
  const [progress, setProgress] = useState(0);
  const handleUpdate = (newValue) => {
    setProgress(newValue);
  };
  const slides = [
    <CandyStart progress={progress} onUpdate={handleUpdate} />,
    <Faint progress={progress} onUpdate={handleUpdate} />,
    <FellSick progress={progress} onUpdate={handleUpdate} />,
    <GoHome progress={progress} onUpdate={handleUpdate} />,
    <ProudMom progress={progress} onUpdate={handleUpdate} />,
  ];
  return <div>{slides[progress]}</div>;
}
