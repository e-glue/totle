import "../../../../styles/styles.scss";
import "./planSection.scss";
import PlanBoxGroup from "../plan-box-group/PlanBoxGroup";
import PlanGuideText from "../plan-guide-text/PlanGuideText";
import PricingToggle from "../pricing-toggle/PricingToggle";
import SectionTitle from "../section-title/SectionTitle";

const SECTION_TITLE = {
  title: "토들 구독요금",
  subTitle: (
    <>
      나에게 <em>딱 맞는 구독 플랜</em>을 선택해보세요!
    </>
  ),
};

const PlanSection = ({ onChangeToggleHandler, isToggle }) => {
  return (
    <section className="pricing-container color-bg">
      <div className="wrap-container width-1304">
        <SectionTitle titleData={SECTION_TITLE} />
        <article>
          <div className="toggle-wrapper">
            <PricingToggle onChange={onChangeToggleHandler} />
            <p className="toggle-guide">(연간 결제 시 20% 할인)</p>
          </div>
          <PlanBoxGroup isToggle={isToggle} />
          <PlanGuideText />
        </article>
      </div>
    </section>
  );
};

export default PlanSection;
