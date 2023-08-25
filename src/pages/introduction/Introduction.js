import "../../styles/styles.scss";
import "./introduction.scss";
import SectionTop from "./components/section-top/SectionTop";
import Banner from "./components/RollingListBanner";

const Introduction = () => {
  return (
    <div className="wrap-container width">
      <SectionTop></SectionTop>
      <div className="product-wrapper">
        <div className="product-text">
          <p className="t1">Product Tour 👇</p>
          <p className="t2">
            토틀의
            <span className="t2-1"> 주요 기능을</span>
            <span className="t2-2"> 직접 경험</span>
            해보세요!
          </p>
        </div>
        <div className="product-frame">
          <div className="frame-wrapper">
            <div className="frame">
              <iframe
                src="https://totle.storylane.io/demo/rsg6yhadwehm"
                allow="fullscreen; camera; microphone"
                className="frame-embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

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
