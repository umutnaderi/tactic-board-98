// MainComponent.js
import React from "react";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const MainComponent = () => {
  return (
    <div className="container">
      <LeftColumn />
      <RightColumn />
    </div>
  );
};

export default MainComponent;
