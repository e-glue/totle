import "./Dropdown.scss";

const Dropdown = ({ data, dataOrderList, selected, setSelected }) => {
  return (
    <>
    <div className="dropdown-container">
      <select className="featuresSelect" value={selected} onChange={(e) => setSelected(e.target.value)}>
      {
        dataOrderList.map((key) => (<option value={key}>{data[key].title}</option>))
      }
      </select>
    </div>
    </>
  );
};

export default Dropdown;