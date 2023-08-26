import { useState } from "react";
import "../../styles/styles.scss";
import "./Features.scss";
import FeaturesTitle from "./components/features-title/FeaturesTitle";
import FeaturesContents from "./components/features-contents/FeaturesContents";

import {
  DATA_SENDING_ORDER,
  DATA_SENDING,
  DATA_COLLABORATION_ORDER,
  DATA_COLLABORATION,
  DATA_SECURITY_ORDER,
  DATA_SECURITY
} from "./data.js"



const Features = () => {
  return (
    <>
      <div className="features-container bg">
        <div className="wrap-container">
          <FeaturesTitle titleEg="Multiple Sending Options" titleKr="다양한 발송옵션" />
          <FeaturesContents data={DATA_SENDING} dataOrderList={DATA_SENDING_ORDER}/>
        </div>
      </div>
      <div className="features-container">
        <div className="wrap-container">
          <FeaturesTitle titleEg="Effective Teamwork & Collaboration" titleKr="효율적 협업 및 커뮤니케이션" />
          <FeaturesContents data={DATA_COLLABORATION} dataOrderList={DATA_COLLABORATION_ORDER} />
        </div>
      </div>
      <div className="features-container bg">
        <div className="wrap-container">
          <FeaturesTitle titleEg="Advanced Email Security" titleKr="강력한 이메일 보안" />
          <FeaturesContents data={DATA_SECURITY} dataOrderList={DATA_SECURITY_ORDER} />
        </div>
      </div>
    </>
  );
};

export default Features;
