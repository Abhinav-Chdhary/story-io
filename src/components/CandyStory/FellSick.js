import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FellSick({ progress, onUpdate }) {
  const takeUpdate = () => {
    onUpdate(0);
  };
  return (
    <div>
      <img src="/CandyStory/Candy3.png" alt="..." />
      <button onClick={takeUpdate}>Try Again</button>
      <Link to="/">
        <button>Back to Menu</button>
      </Link>
    </div>
  );
}
