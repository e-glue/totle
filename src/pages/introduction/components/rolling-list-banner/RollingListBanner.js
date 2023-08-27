import "./RollingListBanner.scss";
import customer1 from "../../../../assets/introduction/dgb-capital.png";
import customer2 from "../../../../assets/introduction/skc-infraservice.png";
import customer3 from "../../../../assets/introduction/unives.png";
import customer4 from "../../../../assets/introduction/millie.png";
import customer5 from "../../../../assets/introduction/siwonschool.png";
import customer6 from "../../../../assets/introduction/sk-broadband.png";
import customer7 from "../../../../assets/introduction/cosmax.png";
import customer8 from "../../../../assets/introduction/hankook-research.png";
import customer9 from "../../../../assets/introduction/kpac.png";
import customer10 from "../../../../assets/introduction/hyundai-lng.png";
import Banner from "../banner/Banner";

const RollingListBanner = () => {
  const customers = [
    customer1,
    customer2,
    customer3,
    customer4,
    customer5,
    customer6,
    customer7,
    customer8,
    customer9,
    customer10,
  ];
  return (
    <div className="banner">
      <div className="banner-list">
        <ul>
          <div className="banner-item original">
            {customers.map((customer) => {
              return (
                <li>
                  <Banner customer={customer} />
                </li>
              );
            })}
          </div>
          {/* banner-clone */}
          <div className="banner-item clone">
            {customers.map((customer) => {
              return (
                <li>
                  <Banner customer={customer} />
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default RollingListBanner;
