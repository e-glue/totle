import "./tableStickyHeader.scss";
import { useButtonLinkHandler } from "../../utills/useButtonLinkHandler";
import Button from "../button/Button";

const TableStickyHeaderTd = ({ headerData }) => {
  const { buttonTitle, buttonLink } = headerData;

  return (
    <td>
      <Button
        className="rounded-button"
        size="sm"
        design="lined"
        onClick={useButtonLinkHandler(buttonLink)}
      >
        {buttonTitle}
      </Button>
    </td>
  );
};

export default TableStickyHeaderTd;
