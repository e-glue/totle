import { useState } from "react";
import FeaturesTabContents from "../features-tab-contents/FeaturesTabContents";
import FeaturesTab from "../features-tab/FeaturesTab";
import "./FeaturesContents.scss";
import featureData from "../../Data.js";

const FeaturesContents = () => {
  const [selected, setSelected] = useState("bigFile");

  return (
    <>
      <FeaturesTab selected={selected} setSelected={setSelected} />
      <FeaturesTabContents data={featureData[selected]} />
    </>
  );
};

export default FeaturesContents;
