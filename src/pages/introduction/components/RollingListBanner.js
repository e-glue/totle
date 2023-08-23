import "./RollingListBanner.scss";
import customer1 from "../../../assets/introduction/dgb-capital.png";
import customer2 from "../../../assets/introduction/skc-infraservice.png";
import customer3 from "../../../assets/introduction/unives.png";
import customer4 from "../../../assets/introduction/millie.png";
import customer5 from "../../../assets/introduction/siwonschool.png";
import customer6 from "../../../assets/introduction/sk-broadband.png";
import customer7 from "../../../assets/introduction/cosmax.png";
import customer8 from "../../../assets/introduction/hankook-research.png";
import customer9 from "../../../assets/introduction/kpac.png";
import customer10 from "../../../assets/introduction/hyundai-lng.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-list">
        <ul>
          <div className="banner-item original">
            <li>
              <div className="banner-img">
                <img src={customer1} />
              </div>
            </li>
            <li>
              <div className="banner-img">
                <img src={customer2} />
              </div>
            </li>
            <li>
              <div className="banner-img">
                <img src={customer3} />
              </div>
            </li>
            <li>
              <div className="banner-img">
                <img src={customer4} />
              </div>
            </li>
            <li>
              <div className="banner-img">
                <img src={customer5} />
              </div>
            </li>
            <li>
              <div className="banner-img">
                <img src={customer6} />
              </div>
            </li>
            <li>
              <div className="banner-img">
                <img src={customer7} />
              </div>
            </li>
            <li>
              <div className="banner-img">
                <img src={customer8} />
              </div>
            </li>
            <li>
              <div className="banner-img">
                <img src={customer9} />
              </div>
            </li>
            <li>
              <div className="banner-img">
                <img src={customer10} />
              </div>
            </li>
          </div>
          {/* banner-clone */}
          <div className="banner-item clone">
            <li>
              <div className="banner-img">
                <img src={customer1} />
              </div>
            </li>
            <li>
              <div className="banner-img">
                <img src={customer2} />
              </div>
            </li>
            <li>
              <div className="banner-img">
                <img src={customer3} />
              </div>
            </li>
            <li>
              <div className="banner-img">
                <img src={customer4} />
              </div>
            </li>
            <li>
              <div className="banner-img">
                <img src={customer5} />
              </div>
            </li>
            <li>
              <div className="banner-img">
                <img src={customer6} />
              </div>
            </li>
            <li>
              <div className="banner-img">
                <img src={customer7} />
              </div>
            </li>
            <li>
              <div className="banner-img">
                <img src={customer8} />
              </div>
            </li>
            <li>
              <div className="banner-img">
                <img src={customer9} />
              </div>
            </li>
            <li>
              <div className="banner-img">
                <img src={customer10} />
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
