import React, { useState } from "react";

export default function Faint({ progress, onUpdate }) {
  const takeUpdate = () => {
    onUpdate(2);
  };
  return (
    <div>
      <img src="/CandyStory/Candy2.png" alt="..." />
      <button onClick={takeUpdate}>Next</button>
    </div>
  );
}
