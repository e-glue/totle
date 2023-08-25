import "./sectionCustomer.scss";
import Banner from "../rolling-list-banner/RollingListBanner";

const SectionCustomer = () => {
  return (
    <div className="customer-wrapper">
      <div className="customer-text">
        전세계 <span className="t1">165,000명 이상의</span>
        <br />
        <span className="t2">개인 및 기업 사용자</span>가 사용 중 입니다.
      </div>
      <div className="customer-banner">
        <Banner></Banner>
      </div>
    </div>
  );
};

export default SectionCustomer;
