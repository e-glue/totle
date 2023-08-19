import "../../styles/styles.scss";
import "./pricing.scss";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import PricingToggle from "./components/PricingToggle";
import { useState } from "react";

const Pricing = () => {
  const [isToggle, setIsToggle] = useState(true);

  const onChangeToggleHandler = () => {
    setIsToggle(!isToggle);
    console.log(isToggle);
    return;
  };

  return (
    <>
      <NavBar />
      <div className="pricing-bg">
        <section className="wrap-container width-1304">
          <hgroup className="title-group">
            <h1 className="title">토들 구독요금</h1>
            <h2 className="sub-title">
              나에게 <span>딱 맞는 구독 플랜</span>을 선택해보세요!
            </h2>
          </hgroup>

          <article>
            <div className="toggle-wrapper">
              <PricingToggle onChange={onChangeToggleHandler} />
              <p className="toggle-guide">(연간 결제 시 20% 할인)</p>
              <br />
            </div>
            <div className="plan-container">
              <div className="plan-box">
                <hgroup className="plan-title-group">
                  <h3 className="plan-title-en">FREE</h3>
                  <p className="plan-title-kr">무료</p>
                </hgroup>
                <div className="plan-price">
                  <p className="person">사용자 당</p>
                  <p className="by-period">
                    <span>0</span> 원/월
                  </p>
                  <p className="by-period-month">&nbsp;</p>
                </div>
                <Button
                  className="rounded-button"
                  size="lg"
                  design="lined"
                  onClick={() => {}}
                >
                  무료로 시작
                </Button>
                <div className="plan-feat-wrapper">
                  <p className="plan-feat-title">주요 제공 기능:</p>
                  <ul className="plan-feat">
                    <li>대용량 파일 첨부 월 3회</li>
                    <li>
                      사용자 당<em>5GB</em>
                      스토리지
                    </li>
                    <li>수신확인 및 알림 월 10회</li>
                    <li>개별발송 월 5회</li>
                    <li>매크로 발송 월 5회</li>
                    <li>HTML 소스 편집 및 발송</li>
                    <li>메일 암호화 발송</li>
                    <li>단일 메일 가져오기 /내보내기</li>
                  </ul>
                </div>
              </div>
              <div className="plan-box">
                <hgroup className="plan-title-group">
                  <h3 className="plan-title-en">PERSONAL</h3>
                  <p className="plan-title-kr">퍼스널</p>
                </hgroup>
                <div className="plan-price">
                  <p className="person">사용자 당</p>
                  <p className="by-period">
                    <span>{isToggle ? "5,000" : "50,000"}</span> 원/월
                  </p>
                  <p className="by-period-month">
                    {isToggle ? "" : "약 4,167원/월"}
                  </p>
                </div>
                <Button
                  className="rounded-button"
                  size="lg"
                  design="filled"
                  onClick={() => {}}
                >
                  구독하기
                </Button>
                <div className="plan-feat-wrapper">
                  <p className="plan-feat-title">무료 제공 기능 +</p>
                  <ul className="plan-feat">
                    <li>대용량 파일 첨부 무제한</li>
                    <li>
                      사용자 당 <em>15GB</em> 스토리지
                    </li>
                    <li>파일 보관기간 최대 30일</li>
                    <li>수신확인 및 알림 무제한</li>
                    <li>개별 발송 및 매크로 발송 무제한</li>
                    <li>메일 서식</li>
                    <li>메일 주소록</li>
                    <li>첨부파일 압축 및 암호화</li>
                    <li>메일 가져오기 / 내보내기 (다중 메일)</li>
                  </ul>
                </div>
              </div>
              <div className="plan-box">
                <hgroup className="plan-title-group">
                  <h3 className="plan-title-en">BUSINESS</h3>
                  <p className="plan-title-kr">비즈니스</p>
                </hgroup>
                <div className="plan-price">
                  <p className="person">사용자 당</p>
                  <p className="by-period">
                    <span>{isToggle ? "12,000" : "120,000"}</span> 원/월
                  </p>
                  <p className="by-period-month">
                    {isToggle ? "" : "약 10,000원/월"}
                  </p>
                </div>
                <Button
                  className="rounded-button"
                  size="lg"
                  design="filled"
                  onClick={() => {}}
                >
                  구독하기
                </Button>
                <div className="plan-feat-wrapper">
                  <p className="plan-feat-title">Personal 제공 기능 +</p>
                  <ul className="plan-feat">
                    <li>
                      사용자 당 <em>25GB</em> 스토리지
                    </li>
                    <li>수신확인 및 알림 월 10회</li>
                    <li>파일 보관 기간 무제한</li>
                    <li>조직도 생성 및 관리</li>
                    <li>Microsoft Teams 조직도 연동</li>
                    <li>관리자 포털</li>
                  </ul>
                </div>
              </div>
              <div className="plan-box">
                <hgroup className="plan-title-group">
                  <h3 className="plan-title-en">ENTERPRISE</h3>
                  <p className="plan-title-kr">엔터프라이즈</p>
                </hgroup>
                <div className="plan-price">
                  <p className="person">사용자 당</p>
                  <p className="by-period">
                    <span>{isToggle ? "15,000" : "150,000"}</span> 원/월
                  </p>
                  <p className="by-period-month">
                    {isToggle ? "" : "약 12,500원/월"}
                  </p>
                </div>
                <Button
                  className="rounded-button"
                  size="lg"
                  design="filled"
                  onClick={() => {}}
                >
                  문의하기
                </Button>
                <div className="plan-feat-wrapper">
                  <p className="plan-feat-title">Business 제공 기능 +</p>
                  <ul className="plan-feat">
                    <li>
                      사용자 스토리지<em>무제한</em>
                      <span className="plan-small-text">
                        (보유 서버 스펙에 따름)
                      </span>
                    </li>
                    <li>
                      메일 당 첨부 가능 용량 설정 <br />
                      무제한
                    </li>
                    <li>사용자 용량 설정 무제한</li>
                    <li>메일 당 첨부 가능 용량 설정 무제한</li>
                    <li>확장자 별 파일 첨부 제한</li>
                    <li>조건부 메일 발송 제한</li>
                    <li>승인 메일</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="plan-guide">
              상기 구독요금은 1인 기준의 월간 사용 요금으로, VAT(부가세)가
              포함되지 않은 금액입니다.
            </p>
          </article>
        </section>
      </div>
    </>
  );
};

export default Pricing;
