import React, { useState } from "react";

export default function GoHome({ progress, onUpdate }) {
  const takeUpdate = () => {
    onUpdate(4);
  };
  return (
    <div>
      <img src="/CandyStory/Candy4.png" alt="..." />
      <button onClick={takeUpdate}>Next</button>
    </div>
  );
}
