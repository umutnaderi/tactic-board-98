// MainComponent.js
import React, { useEffect, useState } from "react";
import LineupAndField from "./LineupAndField";
import "../styles.css";

const MainComponent = () => {
  return (
    <div className="main-container">
      <div className="bg-image">
        <div className="navigation">
          <header>
            <nav class="navbar">
              <ul class="nav-list">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <div className="container">
          <LineupAndField />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
