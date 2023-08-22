import "../../styles/styles.scss";
import "./introduction.scss";
import Banner from "./components/Banner"

const Introduction = () => {
  return (
    <div className="wrap-container width">
      <div className="top-wrapper">
        <div className="title-wrapper">
          <div className="introduce-table">
            <p className="text-top">아웃룩을 새롭게</p>
            <p className="text-bottom">더 가치 있게 </p>
            <span>토틀은 Outlook에서 부족한 부분들을 채워주는<br/>
            올인원 아웃룩 애드인 솔루션입니다.</span>
          </div>
          <div className="email-table">
            <input className="email-input" placeholder="이메일 주소를 입력해주세요."></input>
            <button className="email-button">계정 생성하기</button>
            <p className="email-text">무료 계정을 생성해 토틀의 다양한 기능을 활용해보세요!</p>
          </div>
          <div className="subscribe">
          → 토틀 구독하기
          </div>
        </div>
        <div className="video-wrapper">
        <video src="https://haoriented.wistia.com/medias/4pzjgbcafvwvideo=4pzjgbcafv"
        controls className="play-video"/>
        </div>
      </div>

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
          <iframe class="totle-storylane" src="https://totle.storylane.io/share/rsg6yhadwehm" allow="fullscreen; camera; microphone"></iframe>
        </div>
      </div>

      <div className="customer-wrapper">
        <div className="customer-text">
          전세계 <span className="t1">165,000명 이상의</span><br/>
          <span className="t2">개인 및 기업 사용자</span>가 사용 중 입니다.
        </div>
        <div className="customer-banner">
          <Banner></Banner>
        </div>
      </div>
    </div>
  )
};

export default Introduction;
