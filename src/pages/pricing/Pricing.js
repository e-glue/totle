import { useState } from "react";
import "../../styles/styles.scss";
import "./pricing.scss";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import PricingToggle from "./components/PricingToggle";
import CheckCircle from "./components/CheckCircle";

const Pricing = () => {
  const [isToggle, setIsToggle] = useState(true);

  const onChangeToggleHandler = () => setIsToggle(!isToggle);

  return (
    <>
      <NavBar />
      <div className="pricing-container color-bg">
        <section className="wrap-container width-1304">
          <hgroup className="title-group">
            <h1 className="title">토들 구독요금</h1>
            <h2 className="sub-title">
              나에게 <em>딱 맞는 구독 플랜</em>을 선택해보세요!
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
            <p className="plan-guide pc">
              상기 구독요금은 1인 기준의 월간 사용 요금으로, VAT(부가세)가
              포함되지 않은 금액입니다.
            </p>
            <p className="plan-guide m">
              * 상기 구독요금은 1인 기준의 월간 사용 요금으로, VAT(부가세)가
              포함되지 않은 금액입니다.
              <br />* 상세 요금 비교 표는 데스크탑 버전으로 확인 부탁드립니다.
            </p>
          </article>
        </section>
      </div>

      <div className="pricing-container compare-wrapper">
        <section className="wrap-container width-1130">
          <hgroup className="title-group">
            <h1 className="title">구독요금 비교하기</h1>
          </hgroup>

          <article className="table-wrapper">
            <div className="table-sticky-header">
              <table className="pricing-sticky-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>
                      <p className="table-title-en">FREE</p>
                      <p className="table-title-price">0원/월</p>
                    </th>
                    <th>
                      <p className="table-title-en">PERSONAL</p>
                      <p className="table-title-price">5,000원/월</p>
                    </th>
                    <th>
                      <p className="table-title-en">BUSINESS</p>
                      <p className="table-title-price">12,000원/월</p>
                    </th>
                    <th>
                      <p className="table-title-en">ENTERPRISE</p>
                      <p className="table-title-price">15,000원/월</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>
                      <Button
                        className="rounded-button"
                        size="sm"
                        design="lined"
                        onClick={() => {}}
                      >
                        무료로 시작
                      </Button>
                    </td>
                    <td>
                      <Button
                        className="rounded-button"
                        size="sm"
                        design="lined"
                        onClick={() => {}}
                      >
                        구독하기
                      </Button>
                    </td>
                    <td>
                      <Button
                        className="rounded-button"
                        size="sm"
                        design="lined"
                        onClick={() => {}}
                      >
                        문의하기
                      </Button>
                    </td>
                    <td>
                      <Button
                        className="rounded-button"
                        size="sm"
                        design="lined"
                        onClick={() => {}}
                      >
                        문의하기
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th colSpan={5}>대용량 파일 첨부</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>사용가능 횟수</td>
                  <td>
                    3<span className="table-small-text">회/월</span>
                  </td>
                  <td>무제한</td>
                  <td>무제한</td>
                  <td>무제한</td>
                </tr>
                <tr>
                  <td>제공 용량</td>
                  <td>
                    5GB<span className="table-small-text">/사용자</span>
                  </td>
                  <td>
                    15GB<span className="table-small-text">/사용자</span>
                  </td>
                  <td>
                    25GB<span className="table-small-text">/사용자</span>
                  </td>
                  <td>
                    무제한
                    <br />
                    <span className="table-small-text">
                      (보유 서버 스펙에 따름)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>메일 당 첨부 가능 용량</td>
                  <td>
                    1GB<span className="table-small-text">/메일</span>
                  </td>
                  <td>
                    5GB<span className="table-small-text">/메일</span>
                  </td>
                  <td>
                    10GB<span className="table-small-text">/메일</span>
                  </td>
                  <td>무제한</td>
                </tr>
                <tr>
                  <td>파일 당 일 최대 다운로드 횟수</td>
                  <td>
                    10<span className="table-small-text">회/일</span>
                  </td>
                  <td>
                    50<span className="table-small-text">회/일</span>
                  </td>
                  <td>
                    100<span className="table-small-text">회/일</span>
                  </td>
                  <td>무제한</td>
                </tr>
                <tr>
                  <td>파일 다운로드 가능 기간</td>
                  <td>
                    7<span className="table-small-text">일</span>
                  </td>
                  <td>
                    30<span className="table-small-text">일</span>
                  </td>
                  <td>무제한</td>
                  <td>무제한</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colSpan={5}>메일 발송 옵션</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>수신확인 및 알림</td>
                  <td>
                    10<span className="table-small-text">회/월</span>
                  </td>
                  <td>무제한</td>
                  <td>무제한</td>
                  <td>무제한</td>
                </tr>
                <tr>
                  <td>개별 발송 (1:1 발송)</td>
                  <td rowSpan={2}>
                    5
                    <span className="table-small-text">
                      회/월
                      <br />
                      1회 최대 발송 가능 수신자: 50명
                    </span>
                  </td>
                  <td>무제한</td>
                  <td>무제한</td>
                  <td>무제한</td>
                </tr>
                <tr>
                  <td>매크로 발송 (개인화 발송)</td>
                  <td>무제한</td>
                  <td>무제한</td>
                  <td>무제한</td>
                </tr>
                <tr>
                  <td>HTML 소스 편집 및 발송</td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                </tr>
                <tr>
                  <td>메시지 회수</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <CheckCircle />
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colSpan={5}>협업 및 커뮤니케이션</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>메모</td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                </tr>
                <tr>
                  <td>실시간 채팅</td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                </tr>
                <tr>
                  <td>이메일 서식 (템플릿)</td>
                  <td></td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                </tr>
                <tr>
                  <td>메일 주소록</td>
                  <td></td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                </tr>
                <tr>
                  <td>조직도</td>
                  <td></td>
                  <td></td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                </tr>
                <tr>
                  <td>MS Teams 조직도</td>
                  <td></td>
                  <td></td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colSpan={5}>이메일 보안 및 기타 기능</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    메일 암호화
                    <span className="table-small-text">(PDF 암호화 메일)</span>
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>첨부파일 압축 및 암호화</td>
                  <td></td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>확장자 볓 파일 첨부 제한</td>
                  <td></td>
                  <td></td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>외부 수신자 확인 알림</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>조건부 메일 발송 제한</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>승인 메일</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>메일 가져오기 / 내보내기</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colSpan={5}>관리자 도구</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>사용자 / 세션 관리</td>
                  <td></td>
                  <td></td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                </tr>
                <tr>
                  <td>
                    일반 / 대용량 첨부 관리 <br />
                    <span className="table-small-text">
                      다운로드 로그, 사용량 및 사용자 통계, 대용량 파일 및 메일
                      관리, 허용 IP 관리
                    </span>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                </tr>
                <tr>
                  <td>조직도 관리</td>
                  <td></td>
                  <td></td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                </tr>
                <tr>
                  <td>
                    보안 기능 관리 <br />
                    <span className="table-small-text">
                      메일 발송 제한, 파일 첨부 제한, 외부 수신자 확인, 첨부파일
                      암호화 설정
                    </span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <CheckCircle />
                  </td>
                </tr>
                <tr>
                  <td>
                    써드 파티 연동 관리 <br />
                    <span className="table-small-text">
                      Microsoft Teams 조직도 연동
                    </span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <CheckCircle />
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colSpan={5}>totle OWA (Outlook On the Web)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>대용량 파일 첨부</td>
                  <td></td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                </tr>
                <tr>
                  <td>이메일 서식</td>
                  <td></td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                </tr>
                <tr>
                  <td>메일 주소록</td>
                  <td></td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                  <td>
                    <CheckCircle />
                  </td>
                </tr>
                <tr>
                  <td>수신확인</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colSpan={5}>기술 지원 및 기타</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>고객지원</td>
                  <td>이메일 지원</td>
                  <td>이메일 및 전화지원</td>
                  <td>
                    이메일, 전화 및 원격지원 <br />
                    <span className="table-small-text">+ 우선순위 지원</span>
                  </td>
                  <td>
                    이메일, 전화 및 원격지원 <br />
                    <span className="table-small-text">+ 우선순위 지원</span>
                  </td>
                </tr>
                <tr>
                  <td>추가 커스터마이징</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <CheckCircle />
                  </td>
                </tr>
                <tr>
                  <td>비고</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <span className="table-small-text">
                      서버 비용을 제외한 비용이며 서버 세팅비가 별도로
                      청구됩니다.
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>동시 접속가능 디바이스 수</td>
                  <td colSpan={4}>
                    3대
                    <br />
                    <span className="table-small-text">
                      (토틀 하나의 계정으로 최대 3개의 Outlook 에서 토틀을
                      사용할 수 있습니다.)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
};

export default Pricing;
