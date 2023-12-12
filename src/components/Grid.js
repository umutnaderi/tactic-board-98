import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import "../Grid.css";

const Grid = ({ players, setPlayers, playerNumbers }) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawnLines, setDrawnLines] = useState([]);
  const [currentLine, setCurrentLine] = useState([]);

  const handleDrag = (e, ui) => {
    // Handle drag events here if needed
  };

  const handleMouseDown = (e, index) => {
    if (e.nativeEvent.which === 3) {
      // Right mouse button clicked
      e.preventDefault(); // Prevent the context menu from appearing
      setIsDrawing(true);
      setCurrentLine([{ x: e.clientX, y: e.clientY }]);
    }
  };

  const handleMouseMove = (e) => {
    if (isDrawing) {
      setCurrentLine([...currentLine, { x: e.clientX, y: e.clientY }]);
    }
  };

  const handleMouseUp = () => {
    if (isDrawing) {
      setDrawnLines([...drawnLines, currentLine]);
      setCurrentLine([]);
      setIsDrawing(false);
    }
  };

  const handleContextMenu = (e) => {
    if (isDrawing) {
      e.preventDefault(); // Prevent the context menu from appearing while drawing
    }
  };

  const initialPositions442 = [
    { x: 260, y: 790 }, //GK
    { x: 515, y: 660 }, //RB
    { x: 350, y: 660 }, //RCB
    { x: 180, y: 660 }, //LCB
    { x: 15, y: 660 }, //LB
    { x: 515, y: 410 }, //RM
    { x: 345, y: 410 }, //RCM
    { x: 175, y: 410 }, //LCM
    { x: 15, y: 410 }, //LM
    { x: 335, y: 110 }, //RS
    { x: 185, y: 110 }, //LS

    // ... add more positions as needed
  ];

  const extractSurname = (fullName) => {
    const parts = fullName.split(" ");
    // Assuming the last part is the surname
    return parts.length > 1 ? parts[parts.length - 1] : fullName;
  };

  useEffect(() => {
    const handleContextMenu = (e) => {
      // Prevent the default context menu from appearing
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []); // Add this effect to handle the right mouse click globally

  return (
    <div onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      {players.slice(0, 11).map((player, index) => (
        <Draggable
          key={index}
          axis="both"
          grid={[85, 50]}
          handle=".draggable-handle"
          defaultPosition={initialPositions442[index]}
          bounds={{ left: 15, top: 0, right: 515, bottom: 800 }}
          onDrag={handleDrag}
        >
          <div
            className={`draggable-element player-${index}`}
            onMouseDown={(e) => handleMouseDown(e, index)}
          >
            <div className="draggable-handle" id={`player-${index}`}>
              <span style={{ color: "yellow" }}>{playerNumbers[index]}</span>
              <br />
              {extractSurname(players[index].name)}
            </div>
            {/* Your content goes here */}
          </div>
        </Draggable>
      ))}
      {isDrawing &&
        drawnLines.map((line, index) => (
          <svg key={index} style={{ position: "absolute", zIndex: 1000 }}>
            {line.map((point, i) => (
              <circle key={i} cx={point.x} cy={point.y} r="3" fill="red" />
            ))}
            <path
              d={`M${line.map((point) => `${point.x} ${point.y}`).join("L")}`}
              stroke="red"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
          </svg>
        ))}
    </div>
  );
};

export default Grid;
