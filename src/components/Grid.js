import React from "react";
import Draggable from "react-draggable";
import "../Grid.css";

const Grid = ({ players, setPlayers }) => {
  const handleDrag = (e, ui) => {
    // Handle drag events here if needed
  };

  const initialPositions = [
    { x: 235, y: 810 },
    { x: 191, y: 647 },
    { x: 100, y: 100 },
    // ... add more positions as needed
  ];

  return (
    <div>
      {players.map((player, index) => (
        <Draggable
          key={index}
          axis="both"
          handle=".draggable-handle"
          defaultPosition={initialPositions[index]}
          onDrag={handleDrag}
        >
          <div className={`draggable-element player-${index}`}>
            <div className="draggable-handle" id={`player-${index}`}>
              {player.name}
            </div>
            {/* Your content goes here */}
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default Grid;
