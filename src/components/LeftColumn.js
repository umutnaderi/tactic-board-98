// LeftColumn.js
import React from "react";
import header from "../img/Header_B.png";
import shadow from "../img/Shadow_B.png";
import button1 from "../img/ButtonArrow_B.png";
import button2 from "../img/ButtonArrow_B.png";
import button3 from "../img/Button3_B.png";
import playerTag from "../img/TagStarter_B.png";
import playerSubTag from "../img/TagSub_B.png";

const LeftColumn = () => {
  return (
    <div className="left-column">
      <img className="header" src={header} alt="Header" />

      <div className="buttonContainer">
        <img className="button" src={button1} alt="Button 1" />
        <img className="button" src={button2} alt="Button 2" />
        <img className="button" src={button3} alt="Button 3" />
      </div>

      <div className="lineupContainer">
        <img className="shadow" src={shadow} alt="Shadow" />
        <div className="player-tag-container">
          {Array(11)
            .fill()
            .map((_, index) => (
              <div className="player-tag" key={index}>
                <img
                  className="playerTag"
                  src={playerTag}
                  alt={`Tag ${index + 1}`}
                />
                <input
                  type="text"
                  className="player-input"
                  placeholder={`Player ${index + 1}`}
                />
              </div>
            ))}
        </div>
        <div className="player-sub-tag-container">
          {Array(7)
            .fill()
            .map((_, index) => (
              <img
                className="playerTag"
                src={playerSubTag}
                alt={`Tag ${index + 1}`}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
