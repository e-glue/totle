import "./tableStickyHeader.scss";
import TableStickyHeaderTh from "./TableStickyHeaderTh";
import TableStickyHeaderTd from "./TableStickyHeaderTd";

const TableStickyHeader = ({ headerData, isToggle }) => {
  return (
    <div className="table-sticky-header">
      <table className="pricing-sticky-table">
        <thead>
          <tr>
            <th></th>
            {headerData.map((data) => (
              <TableStickyHeaderTh
                headerData={data}
                isToggle={isToggle}
                key={data.name}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            {headerData.map((data) => (
              <TableStickyHeaderTd headerData={data} key={data.name} />
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableStickyHeader;
