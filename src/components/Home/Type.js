import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
        ],
        autoStart: true,
        deleteSpeed: 10000000
      }}
    />
  );
}

export default Type;
