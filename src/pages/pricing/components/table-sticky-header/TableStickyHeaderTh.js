import "./tableStickyHeader.scss";

const TableStickyHeaderTh = ({ headerData, isToggle }) => {
  const { name, monthlyPrice, yearlyPrice } = headerData;

  return (
    <th className="table-sticky-th">
      <p className="table-title-en">{name}</p>
      <p className="table-title-price">
        {isToggle ? monthlyPrice[0] : yearlyPrice[0]}원/
        {isToggle ? monthlyPrice[1] : yearlyPrice[1]}
      </p>
    </th>
  );
};

export default TableStickyHeaderTh;
