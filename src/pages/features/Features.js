import { useState } from "react";
import "../../styles/styles.scss";
import "./Features.scss";
import Menubar from "./components/menu-bar/Menubar";
import Title from "./components/title/Title";

const Features = () => {
  return (
    <>
      <div className="features-container">
        <div className="wrap-container">
          <Title />
          <Menubar />
        </div>
      </div>
    </>
  );
};

export default Features;
