import "../../styles/styles.scss";
import "./introduction.scss";
import SectionTop from "./components/section-top/SectionTop";
import SectionProduct from "./components/section-product/SectionProduct";
import SectionCustomer from "./components/section-customer/SectionCustomer";

const Introduction = () => {
  return (
    <div className="wrap-container width">
      <SectionTop></SectionTop>
      <SectionProduct></SectionProduct>
      <SectionCustomer></SectionCustomer>
    </div>
  );
};

export default Introduction;
