import "../../../../styles/styles.scss";
import "./compareTableSection.scss";
import SectionTitle from "../section-title/SectionTitle";
import TableStickyHeader from "../table-sticky-header/TableStickyHeader";
import TablePricing from "../table-pricing/TablePricing";

const SECTION_TITLE = {
  title: "구독요금 비교하기",
  subTitle: "",
};

const TABLE_HEADER_DATA = [
  {
    name: "FREE",
    monthlyPrice: ["0", "월"],
    yearlyPrice: ["0", "월"],
    buttonTitle: "무료로 시작",
    buttonLink: "http://www.totlelab.com/download",
  },
  {
    name: "PERSONAL",
    monthlyPrice: ["5,000", "월"],
    yearlyPrice: ["50,000", "1년"],
    buttonTitle: "구독하기",
    buttonLink: "https://smartstore.naver.com/egluecloud/products/7082495548",
  },
  {
    name: "BUSINESS",
    monthlyPrice: ["12,000", "월"],
    yearlyPrice: ["120,000", "1년"],
    buttonTitle: "문의하기",
    buttonLink: () => {
      window.SITE.openModalMenu(
        "m20230626f81957238baca",
        "m202208314139bd26c9a3e",
      );
    },
  },
  {
    name: "ENTERPRISE",
    monthlyPrice: ["15,000", "월"],
    yearlyPrice: ["150,000", "1년"],
    buttonTitle: "문의하기",
    buttonLink:
      "https://forms.office.com/Pages/ResponsePage.aspx?id=QnzjJCmrKUikD9_iXXV2VrxAedWlGPhPk-ftShcpvVBUOUNTTUhBRjFGUlBXRzhZQzU2U1cwUDNUWS4u",
  },
];

const CompareTableSection = ({ isToggle }) => {
  return (
    <section className="pricing-container compare-wrapper">
      <div className="wrap-container width-1130">
        <SectionTitle titleData={SECTION_TITLE} />
        <article className="table-wrapper">
          <TableStickyHeader
            headerData={TABLE_HEADER_DATA}
            isToggle={isToggle}
          />
          <TablePricing />
        </article>
      </div>
    </section>
  );
};

export default CompareTableSection;
