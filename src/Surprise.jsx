import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Surprise = () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      <Confetti width={width} height={height} />
    </div>
  );
};

export default Surprise;
