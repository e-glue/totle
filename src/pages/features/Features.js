import { useState } from "react";
import "../../styles/styles.scss";
import "./Features.scss";
import FeaturesTitle from "./components/features-title/FeaturesTitle";
import FeaturesContents from "./components/features-contents/FeaturesContents";

const Features = () => {
  return (
    <>
      <div className="features-container">
        <div className="wrap-container">
          <FeaturesTitle />
          <FeaturesContents />
        </div>
      </div>
    </>
  );
};

export default Features;
