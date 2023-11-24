import React, { useState } from "react";

export default function CandyStart({ progress, onUpdate }) {
  const [localProgress, setlocalProgress] = useState(progress);
  const updateParentState = () => {
    onUpdate(localProgress + 1);
  };
  return <button onClick={updateParentState}>CandyStart</button>;
}
