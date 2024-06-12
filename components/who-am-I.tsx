"use client";

import Typewriter from "typewriter-effect";

const WhoAmI = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .pauseFor(500)
          .typeString("Clément DUNGLER")
          .pauseFor(2500)
          .deleteAll()
          .typeString("Résponsable R&D")
          .pauseFor(2500)
          .deleteAll()
          .typeString("Architecte frontend")
          .pauseFor(2500)
          .deleteAll()
          .typeString("Développeur logiciel")
          .pauseFor(2500)
          .deleteAll()
          .start();
      }}
      options={{
        cursorClassName: "text-foreground",
      }}
    />
  );
};

export default WhoAmI;
