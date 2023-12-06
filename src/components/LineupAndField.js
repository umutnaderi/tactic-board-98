// LeftColumn.js
import React, { useState, useEffect } from "react";
import header from "../img/Header_B.png";
import shadow from "../img/Shadow_B.png";
import button1 from "../img/ButtonArrow_B.png";
import button1Pressed from "../img/ButtonArrowPressed_B.png";
import button2 from "../img/ButtonArrow_B.png";
import button2Pressed from "../img/ButtonArrowPressed_B.png";
import button3 from "../img/Button3_B.png";
import button3Pressed from "../img/Button3Pressed_B.png";
import playerTag from "../img/TagStarter_B.png";
import playerSubTag from "../img/TagSub_B.png";
import fieldImg from "../img/Field_B.png";
import brazil from "../preset/Brazil.txt";
import italy from "../preset/Italy.txt";
import spain from "../preset/Spain.txt";

const LineupAndField = () => {
  //PRESET LINEUP
  const files = [brazil, italy, spain];
  //BUTTONS
  const [button1Src, setButton1Src] = useState(button1); // Initial Src
  const button1AltSrc = button1Pressed; // Alternative Src

  const [button2Src, setButton2Src] = useState(button2); // Initial Src
  const button2AltSrc = button2Pressed; // Alternative Src

  const [button3Src, setButton3Src] = useState(button3); // Initial Src
  const button3AltSrc = button3Pressed; // Alternative Src

  const [players, setPlayers] = useState([]);

  const handleMouseDownButton1 = () => {
    setButton1Src(button1AltSrc); // Change to the alternative image
  };

  const handleMouseUpButton1 = () => {
    setButton1Src(button1); // Revert to the original image
  };

  const handleMouseDownButton2 = () => {
    setButton2Src(button2AltSrc); // Change to the alternative image
  };

  const handleMouseUpButton2 = () => {
    setButton2Src(button2); // Revert to the original image
  };

  const handleMouseDownButton3 = () => {
    setButton3Src(button3AltSrc); // Change to the alternative image
  };

  const handleMouseUpButton3 = () => {
    setButton3Src(button3); // Revert to the original image
  };

  const toggleButton1Image = () => {
    setButton1Src((currentSrc) =>
      currentSrc === button1 ? button1AltSrc : button1
    );
  };

  const toggleButton2Image = () => {
    setButton2Src((currentSrc) =>
      currentSrc === button2 ? button2AltSrc : button2
    );
  };

  const randomFile = () => {
    const randomIndex = Math.floor(Math.random() * files.length);
    return files[randomIndex];
  };

  const [placeholders, setPlaceholders] = useState([]);

  useEffect(() => {
    const filePath = randomFile();
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => {
        setPlaceholders(text.split("\n")); // Assuming each placeholder is on a new line
      });
  }, []);

  useEffect(() => {
    // Initialize players with placeholders
    if (placeholders.length > 0) {
      setPlayers(
        placeholders.map((placeholder, index) => ({
          name: "",
          number: index + 1,
          placeholder: placeholder,
        }))
      );
    }
  }, [placeholders]);

  const handleDragStart = (index) => (event) => {
    event.dataTransfer.setData("text/plain", index);
  };

  const handleDrop = (index) => (event) => {
    event.preventDefault();
    const draggedIndex = event.dataTransfer.getData("text");
    const playersCopy = [...players];
    [playersCopy[index], playersCopy[draggedIndex]] = [
      playersCopy[draggedIndex],
      playersCopy[index],
    ];
    setPlayers(playersCopy);
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  return (
    <div className="lineup-and-field-container">
      <div className="config">
        <div className="header-wrapper">
          <img className="header" src={header} alt="Header" />
          <input type="text" className="header-input" placeholder="Team Name" />
        </div>

        <div className="buttonContainer">
          <img
            className="button"
            src={button1Src}
            alt="Button 1"
            onMouseDown={handleMouseDownButton1}
            onMouseUp={handleMouseUpButton1}
            // It's good to handle onBlur to revert the image when focus is lost
            onBlur={handleMouseUpButton1}
          />
          <img
            className="button"
            src={button2Src}
            alt="Button 2"
            onMouseDown={handleMouseDownButton2}
            onMouseUp={handleMouseUpButton2}
            // It's good to handle onBlur to revert the image when focus is lost
            onBlur={handleMouseUpButton2}
          />
          <img
            className="button"
            src={button3Src}
            alt="Button 3"
            onMouseDown={handleMouseDownButton3}
            onMouseUp={handleMouseUpButton3}
            // It's good to handle onBlur to revert the image when focus is lost
            onBlur={handleMouseUpButton3}
          />
        </div>

        <div className="lineupContainer">
          <div className="shadow-image" id="shadow">
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
                  </div>
                ))}
            </div>
            <div className="player-sub-tag-container">
              {Array(7)
                .fill()
                .map((_, index) => (
                  <div className="player-sub-tag" key={index}>
                    <img
                      className="playerSubTag"
                      src={playerSubTag}
                      alt={`Tag ${index + 1}`}
                    />
                  </div>
                ))}
            </div>
            <div className="player-input-container">
              {players.map((player, index) => (
                <input
                  type="text"
                  className="player-input"
                  placeholder={player.placeholder || `Player ${index + 1}`}
                  value={player.name}
                  onChange={(e) => {
                    const newPlayers = [...players];
                    newPlayers[index].name = e.target.value;
                    setPlayers(newPlayers);
                  }}
                  draggable
                  onDragStart={handleDragStart(index)}
                  onDrop={handleDrop(index)}
                  onDragOver={allowDrop}
                />
              ))}
            </div>
            <div className="player-number-container">
              {players.map((player, index) => (
                <input
                  type="text"
                  className="player-number"
                  placeholder={`${index + 1}`}
                  value={player.number}
                  onChange={(e) => {
                    const newPlayers = [...players];
                    newPlayers[index].number = e.target.value;
                    setPlayers(newPlayers);
                  }}
                  onDragStart={handleDragStart(index)}
                  onDrop={handleDrop(index)}
                  onDragOver={allowDrop}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pitchContainer">
        <div className="field-image" id="field"></div>
      </div>
    </div>
  );
};

export default LineupAndField;
