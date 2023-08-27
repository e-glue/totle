import "./FeaturesTab.scss";

const FeaturesTab = ({ data, dataOrderList, selected, setSelected }) => {
  
  return (
    <>
    <div className="button-container">
      {dataOrderList.map((key) => (
        <div 
        className={`button ${selected == key ? "selected" : ""}`} 
        onClick={() => {setSelected(key)}}
      >
        {data[key].title}
      </div>
      ))}
    </div>

    </>
  );
};

export default FeaturesTab;