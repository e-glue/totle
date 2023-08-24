import "./planBox.scss";
import Button from "../button/Button";
import { useButtonLinkHandler } from "../../utills/useButtonLinkHandler";

const PlanBox = ({ planData, isToggle }) => {
  const {
    name,
    nameKr,
    monthlyPrice,
    yearlyPrice,
    buttonTitle,
    buttonDesign,
    buttonLink,
    featuresTitle,
    features,
  } = planData;
  
  return (
    <div className="plan-box">
      <hgroup className="plan-title-group">
        <h3 className="plan-title-en">{name}</h3>
        <p className="plan-title-kr">{nameKr}</p>
      </hgroup>
      <div className="plan-price">
        <p className="person">사용자 당</p>
        <p className="by-period">
          <span>{isToggle ? monthlyPrice[0] : yearlyPrice[0]}</span> 원/
          {isToggle ? monthlyPrice[1] : yearlyPrice[1]}
        </p>
        <p className="by-period-month">{isToggle ? "" : yearlyPrice[2]}</p>
      </div>
      <Button
        className="rounded-button"
        size="lg"
        design={buttonDesign}
        onClick={useButtonLinkHandler(buttonLink)}
      >
        {buttonTitle}
      </Button>
      <div className="plan-feat-wrapper">
        <p className="plan-feat-title">{featuresTitle}</p>
        <ul className="plan-feat">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanBox;
