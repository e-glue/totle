import "../../styles/styles.scss";
import "./introduction.scss";
import SectionTop from "./components/section-top/SectionTop";
import SectionProduct from "./components/section-product/SectionProduct";
import Banner from "./components/RollingListBanner";

const Introduction = () => {
  return (
    <div className="wrap-container width">
      <SectionTop></SectionTop>
      <SectionProduct></SectionProduct>
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
    </div>
  );
};

export default Introduction;
