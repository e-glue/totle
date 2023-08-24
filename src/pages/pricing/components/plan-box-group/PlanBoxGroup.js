import "./planBoxGroup.scss";
import PlanBox from "../plan-box/PlanBox";

const PLAN_DATA_LIST = [
  {
    name: "FREE",
    nameKr: "무료",
    monthlyPrice: ["0", "월"],
    yearlyPrice: ["0", "월"],
    buttonTitle: "무료로 시작",
    buttonDesign: "lined",
    buttonLink: "http://www.totlelab.com/download",
    featuresTitle: "주요 제공 기능:",
    features: [
      <>대용량 파일 첨부 월 3회</>,
      <>
        사용자 당<em>5GB</em>스토리지
      </>,
      <>수신확인 및 알림 월 10회</>,
      <>개별발송 월 5회</>,
      <>매크로 발송 월 5회</>,
      <>HTML 소스 편집 및 발송</>,
      <>메일 암호화 발송</>,
      <>단일 메일 가져오기 / 내보내기</>,
    ],
  },
  {
    name: "PERSONAL",
    nameKr: "퍼스널",
    monthlyPrice: ["5,000", "월"],
    yearlyPrice: ["50,000", "1년", "약 4,167원/월"],
    buttonTitle: "구독하기",
    buttonDesign: "filled",
    buttonLink: "https://smartstore.naver.com/egluecloud/products/7082495548",
    featuresTitle: "무료 제공 기능 +",
    features: [
      <>대용량 파일 첨부 월 무제한</>,
      <>
        사용자 당<em>15GB</em>스토리지
      </>,
      <>파일 보관기간 최대 30일</>,
      <>수신확인 및 알림 무제한</>,
      <>개별 발송 및 매크로 발송 무제한</>,
      <>메일 서식</>,
      <>메일 주소록</>,
      <>첨부파일 압축 및 암호화</>,
      <>메일 가져오기 / 내보내기 (다중 메일)</>,
    ],
  },
  {
    name: "BUSINESS",
    nameKr: "비즈니스",
    monthlyPrice: ["12,000", "월"],
    yearlyPrice: ["120,000", "1년", "약 10,000원/월"],
    buttonTitle: "구독하기",
    buttonDesign: "filled",
    buttonLink: () => {
      // TODO: 모달 팝업 핸들러 함수 적용
      alert("test");
    },
    featuresTitle: "Personal 제공 기능 +",
    features: [
      <>
        사용자 당<em>25GB</em>스토리지
      </>,
      <>파일 보관 기간 무제한</>,
      <>조직도 생성 및 관리</>,
      <>Microsoft Teams 조직도 연동</>,
      <>관리자 포털</>,
    ],
  },
  {
    name: "ENTERPRISE",
    nameKr: "엔터프라이즈",
    monthlyPrice: ["15,000", "월"],
    yearlyPrice: ["150,000", "1년", "약 12,500원/월"],
    buttonTitle: "문의하기",
    buttonDesign: "filled",
    buttonLink:
      "https://forms.office.com/Pages/ResponsePage.aspx?id=QnzjJCmrKUikD9_iXXV2VrxAedWlGPhPk-ftShcpvVBUOUNTTUhBRjFGUlBXRzhZQzU2U1cwUDNUWS4u",
    featuresTitle: "Business 제공 기능 +",
    features: [
      <>
        사용자 스토리지<em>무제한</em>
        <span className="plan-small-text">(보유 서버 스펙에 따름)</span>
      </>,
      <>
        메일 당 첨부 가능 용량 설정 <br />
        무제한
      </>,
      <>사용자 용량 설정 무제한</>,
      <>메일 당 첨부 가능 용량 설정 무제한</>,
      <>확장자 별 파일 첨부 제한</>,
      <>조건부 메일 발송 제한</>,
      <>승인 메일</>,
    ],
  },
];

const PlanBoxGroup = ({ isToggle }) => {
  return (
    <div className="plan-container">
      {PLAN_DATA_LIST.map((planData) => (
        <PlanBox planData={planData} isToggle={isToggle} key={planData.name} />
      ))}
    </div>
  );
};

export default PlanBoxGroup;
