import "./planGuideText.scss";

const PlanGuideText = () => {
  return (
    <>
      <p className="plan-guide pc">
        상기 구독요금은 1인 기준의 월간 사용 요금으로, VAT(부가세)가 포함되지
        않은 금액입니다.
      </p>
      <p className="plan-guide m">
        * 상기 구독요금은 1인 기준의 월간 사용 요금으로, VAT(부가세)가 포함되지
        않은 금액입니다.
        <br />* 상세 요금 비교 표는 데스크탑 버전으로 확인 부탁드립니다.
      </p>
    </>
  );
};

export default PlanGuideText;
