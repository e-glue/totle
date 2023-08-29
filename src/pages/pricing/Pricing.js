import { useState } from "react";
import "../../styles/styles.scss";
import "./pricing.scss";
import NavBar from "./components/nav-bar/NavBar";
import PlanSection from "./components/plan-section/PlanSection";
import CompareTableSection from "./components/compare-table-section/CompareTableSection";

const Pricing = () => {
  const [isToggle, setIsToggle] = useState(true);

  const onChangeToggleHandler = () => setIsToggle(!isToggle);

  return (
    <>
      <NavBar />
      <PlanSection
        onChangeToggleHandler={onChangeToggleHandler}
        isToggle={isToggle}
      />
      <CompareTableSection isToggle={isToggle} />
    </>
  );
};

export default Pricing;
