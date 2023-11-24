import React, { useState } from "react";

export default function CandyStart({ progress, onUpdate }) {
  const takeUpdate = () => {
    onUpdate(1);
  };
  const notTakeUpdate = () => {
    onUpdate(3);
  };
  return (
    <div>
      <img src="/CandyStory/Candy1.png" alt="..." />
      <button onClick={takeUpdate}>Take</button>
      <button onClick={notTakeUpdate}>Not Take</button>
    </div>
  );
}
