import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import react from "react";
import React, { useRef } from "react";
import { useState } from "react";
import starterArray from "./starterArray";
import EditableText from "./EditableText";
import subArray from "./subArray";
import { Component } from "react";
import { listFormation } from "./listFormation";

function App() {
  const [count, setCount] = useState(1);

  const [buttonArrow, setButtonArrow] = useState("option-button-1");
  const [buttonArrow2, setButtonArrow2] = useState("option-button-2");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMouseDown1, setIsMouseDown1] = useState(false);

  //BUTTON-1
  const handleMouseDownArrowButton = () => {
    setButtonArrow("option-arrow-button-pressed");
    const nextIndex = (currentIndex + 1) % listFormation.length;
    setCurrentIndex(nextIndex);
    setIsMouseDown1(true);
    console.log("onclick");
  };
  const handleMouseUpArrowButton = () => {
    setButtonArrow("option-button-1");
    setIsMouseDown1(false);
  };
  //BUTTON-2
  const handleMouseDownArrowButton2 = () => {
    setButtonArrow2("option-arrow-button-pressed-2");
    setIsMouseDown(true);
    console.log("onclick2");
  };
  const handleMouseUpArrowButton2 = () => {
    setButtonArrow2("option-button-2");
    setIsMouseDown(false);
  };

  return (
    <div className="page">
      <div class="scaled-wrapper" scale>
        <div className="body">
          <div className="banner">
            <div className="bannerText">
              <EditableText text="Italy 1994" />
            </div>
          </div>
          <div
            className={buttonArrow}
            onMouseDown={handleMouseDownArrowButton}
            onMouseUp={handleMouseUpArrowButton}
            style={{
              padding: isMouseDown1 ? "2px" : "0px",
              marginLeft: isMouseDown1 ? "3px" : "0px",
            }}
          >
            <div className="formation-text">{listFormation[currentIndex]}</div>
          </div>
          <div
            className={buttonArrow2}
            onMouseDown={handleMouseDownArrowButton2}
            onMouseUp={handleMouseUpArrowButton2}
          >
            <div
              className="button-text"
              onMouseDown={handleMouseDownArrowButton2}
              onMouseUp={handleMouseUpArrowButton2}
              style={{
                padding: isMouseDown ? "2px" : "0px",
                marginLeft: isMouseDown ? "3px" : "0px",
              }}
            >
              Change Background
            </div>
          </div>
          <div className="option-button-3" />
          <div className="dark-bg">
            <div>
              <div className="player-name-1">
                <EditableText text="Gianluca Pagliuca" />
              </div>
              <div className="player-name-2">
                <EditableText text="Roberto Mussi" />
              </div>
              <div className="player-name-3">
                <EditableText text="Franco Baresi" />
              </div>
              <div className="player-name-4">
                <EditableText text="Paolo Maldini" />
              </div>
              <div className="player-name-5">
                <EditableText text="Antonio Benarrivo" />
              </div>
              <div className="player-name-6">
                <EditableText text="Nicola Berti" />
              </div>
              <div className="player-name-7">
                <EditableText text="Dino Baggio" />
              </div>
              <div className="player-name-8">
                <EditableText text="Demetrio Albertini" />
              </div>
              <div className="player-name-9">
                <EditableText text="Roberto Donadoni" />
              </div>
              <div className="player-name-10">
                <EditableText text="Roberto Baggio" />
              </div>
              <div className="player-name-11">
                <EditableText text="Daniele Massaro" />
              </div>
              <div className="player-name-12">
                <EditableText text="Luigi Apolloni" />
              </div>
              <div className="player-name-13">
                <EditableText text="Alberico Evani" />
              </div>
              <div className="player-name-14">
                <EditableText text="Antonio Conte" />
              </div>
              <div className="player-name-15">
                <EditableText text="Giuseppe Signori" />
              </div>
              <div className="player-name-16">
                <EditableText text="Gianfranco Zola" />
              </div>

              {starterArray.map((name, i) => (
                <div className={name}>
                  <div className={`player-number-${i + 1}`}>
                    <EditableText text={count + i} />
                  </div>
                </div>
              ))}
            </div>
            <div>
              {subArray.map((name, i) => (
                <div className={name}>
                  <div className={`player-number-${i + 11}`}>
                    <EditableText text={count + i + 11} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pitch"></div>
        </div>

        <div class="bg-overlay" />
        <div class="bg-image" />
      </div>
    </div>
  );
}

function TextArea(props) {
  const [text, setText] = useState("Player Name");
  const fieldTextArea = useRef(null);
  const handleUpperClick = () => {
    let newText = text;
    fieldTextArea.current.value = newText;
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <div className="list-text-box">
        Player Name
        <textarea
          name=""
          id="myBox"
          value={text}
          onChange={handleOnChange}
          cols="30"
          rows="10"
          className="form-control"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperClick}>
        Convert to Upper Case
      </button>
      <div className="field-text-area">
        <label htmlFor="myBox" className="form-label">
          Player-Name
        </label>
        <textarea
          name=""
          id="myBox"
          cols="30"
          rows="10"
          ref={fieldTextArea}
          className="form-control"
        ></textarea>
      </div>
    </div>
  );
}

export default App;
