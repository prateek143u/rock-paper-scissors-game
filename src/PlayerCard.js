import React from "react";

const scissors = "https://i.imgur.com/pgjyhIZ.png";
const rock = "https://i.imgur.com/LghSkIw.png";
const paper = "https://i.imgur.com/2gsdqvR.png";

const PlayerCard = props => (
  <div className="playerCard">
    <img
      src={
        props.sign === "rock"
          ? rock
          : props.sign === "scissors"
          ? scissors
          : paper
      }
      alt="Rock Paper Scissors"
    />
  </div>
);

export default PlayerCard;
