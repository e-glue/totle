import "./sectionTop.scss";
import { useState } from "react";
import WistiaPlayer from "../wistia-player/WistiaPlayer";

const SectionTop = () => {
  const [userEmail, setUserEmail] = useState();

  const checkEmail = () => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regExp.test(userEmail);
  };

  const buttonHandler = (e) => {
    if (!checkEmail()) {
      alert("이메일 형식이 올바르지 않습니다.");
      e.preventDefault();
      setUserEmail("");
    }
  };

  return (
    <div className="top-wrapper">
      <div className="title-wrapper">
        <div className="introduce-table">
          <p className="text-top">아웃룩을 새롭게</p>
          <p className="text-bottom">더 가치 있게 </p>
          <span>
            토틀은 Outlook에서 부족한 부분들을 채워주는
            <br />
            올인원 아웃룩 애드인 솔루션입니다.
          </span>
        </div>
        <div className="email-table">
          <div className="form-wrapper">
            <form id="addFormw202303277633fa032962e" method="POST">
              <input
                className="email-input"
                placeholder="이메일 주소를 입력해주세요."
                value={userEmail}
                required
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              ></input>
              <button
                className="email-button"
                onClick={(e) => {
                  buttonHandler(e);
                }}
              >
                계정 생성하기
              </button>
            </form>
          </div>
          <p className="email-text">
            무료 계정을 생성해 토틀의 다양한 기능을 활용해보세요!
          </p>
        </div>
        <a href="http://totlelab.com/pricing" className="pricing-link">
          <div className="subscribe">→ 토틀 구독하기</div>
        </a>
      </div>
      <div className="video-wrapper">
        <WistiaPlayer
          videoId="4pzjgbcafv"
          wrapper="wistia-player-container-1"
        />
      </div>
    </div>
  );
};

export default SectionTop;
