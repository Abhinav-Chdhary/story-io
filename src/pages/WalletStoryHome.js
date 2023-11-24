import React, { useState } from "react";
import WalletStart from "../components/WalletStory/WalletStart";
import Police from "../components/WalletStory/Police";
import BuyCandy from "../components/WalletStory/BuyCandy";
import Guilt from "../components/WalletStory/Guilt";
import Prize from "../components/WalletStory/Prize";

export default function WalletStoryHome() {
  const [progress, setProgress] = useState(0);
  const handleUpdate = (newValue) => {
    setProgress(newValue);
  };
  const slides = [
    <WalletStart progress={progress} onUpdate={handleUpdate} />,
    <Police progress={progress} onUpdate={handleUpdate} />,
    <BuyCandy progress={progress} onUpdate={handleUpdate} />,
    <Guilt progress={progress} onUpdate={handleUpdate} />,
    <Prize progress={progress} onUpdate={handleUpdate} />,
  ];
  return <div>{slides[progress]}</div>;
}
