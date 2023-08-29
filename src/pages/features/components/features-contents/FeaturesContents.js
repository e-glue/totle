import { useState, useEffect } from "react";
import FeaturesTabContents from "../features-tab-contents/FeaturesTabContents";
import FeaturesTab from "../features-tab/FeaturesTab";
import Dropdown from "../dropdown/Dropdown";
import "./FeaturesContents.scss";

const FeaturesContents = ({ data, dataOrderList }) => {
  const [selected, setSelected] = useState(dataOrderList[0]);
  const [isMobile, setIsMobile] = useState(false);

  const mql = window.matchMedia("(max-width: 768px)");
  const onMatchQuery = (event) => {
    setIsMobile(event.matches);
  };

  useEffect(() => {
    mql.addEventListener("change", onMatchQuery);

    setIsMobile(window.outerWidth <= 768);
    return () => {
      mql.removeEventListener("change", onMatchQuery);
    };
  }, []);

  return (
    <>
      <div className="features-selector">
        {isMobile ? (
          <Dropdown
            data={data}
            dataOrderList={dataOrderList}
            selected={selected}
            setSelected={setSelected}
          />
        ) : (
          <FeaturesTab
            data={data}
            dataOrderList={dataOrderList}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      </div>
      <FeaturesTabContents data={data[selected]} />
    </>
  );
};

export default FeaturesContents;
