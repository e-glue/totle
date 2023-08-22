import "./Banner.scss";
import customer1 from "../../../assets/introduction/DGB-캐피탈.png";
import customer2 from "../../../assets/introduction/SKC-인프라서비스.png";
import customer3 from "../../../assets/introduction/대학내일.png";
import customer4 from "../../../assets/introduction/밀리의서재.png";
import customer5 from "../../../assets/introduction/시원스쿨.png";
import customer6 from "../../../assets/introduction/에스케이브로드밴드.png";
import customer7 from "../../../assets/introduction/코스맥스.png";
import customer8 from "../../../assets/introduction/한국리서치.png";
import customer9 from "../../../assets/introduction/한국폴리아세탈.png";
import customer10 from "../../../assets/introduction/현대-LNG.png";



const Banner = () => {
  return (
    <div className="banner">  
      <div className="banner-list">
        <ul>
          <div className="banner-item original">
            <li>
              <div className='banner-img'><img src={customer1}/></div>
            </li>
            <li>
              <div className='banner-img'><img src={customer2}/></div>
            </li>
            <li>
              <div className='banner-img'><img src={customer3}/></div>
            </li>
            <li>
              <div className='banner-img'><img src={customer4}/></div>
            </li>
            <li>
              <div className='banner-img'><img src={customer5}/></div>
            </li>
            <li>
              <div className='banner-img'><img src={customer6}/></div>
            </li>
            <li>
              <div className='banner-img'><img src={customer7}/></div>
            </li>
            <li>
              <div className='banner-img'><img src={customer8}/></div>
            </li>
            <li>
              <div className='banner-img'><img src={customer9}/></div>
            </li>
            <li>
              <div className='banner-img'><img src={customer10}/></div>
            </li>
          </div>
        {/* banner-clone */}
          <div className="banner-item clone">
            <li>
              <div className='banner-img'><img src={customer1}/></div>
            </li>
            <li>
              <div className='banner-img'><img src={customer2}/></div>
            </li>
            <li>
              <div className='banner-img'><img src={customer3}/></div>
            </li>
            <li>
              <div className='banner-img'><img src={customer4}/></div>
            </li>
            <li>
              <div className='banner-img'><img src={customer5}/></div>
            </li>
            <li>
              <div className='banner-img'><img src={customer6}/></div>
            </li>
            <li>
              <div className='banner-img'><img src={customer7}/></div>
            </li>
            <li>
              <div className='banner-img'><img src={customer8}/></div>
            </li>
            <li>
              <div className='banner-img'><img src={customer9}/></div>
            </li>
            <li>
              <div className='banner-img'><img src={customer10}/></div>
            </li>
          </div>
        </ul>
      </div>
    </div>  
  )
}

export default Banner;